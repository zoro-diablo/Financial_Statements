import  { useState } from 'react';
import { Checkbox } from 'antd';

const CityCategory = () => {
    const [isCheckboxChecked5, setIsCheckboxChecked5] = useState(false);
    const [isCheckboxChecked6, setIsCheckboxChecked6] = useState(false);
    const [isCheckboxChecked7, setIsCheckboxChecked7] = useState(false);
    const [isCheckboxChecked8, setIsCheckboxChecked8] = useState(false);

    const handleCheckboxChange5 = (e) => {
        setIsCheckboxChecked5(e.target.checked);
        
      };
    
      const handleCheckboxChange6 = (e) => {
        setIsCheckboxChecked6(e.target.checked);
        
      };
    
      const handleCheckboxChange7 = (e) => {
        setIsCheckboxChecked7(e.target.checked);
        
      };
    
      const handleCheckboxChange8 = (e) => {
        setIsCheckboxChecked8(e.target.checked);
        
      };

  return (
    <div className='bg-green-800 mx-4 mt-6 w-[300px] rounded-sm p-2'>
      <h1 className='text-center text-yellow-300 font-bold'>Select HRA City Category:</h1>
    <div className='flex w-full mt-2 space-x-4 items-center justify-center'>
            <Checkbox
                checked={isCheckboxChecked5}
                onChange={handleCheckboxChange5}
                className="rounded-full"
              > <span className='font-bold text-lg text-yellow-300'>I</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked6}
                onChange={handleCheckboxChange6}
                className="rounded-full"
              > <span className='font-bold text-lg text-yellow-300'>II</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked7}
                onChange={handleCheckboxChange7}
                className="rounded-full"
              > <span className='font-bold text-lg text-yellow-300'>II</span>
              </Checkbox>
              <Checkbox
                checked={isCheckboxChecked8}
                onChange={handleCheckboxChange8}
                className="rounded-full"
              > <span className='font-bold text-lg text-yellow-300'>IV</span>
              </Checkbox>
    </div>
    </div>
  )
}

export default CityCategory;