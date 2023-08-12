import { ReactNode, createContext, useState } from 'react';

interface Task {
  id: number,
  isCompleted: boolean,
  title: string
}

interface TaskContext {
  tasks:Task[],
  createNewTask:(task: string) => void;
  deleteTask:(taskId: number) => void;
}

interface TaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContext);

export function TaskProvaider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createNewTask(task: string) {
    const newTask = {
      title: task,
      id: Math.random(),
      isCompleted: false
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function deleteTask(taskId: number) {
    const taskDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(taskDeleted);
  }

  return (
    <TaskContext.Provider value={{tasks, createNewTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  );
}
