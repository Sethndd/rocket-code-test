package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.LoansToBook;
import org.example.database.entity.LoansToStudent;
import org.example.database.entity.Page;
import org.example.database.entity.StudentEntity;
import org.example.service.LoanService;
import org.example.service.StudentService;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService student;
    private final LoanService loan;

    @GetMapping("/{id}")
    public StudentEntity findById(
            @PathVariable Long id
    ) {
        return student.findById(id);
    }

    @GetMapping
    public Page<StudentEntity> findAll(
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return student.findAll(size, page);
    }

    @PostMapping
    public void insert(
            @RequestBody StudentEntity studentEntity
    ) {
        student.insert(studentEntity);
    }

    @PutMapping
    public void update(
            @RequestBody StudentEntity studentEntity
    ) {
        student.update(studentEntity);
    }

    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id
    ) {
        student.delete(id);
    }

    @GetMapping("/{id}/loans")
    public Page<LoansToStudent> findLoanedBooks(
            @PathVariable Long id,
            @RequestParam(defaultValue = "1") Long page,
            @RequestParam(defaultValue = "5") Long size
    ) {
        return loan.findByStudentId(id, size, page);
    }
}
