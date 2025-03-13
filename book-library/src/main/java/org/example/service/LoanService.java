package org.example.service;

import org.example.database.entity.*;

public interface LoanService {
    LoanEntity findById(Long id);
    Page<LoanAllData> findAll(Long size, Long page);
    Page<LoansToStudent> findByStudentId(Long bookId, Long size, Long page);
    Page<LoansToBook> findByBookId(Long bookId, Long size, Long page);
    void insert(LoanEntity loanEntity);
    void update(Long id);
}
