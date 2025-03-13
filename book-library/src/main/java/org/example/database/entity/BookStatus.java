package org.example.database.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookStatus {
    private Long id;
    private String title;
    private Long bookId;
    private String author;
    private Long total;
    private Long available;
    private Long borrowed;
    private Long overdue;

    public Boolean isBorrowable() {
        if(available == null)
            return false;

        return available > 0;
    }
}
