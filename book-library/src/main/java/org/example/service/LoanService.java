package org.example.service;

import org.example.database.entity.LoansToBook;
import org.example.database.entity.LoanEntity;
import org.example.database.entity.LoansToStudent;
import org.example.database.entity.Page;

import java.util.List;

public interface LoanService {
    LoanEntity findById(Long id);
    List<LoanEntity> findAll();
    Page<LoansToStudent> findByStudentId(Long bookId, Long size, Long page);
    Page<LoansToBook> findByBookId(Long bookId, Long size, Long page);
    void insert(LoanEntity loanEntity);
    void update(LoanEntity loanEntity);
}
