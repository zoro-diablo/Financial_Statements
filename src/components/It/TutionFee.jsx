import { useDispatch, useSelector } from 'react-redux';
import { updateTuitionFeeDetails } from '../../redux/features/finance';

const TutionFee = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.finance.form[0].itForm.particularsTutionFee
  );
  const { totalTuition } = useSelector((state) => state.finance.form[0].itForm);

  const handleChange = (index, field, value) => {
    dispatch(updateTuitionFeeDetails({ index, field, value }));
  };

  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          6. Particulars of Tuition Fees Paid in FY 2023-24 (Maximum TWO
          Children)
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black'>Name of the Child</th>
              <th className='p-4 border border-black'>Class / Course</th>
              <th className='p-4 border border-black'>
                Name of the School / College
              </th>
              <th className='p-4 border border-black'>Tuition Fees Paid</th>
            </tr>
          </thead>
          <tbody>
            {data.map((child, index) => (
              <tr key={index}>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.name}
                    onChange={(e) =>
                      handleChange(index, 'name', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.class}
                    onChange={(e) =>
                      handleChange(index, 'class', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.school}
                    onChange={(e) =>
                      handleChange(index, 'school', e.target.value)
                    }
                  />
                </td>
                <td className='p-1 text-lg border border-black'>
                  <div className='flex'>
                    ₹
                    <input
                      type='text'
                      className='text-center w-full'
                      value={child.fee}
                      onChange={(e) =>
                        handleChange(index, 'fee', e.target.value)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='p-2' colSpan='2' ></td>
              <td className='p-2 text-lg border border-black font-bold'>
                TOTAL
              </td>
              <td className='p-2 text-lg border border-black flex'>
                ₹{' '}
                <div className='text-center w-full font-bold'>
                  {totalTuition}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TutionFee;
