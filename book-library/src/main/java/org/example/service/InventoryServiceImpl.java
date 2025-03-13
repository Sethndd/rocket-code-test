package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.BookStatus;
import org.example.database.entity.InventoryEntity;
import org.example.database.entity.LoansToBook;
import org.example.database.mapper.InventoryEntityMapper;
import org.example.database.mapper.LoanEntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private final InventoryEntityMapper inventoryEntityMapper;
    private final LoanEntityMapper loanEntityMapper;

    @Override
    public InventoryEntity findById(Long id) {
        return inventoryEntityMapper.findById(id);
    }

    @Override
    public List<InventoryEntity> findAll() {
        return inventoryEntityMapper.findAll();
    }

    @Override
    public void insert(InventoryEntity inventoryEntity) {
        inventoryEntityMapper.insert(inventoryEntity);
    }

    @Override
    public void update(InventoryEntity inventoryEntity) {
        inventoryEntityMapper.update(inventoryEntity);
    }

    @Override
    public BookStatus findByBookId(Long bookId) {
        BookStatus status = inventoryEntityMapper.findBookStatus(bookId);
        if(status.getTotal() == null) {
            status.setTotal(0L);
        }

        List<LoansToBook> loans = loanEntityMapper.findByBookId(bookId);
        Long overdue = (long) (int) loans.stream().filter(LoansToBook::isOverdue).count();
        Long borrowed = (long) (int) loans.stream().filter(LoansToBook::isNotReturned).count();

        status.setAvailable(status.getTotal() - borrowed - overdue);
        status.setBorrowed(borrowed);
        status.setOverdue(overdue);
        return status;
    }
}
