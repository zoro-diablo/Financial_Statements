/* eslint-disable react/prop-types */
import { useState } from 'react';

const LevelDropDown = ({ selectedLevel, onLevelChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLevelChange = (level) => {
    onLevelChange(level);
    toggleDropdown();
  };

  const levels = Array.from({ length: 32 }, (_, index) => index + 1);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="border p-2 rounded w-24 bg-white focus:outline-none"
      >
        {selectedLevel}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border rounded max-h-40 overflow-y-auto">
          <ul>
            {levels.map((level) => (
              <li
                key={level}
                onClick={() => handleLevelChange(level)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LevelDropDown;