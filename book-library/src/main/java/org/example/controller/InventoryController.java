package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.BookStatus;
import org.example.database.entity.BookWithInventory;
import org.example.database.entity.InventoryEntity;
import org.example.database.entity.Page;
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

    @GetMapping("/book/{bookId}")
    public BookStatus findByBookId(
            @PathVariable Long bookId
    ) {
        return inventoryService.findByBookId(bookId);
    }

    @GetMapping
    public Page<BookWithInventory> findAll(
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return inventoryService.findAll(page, size);
    }

    @PostMapping
    public void insert(
            @RequestBody InventoryEntity inventoryEntity
    ) {
        inventoryService.insert(inventoryEntity);
    }

    @PutMapping
    public void update(
            @RequestBody InventoryEntity inventoryEntity
    ) {
        inventoryService.update(inventoryEntity);
    }
}
