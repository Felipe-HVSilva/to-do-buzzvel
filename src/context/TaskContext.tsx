import { ReactNode, createContext, useState } from 'react';

interface SubTasks {
  subTaskName:string,
}

interface Task {
  id: number,
  isCompleted: boolean,
  title: string,
  subtasks: SubTasks[]
}

interface TaskContext {
  tasks:Task[],
  createNewTask:(task: string) => void;
  deleteTask:(taskId: number) => void;
  changeStatusTask:(taskId: number) => void;
  addSubtask: (taskId:number, subTask:string) => void
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
      isCompleted: false,
      subtasks:[]
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function deleteTask(taskId: number) {
    const taskDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(taskDeleted);
  }

  function changeStatusTask(taskId: number) {
    const taskCompleted = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(taskCompleted);
  }

  function addSubtask(taskId: number, subTask: string) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, subtasks: [...task.subtasks, { subTaskName: subTask }] }
        : task
    );

    setTasks(updatedTasks);
  }

  return (
    <TaskContext.Provider value={{tasks, createNewTask, deleteTask, changeStatusTask, addSubtask}}>
      {children}
    </TaskContext.Provider>
  );
}
