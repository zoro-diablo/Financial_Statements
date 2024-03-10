
import { useSelector,useDispatch } from 'react-redux';
import { updateBillDataCell } from '../../redux/features/finance';

const TableData = () => {

  const dispatch = useDispatch();
  const { billData } = useSelector((state) => state.finance.form[0]);

  const handleCellChange = (index, propName, value) => {
    dispatch(updateBillDataCell({ formIndex: 0, itemIndex: index, propName, value }));
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
          <th className='p-2 text-xs w-[6%] border-2 border-black'>
            HBA/Others
          </th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>
            Total
            <br />
            Dedn.
          </th>
          <th className='p-2 text-xs w-[6%] border-2 border-black'>NET</th>
        </tr>
      </thead>

      <tbody>
        {billData.map((data, index) => (
          <tr className='w-full' key={index}>
            <td
              className='p-2 text-xs w-[6%] border-2 font-bold border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'month', e.target.innerText)}
            >
              {data.month}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'basicPay', e.target.innerText)}
            >
              {data.basicPay}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'pp', e.target.innerText)}
            >
              {data.pp}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'da', e.target.innerText)}
            >
              {data.da}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'hra', e.target.innerText)}
            >
              {data.hra}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'cca', e.target.innerText)}
            >
              {data.cca}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'ma', e.target.innerText)}
            >
              {data.ma}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'spla', e.target.innerText)}
            >
              {data.spla}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'ha', e.target.innerText)}
            >
              {data.ha}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black '
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'wa', e.target.innerText)}
            >
              {data.wa}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'convAllow', e.target.innerText)}
            >
              {data.convAllow}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'bonus', e.target.innerText)}
            >
              {data.bonus}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black '
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'others', e.target.innerText)}
            >
              {data.others}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='false'
              onBlur={(e) => handleCellChange(index, 'gross', e.target.innerText)}
            >
              {data.gross}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'cps', e.target.innerText)}
            >
              {data.cps}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black '
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'spf', e.target.innerText)}
            >
              {data.spf}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black '
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'fbf', e.target.innerText)}
            >
              {data.fbf}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'nhis', e.target.innerText)}
            >
              {data.nhis}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'lic_pli', e.target.innerText)}
            >
              {data.lic_pli}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black '
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'it_cess', e.target.innerText)}
            >
              {data.it_cess}
            </td>
            <td
              className='p-2 text-xs w-[6%] border-2 border-black'
              contentEditable='true'
              onBlur={(e) => handleCellChange(index, 'hba_others', e.target.innerText)}
            >
              {data.hba_others}
            </td>
            <td
              className='p-2 text-xs w-[5.1%] border-2 border-black text-blue-500'
              contentEditable='false'
              onBlur={(e) => handleCellChange(index, 'totalDedn', e.target.innerText)}
            >
              {data.totalDedn}
            </td>
            <td
              className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
              contentEditable='false'
              onBlur={(e) => handleCellChange(index, 'net', e.target.innerText)}
            >
              {data.net}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
