import { useDispatch, useSelector } from 'react-redux';
import { updateAccuredDetails } from '../../redux/features/finance';

const Accured = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.finance.form[0].itForm.particularsAccured
  );
  const { totalAccured } = useSelector((state) => state.finance.form[0].itForm);

  const handleChange = (index, field, value) => {
    dispatch(updateAccuredDetails({ index, field, value }));
  };

  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          4. PARTICULARS OF INTEREST ACCURED ON N.S.C.
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black'>
                N. S. C. Number and Name of Post Office
              </th>
              <th className='p-4 border border-black'>Date of Purchase</th>
              <th className='p-4 border border-black'>Rate of Interest (%)</th>
              <th className='p-4 border border-black'>Amount </th>
            </tr>
          </thead>
          <tbody>
            {data.map((child, index) => (
              <tr key={index}>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center w-full'
                    value={child.post}
                    onChange={(e) =>
                      handleChange(index, 'post', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.date}
                    onChange={(e) =>
                      handleChange(index, 'date', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='number'
                    className='text-center'
                    value={child.rate}
                    onChange={(e) =>
                      handleChange(index, 'rate', e.target.value)
                    }
                  />
                </td>
                <td className='p-1 text-lg border border-black'>
                  <div className='flex'>
                    ₹
                    <input
                      type='number'
                      className='text-center w-full'
                      value={child.amount}
                      onChange={(e) =>
                        handleChange(index, 'amount', e.target.value)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='p-2' colSpan='2'></td>
              <td className='p-2 text-lg border border-black font-bold'>
                TOTAL
              </td>
              <td className='p-2 text-lg border border-black flex'>
                ₹{' '}
                <div className='text-center w-full font-bold'>
                  {totalAccured}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Accured;
