package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.InventoryEntity;
import org.example.database.mapper.InventoryEntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private final InventoryEntityMapper inventoryEntityMapper;

    @Override
    public InventoryEntity findById(Long id) {
        return inventoryEntityMapper.findById(id);
    }

    @Override
    public List<InventoryEntity> findAll() {
        return inventoryEntityMapper.findAll();
    }

    @Override
    public void insert(InventoryEntity inventoryEntity) {
        inventoryEntityMapper.insert(inventoryEntity);
    }

    @Override
    public void update(InventoryEntity inventoryEntity) {
        inventoryEntityMapper.update(inventoryEntity);
    }
}
