package org.example.service;

import org.example.database.entity.StudentEntity;

import java.util.List;

public interface StudentService {
    StudentEntity findById(Long id);
    StudentEntity findByEmail(String email);
    List<StudentEntity> findAll();
    void insert(StudentEntity studentEntity);
    void update(StudentEntity studentEntity);
    void delete(Long id);
}
