package org.example.database.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentEntity {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String enrollmentNumber;
    private Date enrollmentDate;
    private String phoneNumber;
    private Boolean active;
}
