// TaskBoard.tsx
import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from '../Column/Column';

const TaskBoard: React.FC = () => {
    const [tasks, setTasks] = useState<{
        [key: string]: { id: string; content: string }[];
    }>({
        'queue': [
            { id: 'task-1', content: 'Task 1' },
            { id: 'task-2', content: 'Task 2' },
        ],
        'development': [
            { id: 'task-3', content: 'Task 3' },
            { id: 'task-4', content: 'Task 4' },
        ],
        'done': [
            { id: 'task-5', content: 'Task 5' },
        ],
    });

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId === destination.droppableId) {
            // Задача перемещается внутри одной колонки
            const newTasks = [...tasks[source.droppableId]];
            const [movedTask] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, movedTask);

            setTasks({ ...tasks, [source.droppableId]: newTasks });
        } else {
            // Задача перемещается между колонками
            const sourceTasks = [...tasks[source.droppableId]];
            const destTasks = [...tasks[destination.droppableId]];
            const [movedTask] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, movedTask);

            setTasks({
                ...tasks,
                [source.droppableId]: sourceTasks,
                [destination.droppableId]: destTasks,
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: 'flex' }}>
                <Column column={{ id: 'queue', title: 'Queue' }} tasks={tasks['queue']} />
                <Column column={{ id: 'development', title: 'Development' }} tasks={tasks['development']} />
                <Column column={{ id: 'done', title: 'Done' }} tasks={tasks['done']} />
            </div>
        </DragDropContext>
    );
};

export default TaskBoard;
