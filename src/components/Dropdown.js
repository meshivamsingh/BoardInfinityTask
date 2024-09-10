import React from 'react';

const Dropdown = ({ onChangeStatus, onDelete }) => {
  return (
    <div className="dropdown bg-white rounded-lg shadow-lg p-2">
      <button
        className="block w-full text-left p-2 hover:bg-gray-200"
        onClick={() => onChangeStatus('inProgress')}
      >
        Move to In Progress
      </button>
      <button
        className="block w-full text-left p-2 hover:bg-gray-200"
        onClick={() => onChangeStatus('completed')}
      >
        Move to Completed
      </button>
      <button
        className="block w-full text-left p-2 hover:bg-gray-200"
        onClick={() => onChangeStatus('todo')}
      >
        Move to Todo
      </button>
      <button
        className="block w-full text-left p-2 hover:bg-red-200 text-red-600"
        onClick={onDelete}
      >
        Delete Task
      </button>
    </div>
  );
};

export default Dropdown;
