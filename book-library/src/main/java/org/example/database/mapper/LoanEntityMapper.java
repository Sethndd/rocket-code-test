package org.example.database.mapper;

import org.example.database.entity.LoanAllData;
import org.example.database.entity.LoanEntity;
import org.example.database.entity.LoansToBook;
import org.example.database.entity.LoansToStudent;

import java.util.List;

public interface LoanEntityMapper {
    LoanEntity findById(Long id);
    List<LoanEntity> findAll(Long size, Long offset);
    List<LoanAllData> findAllData(Long size, Long offset);
    List<LoansToStudent> findByStudentId(Long studentId, Long size, Long offset);
    List<LoansToBook> findByBookIdPaginated(Long bookId, Long size, Long offset);
    List<LoansToBook> findByBookId(Long bookId);
    Long count();
    Long countByStudent();
    Long countByBook();
    void insert(LoanEntity loanEntity);
    void update(LoanEntity loanEntity);
}
