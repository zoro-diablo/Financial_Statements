const NationalSaving = () => {
  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          3. PARTICULARS OF National Savings Certificates
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black'>Name of Post Office</th>
              <th className='p-4 border border-black'>
                N. S. C. Number
                <br />
                (Issue No. in brackets)
              </th>
              <th className='p-4 border border-black'>
                Date of Purchase
                <br />
                of the N. S. C.
              </th>
              <th className='p-4 border border-black'>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                ₹
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
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              ></td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                ₹
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className='p-2' colSpan='2' contentEditable='false'></td>
              <td
                className='p-2 text-lg border border-black font-bold'
                contentEditable='false'
              >
                TOTAL
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                ₹
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default NationalSaving;
