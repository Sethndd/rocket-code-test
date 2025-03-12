package org.example.database.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.example.database.entity.BookEntity;

import java.util.List;

@Mapper
public interface BookEntityMapper {
    List<BookEntity> findAllBooks();
}
