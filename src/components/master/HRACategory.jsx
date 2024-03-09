import  { useState } from 'react';
import LevelDropDown from './LevelDropDown';
import MonthDropDown from './MonthDropDown';
import { InputNumber, Checkbox } from 'antd';
import CityCategory from './CityCategory';
import CCAType from './CCAType';
import Section3 from './Section3';

const HRACategory = () => {
  const [selectedLevel, setSelectedLevel] = useState(1); 
  const [selectedMonth, setSelectedMonth] = useState('January'); 
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
  const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);
  const [isCheckboxChecked3, setIsCheckboxChecked3] = useState(false);
  const [isCheckboxChecked4, setIsCheckboxChecked4] = useState(false);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
    
  };

  const handleCheckboxChange1 = (e) => {
    setIsCheckboxChecked1(e.target.checked);
    
  };

  const handleCheckboxChange2 = (e) => {
    setIsCheckboxChecked2(e.target.checked);
    
  };

  const handleCheckboxChange3 = (e) => {
    setIsCheckboxChecked3(e.target.checked);
    
  };

  const handleCheckboxChange4 = (e) => {
    setIsCheckboxChecked4(e.target.checked);
    
  };


  return (
    <div className="bg-yellow-200 border-t-2 border-red-800 ">
      <div className="flex">
        <div className="w-[60%]">
          <div className=" p-2 border-2 border-red-800">
          <div className='flex text-end my-10'>
            <h1 className='font-bold text-end text-lg'>
              <span className='text-red-600'>LEVEL</span> in{' '}
              <span className='text-blue-600'>Pay Matrix</span>
            </h1>
            <div className="ml-auto">
              <LevelDropDown selectedLevel={selectedLevel} onLevelChange={handleLevelChange} />
            </div>
          </div>
          <div className='flex text-end my-10'>
            <h1 className='font-bold text-end text-lg'>
              <span className='text-red-600'>BASIC Pay</span> for{' '}
              <span className='text-blue-600'>Mar-2023</span>
            </h1>
            <div className="ml-auto">
              <LevelDropDown selectedLevel={selectedLevel} onLevelChange={handleLevelChange} />
            </div>
          </div>
          <div className='flex text-end my-10'>
            <h1 className='font-bold text-end text-lg'>
              <span className='text-red-600'>Increment</span>
              <span className='text-blue-600'> Month</span>
            </h1>
            <div className='ml-auto'>
              <MonthDropDown selectedMonth={selectedMonth} onMonthChange={handleMonthChange} />
            </div>
          </div>
          <div className='flex text-end my-10'>
            <h1 className='font-bold text-end text-lg'>
              <span className='text-red-600'>Salary</span> after{' '}
              <span className='text-blue-600'>Increment</span>
            </h1>
            <div className='ml-auto'>
              <InputNumber placeholder="Enter salary after increment" className="border p-2 rounded" />
            </div>
          </div>
          <div className='flex text-end my-10'>
            <h1 className='font-bold text-end text-lg'>
              <span className='text-red-600'>Personal Pay</span> for{' '}
              <span className='text-blue-600'>Mar-2023</span>
            </h1>
            <div className='flex ml-auto'>
              <Checkbox
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                className="rounded-full"
              > <span className='font-bold text-lg text-blue-600'>0</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked1}
                onChange={handleCheckboxChange1}
                className="rounded-full"
              > <span className='font-bold text-lg text-blue-600'>1300</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked2}
                onChange={handleCheckboxChange2}
                className="rounded-full"
              > <span className='font-bold text-lg text-blue-600'>2000</span>
              </Checkbox>
            </div>
          </div>
        </div>
          <div className='flex border-2 mt-[1px] py-4 border-red-800'>
              <h1 className='text-lg mx-8 font-bold'>PF Scheme</h1>
              <div className='space-x-8'>
              <Checkbox
                checked={isCheckboxChecked3}
                onChange={handleCheckboxChange3}
                className="rounded-full"
              > <span className='font-bold text-lg text-blue-600'>1300</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked4}
                onChange={handleCheckboxChange4}
                className="rounded-full"
              > <span className='font-bold text-lg text-blue-600'>2000</span>
              </Checkbox>
              </div>
          </div>
        </div>
        <div className="w-40 my-12">
          <CityCategory/>
          <CCAType/>
          <Section3/>
        </div>
      </div>
    </div>
  );
};

export default HRACategory;