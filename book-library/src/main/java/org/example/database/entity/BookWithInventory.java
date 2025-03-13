package org.example.database.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookWithInventory {
    private Long id;
    private Long bookId;
    private String title;
    private String author;
    private String publisher;
    private Long publicationYear;
    private Boolean active;
    private String description;
    private Long quantity;
}
