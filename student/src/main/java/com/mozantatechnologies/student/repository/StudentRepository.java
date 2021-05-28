package com.mozantatechnologies.student.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mozantatechnologies.student.model.StudentModel;

/**
 * @author ragcrix
 */

// No need implementation, just one interface, and you have CRUD, thanks Spring Data!
public interface StudentRepository extends MongoRepository<StudentModel, String> {
	
	List<StudentModel> findAll();

    StudentModel findByName(String name);
    
    @SuppressWarnings("unchecked")
	StudentModel save(StudentModel student);
    
    long count();

}
