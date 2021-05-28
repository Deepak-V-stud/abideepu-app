package com.mozantatechnologies.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mozantatechnologies.student.model.StudentModel;
import com.mozantatechnologies.student.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public List<StudentModel> findAll() {
		return studentRepository.findAll();
	}

	@Override
	public StudentModel findByStudentName(String studentName) {
		return studentRepository.findByName(studentName);
	}

	@Override
	public StudentModel saveOrUpdateStudent(StudentModel student) {
		long index = studentRepository.count();
		String id = "R-" + String.format("%03d", index + 1);
		student.setId(id);
		return studentRepository.save(student);
	}
}