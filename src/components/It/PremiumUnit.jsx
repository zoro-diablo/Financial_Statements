const PremiumUnit = () => {
  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
        <h1 className='text-center font-bold text-xl mb-4'>
          2. PARTICULARS OF UNIT LINKED INSURANCE POLICIES
        </h1>
        <table
          className='w-full border-collapse border-2 border-black'
          id='financial-table'
        >
          <thead>
            <tr>
              <th className='p-4 border border-black w-[15%]'>Policy No.</th>
              <th className='p-4 border border-black'>Name of the Company</th>
              <th className='p-4 border border-black'>Name of Policy</th>
              <th className='p-4 border border-black w-[12%]'>
                Amount Insured
              </th>
              <th className='p-4 border border-black w-[12%]'>
                Premium paid p.a.
              </th>
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
              <td className='p-2' colSpan='3' contentEditable='false'></td>
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

export default PremiumUnit;
