import { useSelector } from 'react-redux';
import TableData from './TableData';

const TableBill = () => {

  const { master } = useSelector((state) => state.finance.form[0]);



  return (
    <div>
      <table className='w-full border-collapse border-2 border-black'>
        <thead>
          <tr>
            <th
              colSpan='5'
              className='p-4 border-t-2 w-[63.6%] text-center font-bold border-l-2 border-r-2 border-black'
            >
              BILL DRAWN PARTICULARS for the Financial Year 2023 - 24
            </th>
            <th
              colSpan='9'
              className='p-4 border-t-2 w-[37.4%] text-sm text-center font-bold border-l-2 border-r-2 border-black'
            >
              Name : {master.name}
            </th>
          </tr>
          <tr>
            <th
              colSpan=''
              className='py-2 border-t-2 w-[21.2%] text-center font-bold border-l-2  border-r-2 border-black'
            >
              Designation: {master.designation}
            </th>
            <th
              colSpan=''
              className='py-2 border-t-2 w-[21.2%] text-sm text-center font-bold border-l-2 border-r-2 border-black'
            >
              PAN : {master.pan}
            </th>
            <th
              colSpan='5'
              className='py-2 border-t-2 w-[21.2%] text-sm text-center font-bold border-l-2 border-r-2 border-black'
            >
              Office TAN : {master.tan}
            </th>
            <th
              colSpan='9'
              className='py-2 border-t-2 w-[37.4%] text-sm text-center font-bold border-l-2 border-r-2 border-black'
            >
              Office : {master.schoolOfficeName}
            </th>
          </tr>
          <tr>
            <th
              colSpan='6'
              className='p-4 border-2 text-center font-bold border-black '
            >
              Name of the Company
            </th>
            <th
              colSpan='12'
              className='p-4 border-2 text-center font-bold border-black '
            >
              Name of Policy
            </th>
          </tr>
        </thead>
      </table>
      <tbody>
        <TableData />
      </tbody>
    </div>
  );
};

export default TableBill;
