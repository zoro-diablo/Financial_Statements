import { useDispatch, useSelector } from 'react-redux';
import { updateMutualFundDetails } from '../../redux/features/finance';

const MutualFunds = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.finance.form[0].itForm.particularsMutualFund
  );
  const { totalMutualFund } = useSelector(
    (state) => state.finance.form[0].itForm
  );

  const handleChange = (index, field, value) => {
    dispatch(updateMutualFundDetails({ index, field, value }));
  };
  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          5. Particulars of Investments made in Equity Linked Savings Scheme of
          Mutual Funds
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black'>Folio Number</th>
              <th className='p-4 border border-black'>Fund Name</th>
              <th className='p-4 border border-black'>Date of Investment</th>
              <th className='p-4 border border-black'>Lock in period</th>
              <th className='p-4 border border-black'>Other Particulars</th>
              <th
                className='p-4 border border-black'
                contentEditable='false'
                id='cell-1-2'
                onInput='updateCellValue(1, 2)'
              >
                Amount Paid
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((child, index) => (
              <tr key={index}>
                <td className='p-2 text-md border border-black'>
                  <input
                    type='text'
                    className='text-center w-[150px]'
                    value={child.folio}
                    onChange={(e) =>
                      handleChange(index, 'folio', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-md border border-black' id='cell-1-2'>
                  <input
                    type='text'
                    className='text-center  w-[150px]'
                    value={child.name}
                    onChange={(e) =>
                      handleChange(index, 'name', e.target.value)
                    }
                  />
                </td>

                <td className=' text-md border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.date}
                    onChange={(e) =>
                      handleChange(index, 'date', e.target.value)
                    }
                  />
                </td>
                <td className=' text-md border border-black'>
                  <input
                    type='text'
                    className='text-center w-full'
                    value={child.lock}
                    onChange={(e) =>
                      handleChange(index, 'lock', e.target.value)
                    }
                  />
                </td>
                <td className=' text-md border border-black'>
                  <input
                    type='text'
                    className='text-center w-full'
                    value={child.other}
                    onChange={(e) =>
                      handleChange(index, 'other', e.target.value)
                    }
                  />
                </td>
                <td className=' text-md border border-black'>
                  <input
                    type='number'
                    className='text-center w-full'
                    value={child.amount}
                    onChange={(e) =>
                      handleChange(index, 'amount', e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='p-2' colSpan='4'></td>
              <td className='p-2 text-lg border border-black font-bold'>
                TOTAL
              </td>
              <td className='p-2 text-lg border border-black flex'>
                ₹{' '}
                <div className='text-center w-full font-bold'>
                  {totalMutualFund}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MutualFunds;
