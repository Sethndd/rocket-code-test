package org.example.database.mapper;

import org.example.database.entity.StudentEntity;

import java.util.List;

public interface StudentEntityMapper {
    StudentEntity findById(Long id);
    StudentEntity findByEmail(String email);
    List<StudentEntity> findAll(Long size, Long offset);
    Long count();
    void insert(StudentEntity studentEntity);
    void update(StudentEntity studentEntity);
    void delete(Long id);
    List<StudentEntity> findAllByIdIn(List<Long> ids);
}
