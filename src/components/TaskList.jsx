import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  return (
    <div className="taskList">
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
