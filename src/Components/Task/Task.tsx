import React from 'react';

interface  TaskProps {
    task: {
        id: string;
        content: string;
    };
}
const Task: React.FC<TaskProps> = ({ task }) => {
    return <div>{task.content}</div>;
};

export default Task;