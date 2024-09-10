import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState({
    todo: [
      {
        title: "Brainstorming",
        description:
          "Brainstorming brings team members' diverse experience into play.",
        date: "18/09/2024",
        priority: "High",
      },
      {
        title: "Wireframes",
        description:
          "Low fidelity wireframes include the most basic content and visuals.",
        date: "18/09/2024",
        priority: "High",
      },
    ],
    inProgress: [
      {
        title: "Onboarding Illustrations",
        description: "",
        date: "18/10/2024",
        priority: "Low",
      },
    ],
    completed: [
      {
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before",
        date: "12/10/2024",
        priority: "Medium",
      },
    ],
  });

  const [dropdownTask, setDropdownTask] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });


  const handleCreateTaskClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTask = {
      title: form.title.value,
      description: form.description.value,
      date: form.date.value,
      priority: form.priority.value,
    };
    const status = form.status.value;

    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], newTask],
    }));

    setShowModal(false);
  };

  const handleDropdownClick = (task, status, event) => {
    setDropdownTask({ task, status });
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({ x: rect.left, y: rect.bottom + 5 });
  };

  const handleChangeStatus = (newStatus) => {
    if (dropdownTask) {
      const updatedTasks = { ...tasks };
      const taskIndex = updatedTasks[dropdownTask.status].indexOf(
        dropdownTask.task
      );
      if (taskIndex > -1) {
        updatedTasks[dropdownTask.status].splice(taskIndex, 1);
        updatedTasks[newStatus].push(dropdownTask.task);
        setTasks(updatedTasks);
      }
      setDropdownTask(null);
    }
  };

  const handleDeleteTask = () => {
    if (dropdownTask) {
      const updatedTasks = { ...tasks };
      const taskIndex = updatedTasks[dropdownTask.status].indexOf(
        dropdownTask.task
      );
      if (taskIndex > -1) {
        updatedTasks[dropdownTask.status].splice(taskIndex, 1);
        setTasks(updatedTasks);
      }
      setDropdownTask(null);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownTask && !event.target.closest(".dropdown")) {
      setDropdownTask(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownTask]);

  return (
    <div className="p-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img
            src="./logo.png"
            alt="Board Infinity Logo"
            className="mr-2 h-10 w-15"
          />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Top Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Desktop & Mobile Application</h2>
          <button
            onClick={handleCreateTaskClick}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Create Task
          </button>
        </div>

        {/* Task Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* TODO Column */}
          <div className="fade-in">
            <div className="bg-purple-600 text-white p-4 rounded-t-lg shadow-md">
              <h3 className="text-lg font-bold">TODO</h3>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md">
              {tasks.todo.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  status="todo"
                  onDropdownClick={handleDropdownClick}
                />
              ))}
            </div>
          </div>

          {/* IN PROGRESS Column */}
          <div className="fade-in">
            <div className="bg-yellow-500 text-white p-4 rounded-t-lg shadow-md">
              <h3 className="text-lg font-bold">IN PROGRESS</h3>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md">
              {tasks.inProgress.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  status="inProgress"
                  onDropdownClick={handleDropdownClick}
                />
              ))}
            </div>
          </div>

          {/* COMPLETED Column */}
          <div className="fade-in">
            <div className="bg-green-600 text-white p-4 rounded-t-lg shadow-md">
              <h3 className="text-lg font-bold">COMPLETED</h3>
            </div>
            <div className="bg-white p-4 rounded-b-lg shadow-md">
              {tasks.completed.map((task, index) => (
                <TaskCard
                  key={index}
                  task={task}
                  status="completed"
                  onDropdownClick={handleDropdownClick}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Creating Task */}
      {showModal && (
        <Modal onClose={handleCloseModal} onSave={handleSaveTask} />
      )}

      {/* Dropdown Menu */}
      {dropdownTask && (
        <div
          style={{
            position: "absolute",
            top: dropdownPosition.y,
            left: dropdownPosition.x,
            zIndex: 30,
          }}
        >
          <Dropdown
            onChangeStatus={handleChangeStatus}
            onDelete={handleDeleteTask}
          />
        </div>
      )}
    </div>
  );
};

export default App;
