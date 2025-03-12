package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.BookEntity;
import org.example.database.mapper.BookEntityMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookEntityMapper bookEntityMapper;

    @Override
    public BookEntity findById(Long id) {
        return bookEntityMapper.findById(id);
    }

    public List<BookEntity> findAll() {
        return bookEntityMapper.findAll();
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
