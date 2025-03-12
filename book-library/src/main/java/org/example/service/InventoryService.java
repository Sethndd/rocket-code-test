package org.example.service;

import org.example.database.entity.InventoryEntity;

import java.util.List;

public interface InventoryService {
    InventoryEntity findById(Long id);
    List<InventoryEntity> findAll();
    void insert(InventoryEntity inventoryEntity);
    void update(InventoryEntity inventoryEntity);
}
