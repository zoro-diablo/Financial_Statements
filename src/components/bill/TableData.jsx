import { useSelector, useDispatch } from 'react-redux';
import { updateBillDataCell } from '../../redux/features/finance';

const TableData = () => {
  const dispatch = useDispatch();
  const { billData } = useSelector((state) => state.finance.form[0]);

  const handleCellChange = (index, propName, value) => {
    const parsedValue = isNaN(value) ? value : parseFloat(value) || 0;
    dispatch(
      updateBillDataCell({
        formIndex: 0,
        itemIndex: index,
        propName,
        value: parsedValue,
      })
    );
  };

  return (
    <table className='w-[1449px] border-collapse border-2 border-black'>
      <thead>
        <tr>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>Month</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>
            Basic Pay
          </th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>PP</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>DA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>HRA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>CCA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>MA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>SPLA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>HA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>WA</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>
            Conve.
            <br />
            Allow.
          </th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>Bonus</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>Others</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>Gross</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>CPS</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>SPF</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>FBF</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>NHIS</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>LIC/PLI</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>IT+Cess</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>HBA/Ot</th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>
            Total
            <br />
            Dedn.
          </th>
          <th className='p-3 text-xs w-[6%] border-2 border-black'>
            NET Total
          </th>
        </tr>
      </thead>

      <tbody>
        {billData.map((data, index) => (
          <tr className='w-full' key={index}>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.month}
                onChange={(e) =>
                  handleCellChange(index, 'month', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.basicPay}
                onChange={(e) =>
                  handleCellChange(index, 'basicPay', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.pp}
                onChange={(e) => handleCellChange(index, 'pp', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.da}
                onChange={(e) => handleCellChange(index, 'da', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.hra}
                onChange={(e) => handleCellChange(index, 'hra', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.cca}
                onChange={(e) => handleCellChange(index, 'cca', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.ma}
                onChange={(e) => handleCellChange(index, 'ma', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.spla}
                onChange={(e) =>
                  handleCellChange(index, 'spla', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.ha}
                onChange={(e) => handleCellChange(index, 'ha', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.wa}
                onChange={(e) => handleCellChange(index, 'wa', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.convAllow}
                onChange={(e) =>
                  handleCellChange(index, 'convAllow', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.bonus}
                onChange={(e) =>
                  handleCellChange(index, 'bonus', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.others}
                onChange={(e) =>
                  handleCellChange(index, 'others', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.gross}
                onChange={(e) =>
                  handleCellChange(index, 'gross', e.target.value)
                }
                disabled
                className='w-full h-full text-xs font-bold text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.cps}
                onChange={(e) => handleCellChange(index, 'cps', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.spf}
                onChange={(e) => handleCellChange(index, 'spf', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.fbf}
                onChange={(e) => handleCellChange(index, 'fbf', e.target.value)}
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.nhis}
                onChange={(e) =>
                  handleCellChange(index, 'nhis', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.lic_pli}
                onChange={(e) =>
                  handleCellChange(index, 'lic_pli', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.it_cess}
                onChange={(e) =>
                  handleCellChange(index, 'it_cess', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.hba_others}
                onChange={(e) =>
                  handleCellChange(index, 'hba_others', e.target.value)
                }
                className='w-full h-full text-xs font-normal text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.totalDedn}
                onChange={(e) =>
                  handleCellChange(index, 'totalDedn', e.target.value)
                }
                disabled
                className='w-full h-full text-xs font-bold text-black outline-none border-none'
              />
            </td>
            <td className='p-2 text-xs w-[5.1%] border-2 border-black'>
              <input
                type='text'
                value={data.net}
                onChange={(e) => handleCellChange(index, 'net', e.target.value)}
                disabled
                className='w-full h-full text-xs font-bold text-black outline-none border-none'
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
