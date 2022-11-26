import React, { useState } from 'react';
import plus from '../assets/img/Add_Plus.svg';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const AddTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <form onSubmit={addTask} className="addTask">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="addTask__input"
        placeholder={'Some words'}
      />
      <button className="addTask__button" type={'submit'}>
        <img src={plus} alt="plus" />
      </button>
    </form>
  );
};

export default AddTask;
