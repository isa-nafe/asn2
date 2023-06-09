package com.asn2.asn2.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentsController {
    @GetMapping("/students/view")
    public String getAllStudents(Model model) {
        System.out.println("Getting all students");
        // TODO: get all students from the database
        List<Student> students = new ArrayList<>();
        students.add(new Student("isa", "180", "70", "brown", "3.2"));
        students.add(new Student("john", "135", "60", "blue", "4.1"));
        students.add(new Student("jack", "189", "78", "black", "4.0"));
        students.add(new Student("knan", "176", "77", "red", "2.8"));
        // end of database call
        model.addAttribute("st", students);
        return "students/showAll";
    }
}
