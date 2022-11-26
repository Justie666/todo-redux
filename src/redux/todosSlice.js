import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { id: 1, title: 'Learn React', completed: false },
      { id: 2, title: 'Learn Js', completed: true },
      { id: 3, title: 'Learn Ts', completed: false }
    ]
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().getTime(),
        title: action.payload.text,
        completed: false
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompletedTodo(state, action) {
      const current = state.todos.find((todo) => todo.id === action.payload.id);
      current.completed = !current.completed;
    }
  }
});

export const { addTodo, removeTodo, toggleCompletedTodo } = todosSlice.actions;
export default todosSlice.reducer;
