import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
// import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid';

const ToDoPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Complete React assignment', important: false, completed: false },
    { id: 2, task: 'Prepare for meeting', important: false, completed: false },
    { id: 3, task: 'Update resume', important: true, completed: false },
    { id: 4, task: 'Study for interview', important: false, completed: false },
    { id: 5, task: 'Finish project documentation', important: true, completed: false },
    { id: 6, task: 'Plan weekend outing', important: false, completed: false },
  ]);

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 bg-gray-100">
          <h2 className="text-3xl font-semibold mb-6">To-Do List</h2>

          <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
              >
                {/* Left side - Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompleted(task.id)}
                    className="h-5 w-5 mr-4"
                  />
                  <p className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.task}
                  </p>
                </div>

                {/* Right side - Star and Close icons */}
                <div className="flex items-center space-x-3">
                  <StarIcon
                    className={`h-6 w-6 cursor-pointer ${task.important ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => toggleImportant(task.id)}
                  />
                  <XMarkIcon
                    className="h-6 w-6 text-red-500 cursor-pointer"
                    onClick={() => deleteTask(task.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
