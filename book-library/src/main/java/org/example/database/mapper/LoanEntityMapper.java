package org.example.database.mapper;

import org.example.database.entity.LoanEntity;
import org.example.database.entity.LoansToStudent;

import java.util.List;

public interface LoanEntityMapper {
    LoanEntity findById(Long id);
    List<LoanEntity> findAll();
    List<LoanEntity> findByStudentId(Long studentId);
    List<LoansToStudent> findByBookId(Long bookId, Long size, Long offset);
    Long count();
    void insert(LoanEntity loanEntity);
    void update(LoanEntity loanEntity);
}
