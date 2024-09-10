// src/components/Modal.js
import React from 'react';

const Modal = ({ onClose, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Create Task</h3>
        <form onSubmit={onSave}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="description"
              placeholder="Description"
              required
            ></textarea>
          </div>
          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Date <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="date"
              name="date"
              required
            />
          </div>
          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="status"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="todo">TODO</option>
              <option value="inProgress">IN PROGRESS</option>
              <option value="completed">COMPLETED</option>
            </select>
          </div>
          {/* Priority */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="priority"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex items-center justify-between">
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              type="submit"
            >
              Save
            </button>
            <button
              className="text-gray-500 px-4 py-2 hover:text-gray-700 transition"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
