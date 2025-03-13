package org.example.database.mapper;

import org.example.database.entity.BookStatus;
import org.example.database.entity.BookWithInventory;
import org.example.database.entity.InventoryEntity;

import java.util.List;

public interface InventoryEntityMapper {
    InventoryEntity findById(Long id);
    InventoryEntity findByBookId(Long id);
    List<BookWithInventory> findAll(Long size, Long offset);
    Long count();
    void insert(InventoryEntity inventoryEntity);
    void update(InventoryEntity inventoryEntity);
    BookStatus findBookStatus(Long bookId);

}
