import QRcode from '/qrcode.png';
import ITlogo from '/ITlogo.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateMasterDOB,
  updateMasterDesignation,
  updateMasterName,
  updateMasterPAN,
  updateMasterTAN,
  updateSchoolOfficeName,
} from '../../redux/features/finance';

const DataEntering = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.finance.form[0].master);

  return (
    <div className='bg-yellow-200 border-b-2 border-red-800 mb-[1px] p-4'>
      <h1 className='text-3xl text-purple-800 font-bold text-center mb-10'>
        Enter the following data:
      </h1>
      <div className='flex space-x-[160px]'>
        <div className='grid grid-cols-2 gap-8 mx-6'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='text-lg font-bold mt-1 mb-2'>
              Name:
            </label>
            <label
              htmlFor='designation'
              className='text-lg font-bold mt-3 mb-2'
            >
              Designation:
            </label>
            <label htmlFor='pan' className='text-lg font-bold mt-3 mb-2'>
              PAN:
            </label>
            <label
              htmlFor='schoolOfficeName'
              className='text-lg font-bold mt-3 mb-2'
            >
              School / Office Name:
            </label>
            <label htmlFor='tan' className='text-lg font-bold mt-[9px] mb-2'>
              School / Office TAN:
            </label>
            <label htmlFor='dob' className='text-lg font-bold mt-3 mb-[9px]'>
              Date of Birth:
            </label>
            <label htmlFor='age' className='text-lg font-bold mt-3 mb-[9px]'>
              Age Below 60 :
            </label>
          </div>
          <div className='flex flex-col mb-4'>
            <input
              type='text'
              id='name'
              value={data.name}
              onChange={(e) => dispatch(updateMasterName(e.target.value))}
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2  mb-2'
            />
            <input
              type='text'
              id='designation'
              value={data.designation}
              onChange={(e) =>
                dispatch(updateMasterDesignation(e.target.value))
              }
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2  mb-2'
            />
            <input
              type='text'
              id='pan'
              value={data.pan}
              onChange={(e) => dispatch(updateMasterPAN(e.target.value))}
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2  mb-2'
            />
            <input
              type='text'
              id='schoolOfficeName'
              value={data.schoolOfficeName}
              onChange={(e) => dispatch(updateSchoolOfficeName(e.target.value))}
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2  mb-2'
            />
            <input
              type='text'
              id='tan'
              value={data.tan}
              onChange={(e) => dispatch(updateMasterTAN(e.target.value))}
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2  mb-2'
            />
            <input
              type='date'
              id='dob'
              value={data.dob}
              onChange={(e) => dispatch(updateMasterDOB(e.target.value))}
              className='border-2 bg-blue-200 text-blue-800 font-bold border-red-600 p-2 mb-2'
            />
            <input
              type='text'
              id='age'
              value={data.age}
              disabled
              className='border-2 bg-gray-200 text-gray-800 font-bold border-red-600 p-2 mb-2'
            />
          </div>
        </div>
        {/* <div>
          <div className=' border-2 p-2 px-4 bg-white border-black'>
            <div className='flex items-center mt-1 justify-center'>
              <img
                src={ITlogo}
                alt='Image Description'
                className='w-10 h-10 text-center'
              />
            </div>
            <h1 className='text-center my-1 text-lg font-bold'>
              Income Tax TN
            </h1>
            <p className='text-center my-1 text-gray-600 text-lg font-medium'>
              WhatsApp group
            </p>
            <img src={QRcode} alt='Image Description' className='w-40 h-40' />
          </div>
          <div className='border-t-4 border-green-800 mt-[1px]'>
            <p className='text-md text-center text-blue-700 font-bold'>
              To clarify doubts, if any,
              <br />
              Scan QR - Join WA Group
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DataEntering;
