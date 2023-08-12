import { Plus, Trash } from 'phosphor-react';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

interface SubTask {
  subTaskName: string;
}

interface TaskProps {
  task: {
    id: number,
    isCompleted: boolean,
    title: string,
    subtasks: SubTask[];
  }

}



export function Task({task}:TaskProps) {
  const [newSubTask, setNewSubTask] = useState('');

  const { deleteTask, changeStatusTask, addSubtask } = useContext(TaskContext);

  function handleAddNewSubtask() {
    addSubtask(task.id, newSubTask);
    setNewSubTask('');
  }

  return (
    <div className='flex items-start gap-3 p-4 bg-gray-500 rounded-lg border border-gray-400'>
      <input type="checkbox"  className='rounded-3xl' onClick={() => changeStatusTask(task.id)}/>
      <div className='flex-1'>
        <p className={`text-gray-100 text-sm font-bold ${task.isCompleted && 'line-through text-gray-300'}`}>
          {task.title}
        </p>
        <ul className='ml-2 mt-2 flex flex-col gap-1'>
          <li className='flex items-center gap-2'>
            <input className="bg-inherit border outline-none rounded-md border-gray-400 pl-2"
              placeholder="add subtasks"
              value={newSubTask}
              onChange={(e) => setNewSubTask(e.target.value)}
            />
            <button
              className='p-1 bg-blue-dark transition-colors duration-75 rounded-md text-white hover:bg-blue'
              onClick={handleAddNewSubtask}
            >
              <Plus />
            </button>
          </li>
          {task.subtasks.map((subTask) => (
            <li key={subTask.subTaskName} className={`${task.isCompleted && 'line-through text-gray-300'}`}>- {subTask.subTaskName}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => deleteTask(task.id)}>
        <Trash size={14} className='hover:text-danger' />
      </button>
    </div>

  );
}
