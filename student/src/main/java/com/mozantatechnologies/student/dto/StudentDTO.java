/**
 * 
 */
package com.mozantatechnologies.student.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

/**
 * @author deepu
 *
 */
@Data
public class StudentDTO {
	private String id;
	private String name;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date dateOfBirth;
	private String studentClass;
	private String division;
	private String gender;

}