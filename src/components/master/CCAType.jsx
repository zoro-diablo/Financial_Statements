import  { useState } from 'react';
import { Checkbox } from 'antd';

const CCAType = () => {
    const [isCheckboxChecked9, setIsCheckboxChecked9] = useState(false);
    const [isCheckboxChecked10, setIsCheckboxChecked10] = useState(false);
    const [isCheckboxChecked11, setIsCheckboxChecked11] = useState(false);

    const handleCheckboxChange9 = (e) => {
        setIsCheckboxChecked9(e.target.checked);
        
      };
    
      const handleCheckboxChange10 = (e) => {
        setIsCheckboxChecked10(e.target.checked);
        
      };
    
      const handleCheckboxChange11 = (e) => {
        setIsCheckboxChecked11(e.target.checked);
        
      };
    
  return (
    <div className='bg-orange-600 mx-4 my-1 w-[300px] rounded-sm p-2'>
      <h1 className='text-center text-slate-100 font-bold'>CCA Type:</h1>
    <div className='flex w-full mt-2 space-x-4 items-center justify-center'>
            <Checkbox
                checked={isCheckboxChecked9}
                onChange={handleCheckboxChange9}
                className="rounded-full"
              > <span className='font-bold text-lg text-slate-100'>I</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked10}
                onChange={handleCheckboxChange10}
                className="rounded-full"
              > <span className='font-bold text-lg text-slate-100'>II</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked11}
                onChange={handleCheckboxChange11}
                className="rounded-full"
              > <span className='font-bold text-lg text-slate-100'>NONE</span>
              </Checkbox>
              
    </div>
    </div>
  )
}

export default CCAType