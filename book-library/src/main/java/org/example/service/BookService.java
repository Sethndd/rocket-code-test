package org.example.service;

import org.example.database.entity.BookEntity;
import org.example.database.entity.Page;

import java.util.List;

public interface BookService {
    BookEntity findById(Long id);
    Page<BookEntity> findAll(Long size, Long page);
    void insert(BookEntity bookEntity);
    void update(BookEntity bookEntity);
    void delete(Long id);
}
