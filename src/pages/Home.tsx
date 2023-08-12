import { useContext } from 'react';
import { Header } from '../components/Header';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../components/Task';
import { TaskListHeader } from '../components/TaskListHeader';

export function Home() {
  const { tasks } = useContext(TaskContext);

  console.log(tasks);

  return (
    <div className="h-screen bg-gray-600 text-gray-100 font-body font-normal">
      <div className="w-[736px] mx-auto max-xl:">
        <Header />

        <main className='mt-16'>
          <TaskListHeader />

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
