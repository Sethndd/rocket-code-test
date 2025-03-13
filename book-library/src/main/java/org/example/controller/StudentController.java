package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.LoanEntity;
import org.example.database.entity.StudentEntity;
import org.example.service.LoanService;
import org.example.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<StudentEntity> findAll() {
        return student.findAll();
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
    public List<LoanEntity> findLoanedBooks(
            @PathVariable Long id
    ) {
        return loan.findByStudentId(id);
    }
}
