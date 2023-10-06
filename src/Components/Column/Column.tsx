import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

interface ColumnProps {
    column: {
        id: string;
        title: string;
    };
    tasks: {
        id: string;
        content: string;
    }[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
    return (
        <div>
            <h3>{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
