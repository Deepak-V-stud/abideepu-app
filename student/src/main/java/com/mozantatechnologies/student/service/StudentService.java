package com.mozantatechnologies.student.service;

import java.util.List;

import com.mozantatechnologies.student.model.StudentModel;

/**
 * @author regcrix
 */
public interface StudentService {

    List<StudentModel> findAll();

    StudentModel findByStudentName(String studentName);
    
    StudentModel saveOrUpdateStudent(StudentModel student);

}