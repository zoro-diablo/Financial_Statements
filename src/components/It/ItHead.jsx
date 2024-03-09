import { useSelector } from "react-redux";

const ItHead = () => {
  const data = useSelector((state) => state.finance.form[0].master);
  return (
    <div >
      <header className='mb-1 text-center border-2 border-black py-2'>
        <h1 className='text-2xl font-bold'>INCOME TAX CALCULATION STATEMENT</h1>
        <p className='font-medium'>
          (In respect of a Resident Individual - Age: below 60 years)
        </p>
        <h3 className='text-xl'>
          For the Financial Year 2023-24 / Assessment Year 2024-25
        </h3>
      </header>

      <div className='mb-1 border-2 border-black p-6 grid grid-cols-3 px-16 gap-4'>
        <div className=''>
          <p className='text-start'>
            <strong className=''>Name</strong>
          </p>
        </div>
        <div className=''>
          <p className='text-center text-lg font-medium'>:</p>
        </div>
        <div className=' text-start'>
          <p className=''>{data.name}</p>
        </div>

        <div className='col-span-1'>
          <p className='text-start'>
            <strong className='mr-2'>Designation</strong>
          </p>
        </div>
        <div className='col-span-1'>
          <p className='text-center text-lg font-medium'>:</p>
        </div>
        <div className='col-span-1 text-start'>
          <p className=''>{data.designation}</p>
        </div>

        <div className='col-span-1'>
          <p className='text-start'>
            <strong className='mr-2'>PAN</strong>
          </p>
        </div>
        <div className='col-span-1'>
          <p className='text-center text-lg font-medium'>:</p>
        </div>
        <div className='col-span-1 text-start'>
          <p className=''>
            <strong>{data.pan}</strong> &amp; <strong>Date of Birth:</strong>{' '}
            {data.dob}
          </p>
        </div>

        <div className='col-span-1'>
          <p className='text-start'>
            <strong>School/Office Name & TAN</strong>
          </p>
        </div>
        <div className='col-span-1'>
          <p className='text-center text-lg font-medium'>:</p>
        </div>
        <div className='col-span-1 text-start'>
          <p className=''>{data.schoolOfficeName} ( {data.tan} )</p>
        </div>
      </div>
    </div>
  );
};
export default ItHead;
