import React from 'react';
import plus from '../assets/img/Add_Plus.svg';

const AddTask = ({ text, setText, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="addTask">
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
