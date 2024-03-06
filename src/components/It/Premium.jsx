import { useDispatch, useSelector } from 'react-redux';
import { updatePremiumDetails } from '../../redux/features/finance';

const Premium = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.finance.form[0].itForm.particularsPremium
  );
  const { totalPremium } = useSelector((state) => state.finance.form[0].itForm);

  const handleChange = (index, field, value) => {
    dispatch(updatePremiumDetails({ index, field, value }));
  };

  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          1. PARTICULARS OF L.I.C. / P.L.I. PREMIUM PAID
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black'>Policy No.</th>
              <th className='p-4 border border-black'>Name of the Company</th>
              <th className='p-4 border border-black'>Name of Policy</th>
              <th className='p-4 border border-black'>Amount Insured </th>
              <th className='p-4 border border-black'>Premium paid p.a. </th>
            </tr>
          </thead>
          <tbody>
            {data.map((child, index) => (
              <tr key={index}>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center w-full'
                    value={child.no}
                    onChange={(e) => handleChange(index, 'no', e.target.value)}
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.company}
                    onChange={(e) =>
                      handleChange(index, 'company', e.target.value)
                    }
                  />
                </td>
                <td className='p-2 text-lg border border-black'>
                  <input
                    type='text'
                    className='text-center'
                    value={child.policy}
                    onChange={(e) =>
                      handleChange(index, 'policy', e.target.value)
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
                <td className='p-1 text-lg border border-black'>
                  <div className='flex'>
                    ₹
                    <input
                      type='number'
                      className='text-center w-full'
                      value={child.paid}
                      onChange={(e) =>
                        handleChange(index, 'paid', e.target.value)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className='p-2' colSpan='3'></td>
              <td className='p-2 text-lg border border-black font-bold'>
                TOTAL
              </td>
              <td className='p-2 text-lg border border-black flex'>
                ₹{' '}
                <div className='text-center w-full font-bold'>
                  {totalPremium}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Premium;
