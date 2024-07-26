package com.example.ToDoList.Web;

import com.example.ToDoList.Model.Task;
import com.example.ToDoList.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public void uploadTask(@RequestBody Task todo) {
         taskService.saveTask(todo);
    }

    @GetMapping
    public String home() {
        return "hello";
    }

}
