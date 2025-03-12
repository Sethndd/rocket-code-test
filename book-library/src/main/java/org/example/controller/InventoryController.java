package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.InventoryEntity;
import org.example.service.InventoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
@RequiredArgsConstructor
public class InventoryController {
    private final InventoryService inventoryService;

    @GetMapping("/{id}")
    public InventoryEntity findById(
            @PathVariable Long id
    ) {
        return inventoryService.findById(id);
    }

    @GetMapping
    public List<InventoryEntity> findAll() {
        return inventoryService.findAll();
    }

    @PostMapping
    public void insert(InventoryEntity inventoryEntity) {
        inventoryService.insert(inventoryEntity);
    }

    @PutMapping
    public void update(InventoryEntity inventoryEntity) {
        inventoryService.update(inventoryEntity);
    }
}
