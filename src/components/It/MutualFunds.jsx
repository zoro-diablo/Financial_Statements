const MutualFunds = () => {
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
            <tr>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                39588097
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              >
                QUANT ELSS TAX SAVER
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              >
                3 YRS
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              >
                ₹ 20,999
              </td>
            </tr>

            <tr>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              >
                ₹{' '}
              </td>
            </tr>

            <tr>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-2'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
                id='cell-1-3'
              >
                ₹{' '}
              </td>
            </tr>

            <tr>
              <td className='p-2' contentEditable='false'></td>
              <td className='p-2' contentEditable='false' id='cell-1-2'></td>
              <td className='p-2' contentEditable='false' id='cell-1-2'></td>
              <td className='p-2' contentEditable='false' id='cell-1-2'></td>
              <td
                className='p-2 text-lg border border-black font-bold'
                contentEditable='false'
                id='cell-1-3'
              >
                TOTAL
              </td>
              <td
                className='p-2 text-lg border border-black font-bold'
                contentEditable='true'
              >
                ₹ 20,999
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MutualFunds;
