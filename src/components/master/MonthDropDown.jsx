/* eslint-disable react/prop-types */
import { useState } from 'react';

const MonthDropDown = ({ selectedMonth, onMonthChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMonthChange = (month) => {
    onMonthChange(month);
    toggleDropdown();
  };

  const months = ['Apr/2023', 'Jul/2023', 'Oct/2023', 'Jan/2023'];

  return (
    <div className='relative inline-block'>
      <button
        onClick={toggleDropdown}
        className='border p-2 rounded w-24 bg-white focus:outline-none'
      >
        {selectedMonth}
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-2 bg-white border rounded max-h-40 overflow-y-auto'>
          <ul>
            {months.map((month) => (
              <li
                key={month}
                onClick={() => handleMonthChange(month)}
                className='cursor-pointer p-2 hover:bg-gray-200'
              >
                {month}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MonthDropDown;
