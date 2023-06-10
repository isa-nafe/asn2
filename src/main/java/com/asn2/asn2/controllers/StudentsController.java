package com.asn2.asn2.controllers;
import com.asn2.asn2.models.StudentRepository;
import com.asn2.asn2.models.Students;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class StudentsController {
    @GetMapping("/students/view")
    public String getAllStudents(Model model) {
        System.out.println("Getting all students");
        // TODO: get all students from the database
        List<Students> students = new ArrayList<>();
        students.add(new Students("isa", 180, 70, "brown", 3.2));
        students.add(new Students("john", 135, 60, "blue", 4.1));
        students.add(new Students("jack", 189, 78, "black", 4.0));
        students.add(new Students("knan", 176.8, 77.6, "red", 2.8));
        // end of database call
        model.addAttribute("st", students);
        return "students/showAll";
    }

    @GetMapping("/dtudents/view/{uid}")
    public String getStudent(Model model, @PathVariable String uid){
        System.out.println("Get Student:" + uid);

        int id = Integer.parseInt(uid);
        Students st = StudentRepository.findByName(uid).get();
        StudentRepository.delete(st);

        model.addAttribute("student");
        return "showStudent";
    }
}