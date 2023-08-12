import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { TaskContext } from '../../context/TaskContext';

import 'react-toastify/dist/ReactToastify.css';

export function Header() {
  const [taskName,setTaskName] = useState('');

  const { createNewTask } = useContext(TaskContext);

  function handleAddNewTask() {
    if (!taskName) {
      toast.error('Please, Put a task', {theme: 'dark'});
      return;
    }
    createNewTask(taskName);
    setTaskName('');
  }

  return (
    <header className="flex justify-between gap-2 pt-11 px-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 h-14 rounded-lg p-4 bg-gray-500 border border-gray-700 text-gray-300 outline-none focus:border-purple-dark"
        placeholder="Add New Task"
      />
      <button className="h-14 border-none outline-none bg-blue-dark p-4
        rounded-lg text-sm font-bold transition-all duration-75
        hover:bg-blue"
      onClick={handleAddNewTask}
      >
      Criar
      </button>
      <ToastContainer />
    </header>
  );
}
