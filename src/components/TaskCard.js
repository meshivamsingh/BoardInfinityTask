const TaskCard = ({ task, status, onDropdownClick }) => {
    return (
      <div className="mb-4 relative">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded text-xs ${getPriorityStyle(task.priority)}`}>
            {task.priority}
          </span>
          <div className="relative">
            <i
              className="fas fa-ellipsis-v cursor-pointer dropdown-trigger"
              onClick={(event) => onDropdownClick(task, status, event)}
            ></i>
          </div>
        </div>
        <h4 className="text-lg font-bold">{task.title}</h4>
        <p className="text-gray-600">{task.description}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <i className="far fa-calendar-alt mr-2"></i>
          <span>{task.date}</span>
        </div>
      </div>
    );
  };
  
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-200 text-red-600';
      case 'Medium':
        return 'bg-pink-200 text-pink-600';
      case 'Low':
        return 'bg-green-200 text-green-600';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };
  
  export default TaskCard;