package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.BookEntity;
import org.example.database.entity.Page;
import org.example.database.mapper.BookEntityMapper;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookEntityMapper bookEntityMapper;

    @Override
    public BookEntity findById(Long id) {
        return bookEntityMapper.findById(id);
    }

    public Page<BookEntity> findAll(Long size, Long page) {
        Long offset = size * (page - 1);
        List<BookEntity> entities = bookEntityMapper.findAll(size, offset);
        Long total = bookEntityMapper.count();
        return new Page<>(entities, page, size, total);
    }

    @Override
    public List<BookEntity> findAllNotPaged() {
        return bookEntityMapper.findAllNotPaged();
    }

    @Override
    public void insert(BookEntity bookEntity) {
        bookEntityMapper.insert(bookEntity);
    }

    @Override
    public void update(BookEntity bookEntity) {
        bookEntityMapper.update(bookEntity);
    }

    @Override
    public void delete(Long id) {
        bookEntityMapper.delete(id);
    }
}
