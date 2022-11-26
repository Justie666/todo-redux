import React from 'react';
import doneSvg from '../assets/img/doneSvg.svg';
import crossSvg from '../assets/img/crossSvg.svg';

const TaskItem = ({ id, title, completed, toggleCompleted, removeTodo }) => {
  return (
    <div className={'taskItem'}>
      <button className={'buttonItem'} onClick={() => toggleCompleted(id)}>
        {completed && <img src={doneSvg} alt="done" className={'iconItem'} />}
      </button>
      <div className={'titleItem'}>{title}</div>
      <button className={'buttonItem'} onClick={() => removeTodo(id)}>
        <img src={crossSvg} alt="cross" className={'iconItem'} />
      </button>
    </div>
  );
};

export default TaskItem;
