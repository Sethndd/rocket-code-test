package org.example.service;

import org.example.database.entity.LoanEntity;

import java.util.List;

public interface LoanService {
    LoanEntity findById(Long id);
    List<LoanEntity> findAll();
    List<LoanEntity> findByStudentId(Long studentId);
    List<LoanEntity> findByBookId(Long bookId);
    void insert(LoanEntity loanEntity);
    void update(LoanEntity loanEntity);
}
