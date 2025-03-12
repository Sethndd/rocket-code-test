package org.example.service;

import org.example.database.entity.BookEntity;

import java.util.List;

public interface BookService {
    List<BookEntity> getAllBooks();
}
