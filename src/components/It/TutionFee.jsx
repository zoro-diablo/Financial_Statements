const TutionFee = () => {
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
            <tr>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                DHEERA JEYAHAR
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                II
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                ADARSH KENDRYA VIDYALAYA
              </td>
              <td
                className='p-2 text-lg border border-black'
                contentEditable='true'
              >
                ₹ 36,000
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
            <tr>
              <td className='p-2' contentEditable='false'></td>
              <td className='p-2' contentEditable='false'></td>

              <td
                className='p-2 text-lg border border-black font-bold'
                contentEditable='false'
              >
                TOTAL
              </td>
              <td
                className='p-2 text-lg border border-black font-bold'
                contentEditable='true'
              >
                ₹ 36,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TutionFee;
