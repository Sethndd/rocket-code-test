package org.example.database.mapper;

import org.example.database.entity.LoanEntity;

import java.util.List;

public interface LoanEntityMapper {
    LoanEntity findById(Long id);
    List<LoanEntity> findAll();
    List<LoanEntity> findByStudentId(Long studentId);
    List<LoanEntity> findByBookId(Long bookId);
    void insert(LoanEntity loanEntity);
    void update(LoanEntity loanEntity);
}
