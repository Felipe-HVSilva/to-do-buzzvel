import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ArrowDown } from 'phosphor-react';

export function TaskListHeader() {
  const [orderTask, setOrderTask] = useState('desc');

  const {tasks, sortTaskAlphabeticOrder} = useContext(TaskContext);

  const tasksCompleted = tasks.reduce((acc, task) =>{
    if(task.isCompleted === true) {
      acc += 1;
    }
    return acc;
  },0);

  function handleOrderTask() {
    setOrderTask((prevState) => prevState === 'desc' ? 'asc' : 'desc');

    sortTaskAlphabeticOrder(orderTask);
  }

  console.log(tasks);
  return (
    <header className='flex justify-between items-center'>
      <button className='text-blue text-sm font-bold flex items-center gap-1' onClick={handleOrderTask}>
        Order
        <ArrowDown size={24} weight="fill"  className={`transition-transform transform ${orderTask === 'desc' ? '-rotate-180' : 'rotate-0'}`}/>
      </button>
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
