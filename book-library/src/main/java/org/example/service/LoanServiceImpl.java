package org.example.service;

import lombok.AllArgsConstructor;
import org.example.database.entity.LoanEntity;
import org.example.database.mapper.LoanEntityMapper;
import org.springframework.stereotype.Service;

import java.util.Collections;
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
    public List<LoanEntity> findByStudentId(Long studentId) {
        return loanEntityMapper.findByStudentId(studentId);
    }

    @Override
    public List<LoanEntity> findByBookId(Long bookId) {
        return loanEntityMapper.findByBookId(bookId);
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
