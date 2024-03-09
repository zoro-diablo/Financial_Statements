import { Link } from 'react-router-dom';
import ItcHeader from '../components/master/ItcHeader';
import DataEntering from '../components/master/DataEntering';
import HRACategory from '../components/master/HRACategory';
import HouseRent from '../components/master/HouseRent';

const Master = () => {
  return (
    <div className='flex items-center bg-gray-100 justify-center'>
      <div className=' p-8'>
        <div className='flex items-center justify-center space-x-32'>
          <h1 className='text-center'>
            Click here for :
            <Link
              to='/billform'
              className='flex items-center justify-center mb-8 underline hover:text-red-600 cursor-pointer'
            >
              Bill Drawn
            </Link>
          </h1>
          <h1 className='text-center'>
            Click here for :
            <Link
              to='/'
              className='flex items-center justify-center mb-8 underline hover:text-red-600 cursor-pointer'
            >
              IT Form
            </Link>
          </h1>
        </div>
        <div className=' border-2 border-blue-600 w-[940px]'>
          <ItcHeader />
          <DataEntering />
          <HRACategory />
          <HouseRent />
        </div>
      </div>
    </div>
  );
};

export default Master;
