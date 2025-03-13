package org.example.service;

import lombok.AllArgsConstructor;
import org.example.database.entity.LoansToBook;
import org.example.database.entity.LoanEntity;
import org.example.database.entity.LoansToStudent;
import org.example.database.entity.Page;
import org.example.database.mapper.LoanEntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LoanServiceImpl implements LoanService {
    private final LoanEntityMapper loanEntityMapper;

    @Override
    public LoanEntity findById(Long id) {
        return loanEntityMapper.findById(id);
    }

    @Override
    public List<LoanEntity> findAll() {
        return loanEntityMapper.findAll();
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
        List<LoansToBook> list = loanEntityMapper.findByBookId(bookId, size, offset);
        Long totalElements = loanEntityMapper.countByBook();

        return new Page<>(list, page, size, totalElements);
    }

    @Override
    public void insert(LoanEntity loanEntity) {
        loanEntityMapper.insert(loanEntity);
    }

    @Override
    public void update(LoanEntity loanEntity) {
        loanEntityMapper.update(loanEntity);
    }
}
