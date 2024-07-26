package com.example.ToDoList.Repository;

import com.example.ToDoList.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
