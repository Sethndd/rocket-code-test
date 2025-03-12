package org.example.database.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoanEntity {
    private Long id;
    private Long bookId;
    private Long studentId;
    private Date loanDate;
    private Date dueDate;
    private Date returnDate;

    public Boolean isReturned() {
        return returnDate != null;
    }

    public Boolean isOverdue() {
        return !isReturned() && new Date().after(dueDate);
    }
}
