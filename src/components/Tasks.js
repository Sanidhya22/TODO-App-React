import React from 'react';
import PropTypes from 'prop-types';

import noTask from '../assets/images/no-task.png';

const Tasks = ({ tasks, markAsComplete, deleteTask }) => {
  return (
    <div className="box">
      <h2>Your tasks</h2>
      {tasks.length > 0 ? (
        <ul className="tasks">
          {tasks.map((obj, index) => (
            <li key={index} onClick={markAsComplete} onDoubleClick={deleteTask}>
              {obj.value}
            </li>
          ))}
        </ul>
      ) : (
        <div className="center-image h-100">
          <img src={noTask} alt="No task to display" width={'60%'} className="object-cover" />
          <span>It seems that you have not added any task yet.</span>
        </div>
      )}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  markAsComplete: PropTypes.func,
  deleteTask: PropTypes.func
};

export default Tasks;
