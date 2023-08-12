import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

interface TaskProps {
  task: {
    id: number,
    isCompleted: boolean,
    title: string,
  }
}

export function Task({task}:TaskProps) {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className='flex items-start gap-3 p-4 bg-gray-500 rounded-lg border border-gray-400'>
      <input type="checkbox"  className='rounded-3xl' checked={task.isCompleted}/>
      <p className={`flex-1 text-sm leading-5 ${task.isCompleted && 'line-through text-gray-300'}`}>{task.title}</p>
      <button onClick={() => deleteTask(task.id)}>
        <Trash size={14} className='hover:text-danger' />
      </button>
    </div>

  );
}
