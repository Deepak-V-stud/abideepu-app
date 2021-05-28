/**
 * 
 */
package com.mozantatechnologies.student.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

/**
 * @author deepu
 *
 */
@Data
@Document(collection = "students")
public class StudentModel {
	@Id
	private String id;
	private String name;
	private Date dateOfBirth;
	private String studentClass;
	private String division;
	private String gender;

}