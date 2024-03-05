const TotalBill = () => {
  return (
    <div>
        <div className='flex mx-12 space-x-32'>
        <table
          className='w-[45%] border-collapse border-2 mt-12 border-black'
          id=''
        >
          <tr>
            <td
              className='p-2 font-medium w-[20%] text-center border-2 border-black'
              contentEditable='true'
            >
              1
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              Actual house rent paid : 12 x 9100
            </td>
            <td
              className='p-2 font-medium w-[30%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 109200
            </td>
          </tr>
          <tr>
            <td
              className='p-2 font-medium w-[20%] text-center border-2 border-black'
              contentEditable='true'
            >
              2
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              10 % of PAY + DA
            </td>
            <td
              className='p-2 font-medium w-[30%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 76588
            </td>
          </tr>
          <tr>
            <td
              className='p-2 font-medium w-[20%] text-center border-2 border-black'
              contentEditable='true'
            >
              3
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              Rent paid over & above 10% of Pay
            </td>
            <td
              className='p-2 font-medium w-[30%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 32612
            </td>
          </tr>
          <tr>
            <td
              className='p-2 font-medium w-[20%] text-center border-2 border-black'
              contentEditable='true'
            >
              4
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              HRA received by Govt. Servant{' '}
            </td>
            <td
              className='p-2 font-medium w-[30%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 31800
            </td>
          </tr>
        </table>
        <table
          className='w-[45%] border-collapse border-2 mt-12 border-black'
          id=''
        >
          <tr>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              Total Income{' '}
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 801276
            </td>
          </tr>
          <tr>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              Less HRA{' '}
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 31,800
            </td>
          </tr>
          <tr>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-2'
            >
              NET Income
            </td>
            <td
              className='p-2 font-medium w-[50%] border-2 text-center border-black'
              contentEditable='true'
              id='cell-1-3'
            >
              ₹ 769476{' '}
            </td>
          </tr>
        </table>
          </div>
        
          <div className='flex ml-32  my-20'>
        <div className='mt-12 text-lg font-semibold'>
          <h1>Signature of the Assessee</h1>
        </div>
        <div className='mt-24 ml-[650px] text-lg font-semibold'>
          <h1>
            Signature of the Headmaster /<br />
            Head of Office / Pay Drawing Officer
          </h1>
        </div>
          </div>
    </div>
  )
}
export default TotalBill