import React from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
  return (
    <div className="box">
      <h2>Add Task</h2>
      <div className="form-control">
        <input
          type="text"
          className="input"
          placeholder="Start writing your task here..."
          onKeyDown={addTask}
        />
      </div>
      <div className="tip">
        <h3>💡 Tips</h3>
        <ul>
          <li>To add the task just press enter after describing it.</li>
          <li>To mark task as complete click on the task.</li>
          <li>To delete the task just double click on the perticular task.</li>
        </ul>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func
};

export default AddTask;
