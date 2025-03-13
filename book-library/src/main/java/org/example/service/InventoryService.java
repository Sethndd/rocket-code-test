package org.example.service;

import org.example.database.entity.BookStatus;
import org.example.database.entity.BookWithInventory;
import org.example.database.entity.InventoryEntity;
import org.example.database.entity.Page;

public interface InventoryService {
    InventoryEntity findById(Long id);
    Page<BookWithInventory> findAll(Long page, Long size);
    void insert(InventoryEntity inventoryEntity);
    void update(InventoryEntity inventoryEntity);
    BookStatus findByBookId(Long bookId);
}
