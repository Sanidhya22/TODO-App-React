import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.scss';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskArr = JSON.parse(localStorage.getItem('tasks'));
    if (taskArr instanceof Array) {
      setTasks(taskArr);
    }
  }, []);

  const addTask = (e) => {
    if (e.key === 'Enter') {
      const taskArr = [
        ...tasks,
        {
          value: e.target.value,
          isCompleted: false
        }
      ];
      setTasks(taskArr);
      localStorage.setItem('tasks', JSON.stringify(taskArr));
      e.target.value = '';
    }
  };

  const markAsComplete = (e) => {
    if (e.detail === 1) {
      const ele = e.target;
      const taskArr = [...tasks];
      const index = taskArr.findIndex((obj) => obj.value === e.target.innerText);
      if (ele.classList.contains('mark-complete')) {
        ele.classList.remove('mark-complete');
        taskArr[index].isCompleted = false;
      } else {
        ele.classList.add('mark-complete');
        taskArr[index].isCompleted = true;
      }
      setTasks(taskArr);
      localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
  };

  const deleteTask = (e) => {
    if (e.detail === 2) {
      const taskArr = [...tasks].filter((obj) => obj.value !== e.target.innerText);
      setTasks(taskArr);
      localStorage.setItem('tasks', JSON.stringify(taskArr));
    }
    toast.success('Task permanently removed');
  };

  return (
    <>
      <Header />
      <main className="main container">
        <Tasks tasks={tasks} markAsComplete={markAsComplete} deleteTask={deleteTask} />
        <AddTask addTask={addTask} />
      </main>
      <div>
        <Toaster containerStyle={{ top: 5 }} />
      </div>
    </>
  );
};

export default App;
