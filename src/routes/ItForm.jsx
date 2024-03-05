import Accured from '../components/It/Accured';
import Certificate from '../components/It/Certificate';
import GrossSalary from '../components/It/GrossSalary';
import ItHead from '../components/It/ItHead';
import MutualFunds from '../components/It/MutualFunds';
import NationalSaving from '../components/It/NationalSaving';
import Premium from '../components/It/Premium';
import PremiumUnit from '../components/It/PremiumUnit';
import TutionFee from '../components/It/TutionFee';
import { Link } from 'react-router-dom';

const ItForm = () => {
  return (
    <div>
      <div className='bg-gray-100 p-8'>
        <h1 className='text-center'>
          Click here for :
          <Link
           to='/billform'
            className='flex items-center justify-center mb-8 underline hover:text-red-600 cursor-pointer'
          >
            Bill Drawn
          </Link>
        </h1>

        <div className='max-w-4xl mx-auto bg-white p-1 border-2 border-black rounded shadow'>
          <ItHead />
          <GrossSalary />
        </div>
        <Certificate />
        <Premium />
        <PremiumUnit />
        <NationalSaving />
        <Accured />
        <MutualFunds />
        <TutionFee />
      </div>
    </div>
  );
};
export default ItForm;
