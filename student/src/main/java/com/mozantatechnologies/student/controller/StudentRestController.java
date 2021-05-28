package com.mozantatechnologies.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mozantatechnologies.student.dto.StudentDTO;
import com.mozantatechnologies.student.model.StudentModel;
import com.mozantatechnologies.student.service.StudentService;
import com.mozantatechnologies.student.util.ObjectMapperUtils;

/**
 * @author ragcrix
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentRestController {

    @Autowired
    private StudentService studentService;

    @GetMapping(value = "/")
    public List<StudentDTO> getAllStudents() {
        return ObjectMapperUtils.mapAll(studentService.findAll(), StudentDTO.class);
    }

    @GetMapping(value = "/byStudentName/{studentName}")
    public StudentDTO getStudentByStudentNumber(@PathVariable("studentName") String studentName) {
        return ObjectMapperUtils.map(studentService.findByStudentName(studentName), StudentDTO.class);
    }
    
    @PostMapping(value = "/save")
    public List<StudentDTO> saveOrUpdateStudent(@RequestBody StudentDTO studentDTO) {
        studentService.saveOrUpdateStudent(ObjectMapperUtils.map(studentDTO, StudentModel.class));
        return ObjectMapperUtils.mapAll(studentService.findAll(), StudentDTO.class);
    }

}