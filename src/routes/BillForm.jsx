import { Link } from 'react-router-dom';
import TableBill from '../components/bill/TableBill';

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
        <TableBill />
      </div>
    </div>
  );
};
export default BillForm;
