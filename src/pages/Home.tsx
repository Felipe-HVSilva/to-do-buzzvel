import { useContext } from 'react';
import { Header } from '../components/Header';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../components/Task';

export function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="h-screen bg-gray-600 text-gray-100 font-body font-normal">
      <div className="w-[736px] mx-auto max-xl:">
        <Header />

        <main className='mt-16'>
          <header className='flex justify-between content-center'>
            <button className='text-blue text-sm font-bold'>Order</button>
            <div className='flex gap-2'>
              <span className='text-purple text-sm font-bold' >Completed</span>
              <div className='flex items-center justify-center bg-gray-400 px-2 rounded-full gap-1 text-gray-200 text-xs font-bold'>
                <span>2</span>
            of
                <span>5</span>
              </div>
            </div>
          </header>

          {tasks.length >= 1 ? (
            <section className='mt-10 flex flex-col gap-3'>
              {tasks.map((task) => (<Task key={task.id} task={task} />)) }

            </section>
          ) : (
            <section className='text-center mt-10'>
              <h1 className='text-2xl text-gray-300 font-bold'>You don&apos;t have any tasks available</h1>
            </section>
          ) }
        </main>
      </div>
    </div>
  );
}
