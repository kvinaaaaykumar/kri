import React from 'react';
import { MdAdd } from 'react-icons/md';

const Button = ({ onClick }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        className="flex items-center bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition-all"
        onClick={onClick}
      >
        <MdAdd className="mr-2 text-xl" />
        Create Entry
      </button>
    </div>
  );
};

export default Button;
