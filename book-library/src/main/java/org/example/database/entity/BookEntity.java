package org.example.database.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookEntity {
    private Long id;
    private String title;
    private String author;
    private String publisher;
    private Long publicationYear;
    private Boolean active;
    private String description;
}
