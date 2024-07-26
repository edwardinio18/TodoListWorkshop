import React, {FormEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import Button from './components/generic/Button';
import FormField from "./components/generic/FormField";
import ClientApi from "./libs/api/ApiClient";
import {Task as TaskType} from "./types";
import Task from "./components/generic/Task";

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    // useEffect(() => {
    //     ClientApi.getTasks<TaskType[]>().then((data) => {
    //         setTasks(data);
    //     });
    // }, []);

    const onSubmitHandle = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!description || description.trim() === "") {
            setError("Task is required");
            return;
        }

        // await ClientApi.addTask({description})
    }, [description]);

    return (
        <div className="app min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <form name="todo" onSubmit={onSubmitHandle}
                  className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-8">
                <FormField
                    label="Task"
                    name="task"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mb-4"
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <Button
                    type="submit"
                    label="Add Task"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"/>
            </form>

            <div className="w-full max-w-md">
                {tasks.map((task) => (
                    <Task task={task} key={task.id} className="mb-4"/>
                ))}
            </div>
        </div>
    );
}

export default App;