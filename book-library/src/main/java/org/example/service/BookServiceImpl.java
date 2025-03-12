package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.BookEntity;
import org.example.database.mapper.BookEntityMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookEntityMapper bookMapper;

    public List<BookEntity> getAllBooks() {
        return bookMapper.findAllBooks();
    }
}
