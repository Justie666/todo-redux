import './App.css';
import AddTask from './components/AddTask';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn Js', completed: true },
    { id: 3, title: 'Learn Ts', completed: false }
  ]);
  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      setTodos([
        ...todos,
        { id: new Date().getTime(), title: text, completed: false }
      ]);
      setText('');
    }
  };

  const toggleCompleted = (id) => {
    const copy = [...todos];
    const current = todos.find((todo) => todo.id === id);
    current.completed = !current.completed;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="wrapper">
      <h1 className="title">To Do App</h1>
      <AddTask text={text} setText={setText} addTodo={addTodo} />
      <div className="line" />
      <TaskList
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
