package org.example.service;

import org.example.database.entity.Page;
import org.example.database.entity.StudentEntity;


public interface StudentService {
    StudentEntity findById(Long id);
    StudentEntity findByEmail(String email);
    Page<StudentEntity> findAll(Long size, Long page);
    void insert(StudentEntity studentEntity);
    void update(StudentEntity studentEntity);
    void delete(Long id);
}
