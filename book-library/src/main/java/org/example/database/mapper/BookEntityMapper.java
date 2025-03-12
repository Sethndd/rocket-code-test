package org.example.database.mapper;

import org.example.database.entity.BookEntity;

import java.util.List;

public interface BookEntityMapper {

    BookEntity findById(Long id);
    List<BookEntity> findAll();
    void insert(BookEntity bookEntity);
    void update(BookEntity bookEntity);
    void delete(Long id);
}
