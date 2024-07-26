import {FC} from 'react';

import {Task as TaskType} from '../../../types';

interface TaskProps {
    task: TaskType;
    className?: string;
}

const Task: FC<TaskProps> = ({task, className}) => (
    <div className={`task p-4 bg-white rounded-lg shadow-md ${className}`}>
        <p className="text-lg font-semibold text-gray-800">{task.id}</p>
        <p className="text-gray-800">{task.description}</p>
    </div>
);

export default Task;