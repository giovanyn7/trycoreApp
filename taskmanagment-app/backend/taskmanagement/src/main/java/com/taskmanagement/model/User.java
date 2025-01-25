package com.taskmanagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //private String name;
    //private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        DESARROLLADOR, LIDER
        //  DEVELOPER, LEAD
    }
}