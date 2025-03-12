package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.database.entity.StudentEntity;
import org.example.database.mapper.StudentEntityMapper;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentEntityMapper studentEntityMapper;

    @Override
    public StudentEntity findById(Long id) {
        return studentEntityMapper.findById(id);
    }

    @Override
    public StudentEntity findByEmail(String email) {
        return studentEntityMapper.findByEmail(email);
    }

    @Override
    public List<StudentEntity> findAll() {
        return studentEntityMapper.findAll();
    }

    @Override
    public void insert(StudentEntity studentEntity) {
        studentEntityMapper.insert(studentEntity);
    }

    @Override
    public void update(StudentEntity studentEntity) {
        studentEntityMapper.update(studentEntity);
    }

    @Override
    public void delete(Long id) {
        studentEntityMapper.delete(id);
    }
}
