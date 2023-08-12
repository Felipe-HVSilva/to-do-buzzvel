import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

export function Header() {
  const [taskName,setTaskName] = useState('');

  const { createNewTask } = useContext(TaskContext);

  function handleAddNewTask() {
    if (!taskName) {
      return;
    }
    createNewTask(taskName);
  }

  return (
    <header className="flex justify-between gap-2 pt-11">
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
    </header>
  );
}
