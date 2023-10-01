import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTask, setNewTask] = useState({
    text: "",
    category: "All",
  });

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filteredTasks =
      category === "All"
        ? TASKS
        : tasks.filter((task) => task.category === category);
    setTasks(filteredTasks);
  };

  const handleTaskInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleTaskFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.text.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask({
        text: "",
        category: "Code",
      });
    }
  };

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
        newTask={newTask}
        onTaskInputChange={handleTaskInputChange}
      />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;