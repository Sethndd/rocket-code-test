package org.example.database.mapper;

import org.example.database.entity.InventoryEntity;

import java.util.List;

public interface InventoryEntityMapper {
    InventoryEntity findById(Long id);
    List<InventoryEntity> findAll();
    void insert(InventoryEntity inventoryEntity);
    void update(InventoryEntity inventoryEntity);
}
