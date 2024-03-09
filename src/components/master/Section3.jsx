import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Section3 = () => {
  return (
    <div className='border-4 border-green-700 m-4 w-[300px] rounded-2xl'>
      <div className='flex'>
        <div>
            <div className='flex space-x-4 items-center justify-center m-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>SPF</h1>
                <span className='font-bold text-lg text-blue-700'>₹</span>
                <input className='w-10 border-2 font-bold text-blue-700 border-red-600' type='number' placeholder='70'/>
            </div>
            <div className='flex space-x-3 items-center justify-center m-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>Conv</h1>
                <span className='font-bold text-lg text-blue-700'>₹</span>
                <input className='w-10 border-2 font-bold text-blue-700 border-red-600' type='number' placeholder='70'/>
            </div>
        </div>
        <div>
            <div className='flex space-x-4 items-center justify-center mx-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>MA</h1>
                <Checkbox {...label} defaultChecked />
            </div>
            <div className='flex space-x-4 items-center justify-center mx-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>FBF</h1>
                <Checkbox {...label} defaultChecked />
            </div>
            <div className='flex space-x-2 items-center justify-center mx-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>NHIS</h1>
                <Checkbox {...label} defaultChecked />
            </div>
        </div>
      </div>

      <div className='flex space-x-14 items-center justify-center mx-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>Hill & Winter</h1>
                <Checkbox {...label} defaultChecked />
            </div>
            <div className='flex space-x-20 items-center justify-center mx-4'>
                <h1 className='font-bold text-end text-lg text-blue-700'>Allowance</h1>
                <Checkbox {...label} defaultChecked />
            </div>
    </div>
  )
}

export default Section3