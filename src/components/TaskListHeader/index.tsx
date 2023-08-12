import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

export function TaskListHeader() {
  const {tasks} = useContext(TaskContext);

  const tasksCompleted = tasks.reduce((acc, task) =>{
    if(task.isCompleted === true) {
      acc += 1;
    }
    return acc;
  },0);

  return (
    <header className='flex justify-between content-center'>
      <button className='text-blue text-sm font-bold'>Order</button>
      <div className='flex gap-2'>
        <span className='text-purple text-sm font-bold' >Completed</span>
        <div className='flex items-center justify-center bg-gray-400 px-2 rounded-full gap-1 text-gray-200 text-xs font-bold'>
          {tasks.length === 0 ? (
            <span>0</span>
          ): (
            <>
              <span>{tasksCompleted}</span>
              off
              <span>{tasks.length}</span>
            </>
          )}

        </div>
      </div>
    </header>
  );
}
