package org.example.service;

import org.example.database.entity.BookEntity;

import java.util.List;

public interface BookService {
    BookEntity findById(Long id);
    List<BookEntity> findAll();
    void insert(BookEntity bookEntity);
    void update(BookEntity bookEntity);
    void delete(Long id);
}
