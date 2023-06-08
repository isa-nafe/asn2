package com.asn2.asn2.models;

public class Students {

    private String name;
    private float heigh;
    private float weight;
    private String hair_color;
    private float gpa;

    public Students() {
    }
    public Students(String name, float heigh, float weight, String hair_color, float gpa) {
        this.name = name;
        this.heigh = heigh;
        this.weight = weight;
        this.hair_color = hair_color;
        this.gpa = gpa;
    }

    public String getName() {
        return name;
    }
    public float getHeigh() {
        return heigh;
    }
    public float getWeight() {
        return weight;
    }
    public String getHair_color() {
        return hair_color;
    }
    public float getGpa() {
        return gpa;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setHeigh(float heigh) {
        this.heigh = heigh;
    }
    public void setWeight(float weight) {
        this.weight = weight;
    }
    public void setHair_color(String hair_color) {
        this.hair_color = hair_color;
    }
    public void setGpa(float gpa) {
        this.gpa = gpa;
    }
    
    
}
