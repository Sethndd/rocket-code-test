package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.*;
import org.example.database.mapper.InventoryEntityMapper;
import org.example.database.mapper.LoanEntityMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private final InventoryEntityMapper inventoryEntityMapper;
    private final LoanEntityMapper loanEntityMapper;

    @Override
    public InventoryEntity findById(Long id) {
        return inventoryEntityMapper.findById(id);
    }

    @Override
    public Page<BookWithInventory> findAll(Long page, Long size) {
        Long offset = size * (page - 1);
        List<BookWithInventory> entities = inventoryEntityMapper.findAll(size, offset);
        Long total = inventoryEntityMapper.count();
        return new Page<>(entities, page, size, total);
    }

    @Override
    public void insert(InventoryEntity inventoryEntity) {
        inventoryEntityMapper.insert(inventoryEntity);
    }

    @Override
    public void update(InventoryEntity inventoryEntity) {
        InventoryEntity entity = inventoryEntityMapper.findByBookId(inventoryEntity.getBookId());
        if(entity == null)
            throw new IllegalArgumentException("No such book in inventory");

        entity.setQuantity(inventoryEntity.getQuantity());
        inventoryEntityMapper.update(entity);
    }

    @Override
    public BookStatus findByBookId(Long bookId) {
        BookStatus status = inventoryEntityMapper.findBookStatus(bookId);
        if(status.getTotal() == null) {
            status.setTotal(0L);
        }

        List<LoansToBook> loans = loanEntityMapper.findByBookId(bookId);
        Long overdue = (long) (int) loans.stream().filter(LoansToBook::isOverdue).count();
        Long borrowed = (long) (int) loans.stream().filter(LoansToBook::isNotReturned).count();

        status.setAvailable(status.getTotal() - borrowed - overdue);
        status.setBorrowed(borrowed);
        status.setOverdue(overdue);
        return status;
    }
}
