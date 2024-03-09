import { useState } from 'react';
import { Checkbox } from 'antd';
import {
  updateInterestOfHousingLoan,
  updateMasterHouseRent,
  updateMasterProfessionalTax,
  updateMasterTuition,
  updateMasterTuitionFee,
  updateRepaymentOfHousingLoan,
} from '../../redux/features/finance';
import { useSelector, useDispatch } from 'react-redux';

const HouseRent = () => {
  const dispatch = useDispatch();
  const { master } = useSelector((state) => state.finance.form[0]);
  const [isCheckboxChecked5, setIsCheckboxChecked5] = useState(false);
  const [isCheckboxChecked6, setIsCheckboxChecked6] = useState(false);
  const [isCheckboxChecked7, setIsCheckboxChecked7] = useState(false);
  const [isCheckboxChecked8, setIsCheckboxChecked8] = useState(false);
  const [isCheckboxChecked9, setIsCheckboxChecked9] = useState(false);
  const [isCheckboxChecked10, setIsCheckboxChecked10] = useState(false);
  const [isCheckboxChecked11, setIsCheckboxChecked11] = useState(false);
  const [isCheckboxChecked12, setIsCheckboxChecked12] = useState(false);

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

  const handleCheckboxChange9 = (e) => {
    setIsCheckboxChecked9(e.target.checked);
  };

  const handleCheckboxChange10 = (e) => {
    setIsCheckboxChecked10(e.target.checked);
  };

  const handleCheckboxChange11 = (e) => {
    setIsCheckboxChecked11(e.target.checked);
  };

  const handleCheckboxChange12 = (e) => {
    setIsCheckboxChecked12(e.target.checked);
  };

  return (
    <div className='bg-yellow-200 border-t-2 border-red-800'>
      <div className='flex py-4 space-x-8 ml-14 items-center justify-center'>
        <h1 className='font-bold text-lg'>Monthly House Rent PAID</h1>
        <span className='font-bold text-lg text-blue-700'>₹</span>
        <input
          className='w-20 border-2 font-bold text-blue-700 border-red-600'
          type='number'
          value={master.monthlyHouseRentPaid}
          onChange={(e) => dispatch(updateMasterHouseRent(e.target.value))}
        />
        <button className='bg-[#EADFB4] text-blue-800 font-bold border-2  px-4 py-1 transition-transform active:scale-95 focus:outline-none'>
          Help on House Rent
        </button>
      </div>
      <div className='flex py-4 space-x-14 mr-44 items-center justify-center'>
        <h1 className='font-bold text-lg'>Professional Tax Paid</h1>
        <span className='font-bold text-lg text-blue-700'>₹</span>
        <input
          className='w-20 border-2 font-bold text-blue-700 border-red-600'
          type='number'
          value={master.professionalTax}
          onChange={(e) =>
            dispatch(updateMasterProfessionalTax(e.target.value))
          }
        />
      </div>
      <div className='flex py-4 space-x-10 ml-4 items-center justify-center'>
        <h1 className='font-bold text-lg'>
          Interest on Housing Loan
          <br />
          u/s 24(b)
        </h1>
        <span className='font-bold text-lg text-blue-700'>₹</span>
        <input
          className='w-20 border-2 font-bold text-blue-700 border-red-600'
          type='number'
          placeholder='0'
          value={master.interestOnHousingLoan}
          onChange={(e) =>
            dispatch(updateInterestOfHousingLoan(e.target.value))
          }
        />
        <p className='font-bold text-lg text-red-800'>Max. Rs. 2,00,000</p>
      </div>
      <div className='flex py-4 space-x-8 ml-8 items-center justify-center'>
        <h1 className='font-bold text-lg'>
          Repayment of Housing Loan
          <br />
          (Principle)
        </h1>
        <span className='font-bold text-lg text-blue-700'>₹</span>
        <input
          className='w-20 border-2 font-bold text-blue-700 border-red-600'
          type='number'
          placeholder='0'
          value={master.repaymentOfHousingLoan}
          onChange={(e) =>
            dispatch(updateRepaymentOfHousingLoan(e.target.value))
          }
        />
        <p className='font-bold text-lg text-red-800'>
          No Limits but bound
          <br /> to the limit u/s 80 C
        </p>
      </div>
      <div className='flex py-4 space-x-8 ml-8 items-center justify-center'>
        <h1 className='font-bold text-lg'>Tuition Fee</h1>
        <span className='font-bold text-lg text-blue-700'>₹</span>
        <input
          className='w-20 border-2 font-bold text-blue-700 border-red-600'
          type='number'
          placeholder='0'
          value={master.tuitionFee}
          onChange={(e) => dispatch(updateMasterTuitionFee(e.target.value))}
        />
        <input
          type='checkbox'
          value={master.tuition}
          onChange={(e) => dispatch(updateMasterTuition(e.target.checked))}
        />
        <p className='font-bold text-lg text-red-800'>Yes or No</p>
      </div>
      <div className='flex py-4 space-x-20 ml-14 items-center justify-center'>
        <h1 className='font-bold text-lg'>Permanent Disability (Self)</h1>
        <Checkbox
          checked={isCheckboxChecked5}
          onChange={handleCheckboxChange5}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>NO</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked6}
          onChange={handleCheckboxChange6}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>Yes</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked7}
          onChange={handleCheckboxChange7}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>80%</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked8}
          onChange={handleCheckboxChange8}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>80%</span>
        </Checkbox>
      </div>
      <div className='flex py-4 space-x-20 items-center justify-center'>
        <h1 className='font-bold text-lg'>Permanent Disability (Dependant)</h1>
        <Checkbox
          checked={isCheckboxChecked9}
          onChange={handleCheckboxChange9}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>NO</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked10}
          onChange={handleCheckboxChange10}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>Yes</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked11}
          onChange={handleCheckboxChange11}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>80%</span>
        </Checkbox>
        <Checkbox
          checked={isCheckboxChecked12}
          onChange={handleCheckboxChange12}
          className='rounded-full'
        >
          {' '}
          <span className='font-bold text-lg text-blue-600'>80%</span>
        </Checkbox>
      </div>
    </div>
  );
};

export default HouseRent;
