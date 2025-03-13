package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.LoanAllData;
import org.example.database.entity.LoanEntity;
import org.example.database.entity.Page;
import org.example.service.LoanService;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/loans")
@RequiredArgsConstructor
public class LoanController {
    private final LoanService loanService;

    @GetMapping
    public Page<LoanAllData> findAll(
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return loanService.findAll(size, page);
    }

    @PostMapping
    public void insert(
            @RequestBody LoanEntity loanEntity
            ) {
        loanService.insert(loanEntity);
    }

    @PutMapping("/{id}")
    public void update(
            @PathVariable Long id
    ) {
        loanService.update(id);
    }
}
