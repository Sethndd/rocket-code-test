package org.example.service;

import lombok.AllArgsConstructor;
import org.example.database.entity.*;
import org.example.database.mapper.InventoryEntityMapper;
import org.example.database.mapper.LoanEntityMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class LoanServiceImpl implements LoanService {
    private final LoanEntityMapper loanEntityMapper;
    private final InventoryEntityMapper inventoryEntityMapper;

    @Override
    public LoanEntity findById(Long id) {
        return loanEntityMapper.findById(id);
    }

    @Override
    public Page<LoanAllData> findAll(Long size, Long page) {
        Long offset = size * (page - 1);
        List<LoanAllData> list = loanEntityMapper.findAllData(size, offset);
        Long totalElements = loanEntityMapper.count();

        return new Page<>(list, page, size, totalElements);
    }

    @Override
    public Page<LoansToStudent> findByStudentId(Long bookId, Long size, Long page) {
        Long offset = size * (page - 1);
        List<LoansToStudent> list = loanEntityMapper.findByStudentId(bookId, size, offset);
        Long totalElements = loanEntityMapper.countByBook();

        return new Page<>(list, page, size, totalElements);
    }

    @Override
    public Page<LoansToBook> findByBookId(Long bookId, Long size, Long page) {
        Long offset = size * (page - 1);
        List<LoansToBook> list = loanEntityMapper.findByBookIdPaginated(bookId, size, offset);
        Long totalElements = loanEntityMapper.countByBook();

        return new Page<>(list, page, size, totalElements);
    }

    @Override
    public void insert(LoanEntity loanEntity) {
        BookStatus status = findBookStatus(loanEntity.getBookId());
        if(Boolean.FALSE.equals(status.isBorrowable()))
            throw new RuntimeException("Book is not borrowable");

        loanEntityMapper.insert(loanEntity);
    }

    private BookStatus findBookStatus(Long id){
        BookStatus status = inventoryEntityMapper.findBookStatus(id);
        if(status.getTotal() == null) {
            status.setTotal(0L);
        }

        List<LoansToBook> loans = loanEntityMapper.findByBookId(id);
        Long overdue = (long) (int) loans.stream().filter(LoansToBook::isOverdue).count();
        Long borrowed = (long) (int) loans.stream().filter(LoansToBook::isNotReturned).count();

        status.setAvailable(status.getTotal() - borrowed - overdue);
        status.setBorrowed(borrowed);
        status.setOverdue(overdue);
        return status;
    }

    @Override
    public void update(Long id) {
        LoanEntity loanEntity = loanEntityMapper.findById(id);
        if(loanEntity == null)
            throw new RuntimeException("Loan not found");
        loanEntity.setReturnDate(new Date());
        loanEntityMapper.update(loanEntity);
    }
}
