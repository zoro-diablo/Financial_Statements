import { useSelector } from "react-redux";

const Certificate = () => {
  const data = useSelector((state) => state.finance.form[0].itForm);
  return (
    <div className='max-w-4xl mx-auto bg-white p-1 my-3 border-2 border-black rounded shadow-md'>
      <div className='max-w-4xl mx-auto bg-white p-8 border-2 border-black rounded shadow-md'>
        <h1 className='text-3xl font-bold mb-6 border-b-2 pb-2 mx-[300px] text-center'>
          Certificate
        </h1>

        <div className='mb-4 text-xl'>
          <p className='mb-6'>
            <span className='font-bold mr-2 text-lg'>1:</span> Certified that I
            am occupying a rental house and paying monthly rent of{' '}
            <span className='font-bold ml-8 border-b-2 border-black'>
              ₹ {data.less.rentPaid}
            </span>
          </p>
          <p className='mb-6'>
            <span className='font-bold mr-2 text-lg'>2:</span> Certified that I
            pay p.a. a sum of ₹ ____________ towards LIC / PLI Premium and the{' '}
            <br /> <span className='ml-8'>policies are kept alive.</span>
          </p>
          <p className='mb-6'>
            <span className='font-bold mr-2 text-lg'>3:</span> Certified that
            the details furnished are true to the best of my knowledge and that
            the{' '}
            <span className='ml-8'>
              rebates claimed in the statement are genuine.
            </span>
          </p>
        </div>

        <p className='text-start ml-12 mb-8 text-lg font-bold'>
          / COUNTER SIGNED /
        </p>

        <div className='flex gap-[270px] mx-8'>
          <div className='mt-8'>
            <p className='text-start text-lg font-bold'>
              Head of Office (with seal)
            </p>
          </div>

          <div className='mt-2'>
            <p className='text-end text-lg font-medium italic'>
              Signature of the Govt. Servant
            </p>
            <p className='text-center text-lg font-bold mt-1'>
              [ M P ARUN JEYAHAR ]
            </p>
            <p className='text-center text-md font-sm mt-1'>
              DEPUTY STATE TAX OFFICER
            </p>
            <p className='text-center text-md font-sm mt-1'>
              STATE TAX OFFICE NAGERCOIL 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificate;
