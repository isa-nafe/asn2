package com.asn2.asn2.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentsController {
    @GetMapping("/students/view")
    public String getAllStudents(){
        System.out.println("Getting all students");
        // TODO: get all users from database
        List<Students> students = new ArrayList<>();
        students.add(new Students(name:"isa", height:"180", weight:"70", hairColor:"brown", GPA:"3.2"));
        students.add(new Students(name:"john", height:"135", weight:"60", hairColor:"blue", GPA:"4.1"));
        students.add(new Students(name:"jack", height:"189", weight:"78", hairColor:"black", GPA:"4.0"));
        students.add(new Students(name:"knan", height:"176", weight:"77", hairColor:"red", GPA:"2.8"));
        return "students/showAll";
    }
}
