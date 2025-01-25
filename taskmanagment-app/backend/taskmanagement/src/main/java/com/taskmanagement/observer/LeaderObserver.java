package com.taskmanagement.observer;

public class LeaderObserver implements Observer {
    private final String name;

    public LeaderObserver(String name) {
        this.name = name;
    }

    @Override
    public void notify(String message) {
        System.out.println("Lider " + name + " notificación recibida " + message);
    }
    
}