package com.taskmanagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @Enumerated(EnumType.STRING)
    private Status status = Status.PENDIENTE;

    @ManyToOne
    private User assignedUser;

    public enum Priority {
        ALTO, MEDIO, BAJO
    }

    public enum Status {
        PENDIENTE, EN_PROGRESO, COMPLETADA
    }

	public void setStatus(Status status2) {
		// TODO Auto-generated method stub
		
	}

	public void setDescription(String string) {
		// TODO Auto-generated method stub
		
	}

	public void setId(long l) {
		// TODO Auto-generated method stub
		
	}
	
}
