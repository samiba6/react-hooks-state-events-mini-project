import React from "react";

function NewTaskForm({
  categories,
  onTaskFormSubmit,
  newTask,
  onTaskInputChange,
}) {
  return (
    <form className='new-task-form' onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type='text'
          name='text'
          value={newTask.text}
          onChange={onTaskInputChange}
        />
      </label>
      <label>
        Category
        <select
          name='category'
          value={newTask.category}
          onChange={onTaskInputChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  );
}

export default NewTaskForm;