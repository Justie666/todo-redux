import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">To Do App</h1>
      <AddTask />
      <div className="line" />
      <TaskList />
    </div>
  );
}

export default App;
