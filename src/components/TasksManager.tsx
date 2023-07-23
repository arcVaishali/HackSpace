import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/20/solid';

interface Task {
    id: string;
    completed: boolean;
    name: string;
    dueDate: string;
}

const TasksManager = () => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTaskChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setTask(e.target.value);
    };

    const handleAddTask: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (task.trim() !== '') {
            setTasks([
                ...tasks,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    completed: false,
                    name: task,
                    dueDate: taskDate,
                },
            ]);
            setTask('');
        }
    };

    const handleDeleteTask = (id: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleCheckboxChange = (id: string) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className='p-4'>
            <div className='mb-4'>
                <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-black'
                    placeholder='Enter a new task...'
                    value={task}
                    onChange={handleTaskChange}
                />
                <input
                    type='date'
                    className='w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-black'
                    placeholder='Enter deadline for task'
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                />
                <button
                    type='button'
                    className='ml-2 px-4 py-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>

            {tasks.length > 0 ? (
                <TasksView
                    tasks={tasks}
                    handleDeleteTask={handleDeleteTask}
                    handleCheckboxChange={handleCheckboxChange}
                />
            ) : (
                // <ul className='bg-white rounded shadow-lg'>
                //     {tasks.map((task, index) => (
                //         <li
                //             key={index}
                //             className='flex items-center justify-between p-4 border-b border-gray-300'
                //         >
                //             <span className='text-red-500/80'>{task}</span>
                //             <button
                //                 type='button'
                //                 className='text-red-500 hover:text-red-600 focus:outline-none focus:ring'
                //                 onClick={() => handleDeleteTask(index)}
                //             >
                //                 <TrashIcon className='w-5 h-5' />
                //             </button>
                //         </li>
                //     ))}
                // </ul>
                <p className='text-gray-600'>No tasks added yet.</p>
            )}
        </div>
    );
};

const TasksView = ({
    tasks,
    handleDeleteTask,
}: {
    tasks: Task[];
    handleDeleteTask: (id: string) => void;
    handleCheckboxChange: (id: string) => void;
}) => {
    return (
        <table className='w-full table-auto'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='px-4 py-2'>Completed</th>
                    <th className='px-4 py-2'>Task Name</th>
                    <th className='px-4 py-2'>Due Date</th>
                    <th className='px-4 py-2'>Delete Task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr
                        key={task.id}
                        className={task.completed ? 'bg-green-100' : ''}
                    >
                        <td className='px-4 py-2'>
                            <input
                                type='checkbox'
                                checked={task.completed}
                                onChange={() => handleCheckboxChange(task.id)}
                            />
                        </td>
                        <td className='px-4 py-2'>{task.name}</td>
                        <td className='px-4 py-2'>{task.dueDate}</td>
                        <td className='px-4 py-2'>
                            <button
                                type='button'
                                className='text-red-500 hover:text-red-600 focus:outline-none focus:ring'
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                <TrashIcon className='w-5 h-5' />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TasksManager;
