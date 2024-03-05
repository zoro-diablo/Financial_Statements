import { Link } from 'react-router-dom';
import TableBill from '../components/bill/TableBill';
import TotalBill from '../components/bill/TotalBill';

const BillForm = () => {
  return (
    <div className='bg-gray-100 py-8 pr-1'>
      <h1 className='text-center'>
        Click here for :
        <Link
          to='/'
          className='flex items-center justify-center mb-8 underline hover:text-red-600 cursor-pointer'
        >
          IT Form
        </Link>
      </h1>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='w-[1500px] mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
              <TableBill />
              <TotalBill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillForm;
