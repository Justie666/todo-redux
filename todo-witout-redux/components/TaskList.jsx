import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div className="taskList">
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TaskList;
