import React from 'react';
import doneSvg from '../assets/img/doneSvg.svg';
import crossSvg from '../assets/img/crossSvg.svg';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompletedTodo } from '../redux/todosSlice';

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <div className={'taskItem'}>
      <button
        className={'buttonItem'}
        onClick={() => dispatch(toggleCompletedTodo({ id }))}
      >
        {completed && <img src={doneSvg} alt="done" className={'iconItem'} />}
      </button>
      <div className={'titleItem'}>{title}</div>
      <button
        className={'buttonItem'}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        <img src={crossSvg} alt="cross" className={'iconItem'} />
      </button>
    </div>
  );
};

export default TaskItem;
