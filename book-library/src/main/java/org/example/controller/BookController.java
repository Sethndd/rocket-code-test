package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.LoansToStudent;
import org.example.database.entity.BookEntity;
import org.example.database.entity.Page;
import org.example.service.BookService;
import org.example.service.LoanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    private final LoanService loanService;

    @GetMapping("/{id}")
    public BookEntity findById(
            @PathVariable Long id
    ) {
        return bookService.findById(id);
    }

    @GetMapping
    public Page<BookEntity> findAll(
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return bookService.findAll(size, page);
    }

    @PostMapping
    public void insert(BookEntity bookEntity) {
        bookService.insert(bookEntity);
    }

    @PutMapping
    public void update(BookEntity bookEntity) {
        bookService.update(bookEntity);
    }

    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id
    ) {
        bookService.delete(id);
    }

    @GetMapping("/{id}/loans")
    public Page<LoansToStudent> findLoanedBooks(
            @PathVariable Long id,
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return loanService.findByBookId(id, size, page);
    }
}
