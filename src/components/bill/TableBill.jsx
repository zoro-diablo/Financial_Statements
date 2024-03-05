const TableBill = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='w-[1500px] mx-auto bg-white p-4 border-2 border-black rounded shadow-md'>
          <table className='w-full border-collapse border-2 border-black' id=''>
            <thead>
              <div className='flex'>
                <h1 className='p-4 w-[61.5%] border-t-2 text-center font-bold border-l-2  border-r-2 border-black'>
                  BILL DRAWN PARTICULARS for the Financial Year 2023 - 24
                </h1>
                <h1 className='p-4 w-[38.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black'>
                  Name : M P ARUN JEYAHAR
                </h1>
              </div>
            </thead>
            <thead>
              <div className='flex'>
                <h1 className='py-2 w-[28%] border-t-2 text-center font-bold border-l-2  border-r-2 border-black'>
                  Designation: DEPUTY STATE TAX OFFICER
                </h1>
                <h1 className='py-2 w-[16.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black'>
                  PAN : BFOPA6244Q
                </h1>
                <h1 className='py-2 w-[16.9%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black'>
                  Office TAN : MRIC01323A{' '}
                </h1>
                <h1 className='py-2 w-[38.6%] border-t-2 text-sm text-center font-bold border-l-2 border-r-2 border-black'>
                  Office : STATE TAX OFFICE NAGERCOIL 1
                </h1>
              </div>
            </thead>
            <thead>
              <div className='flex'>
                <h1 className=' border-t-2 pt-6 text-center text-xs font-bold border-l-2 border-r-2 border-black w-[5.3%]'>
                  Month
                  <br /> /
                </h1>
                <h1 className='p-4 border-2 text-center font-bold border-black w-[56.2%]'>
                  Name of the Company
                </h1>
                <h1 className='p-4 border-2 text-center font-bold border-black w-[38.6%]'>
                  Name of Policy
                </h1>
              </div>
            </thead>
            <thead>
              <div className=''>
                <tr>
                  <td className='px- font-extrabold4 border-b-2 text-center font-bold border-l-2 border-r-2 border-black w-[6%]'>
                    {' '}
                    Year
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[5%] '>
                    BASIC PAY
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]'>
                    PP
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    DA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]'>
                    HRA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    CCA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]'>
                    MA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    SPLA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]'>
                    HA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    WA
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[5%]'>
                    Conve. Allow.{' '}
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%] '>
                    Bonus
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%]'>
                    Others
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%] '>
                    Gross
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4%]'>
                    CPS
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    SPF
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%]'>
                    FBF
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    NHIS
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4%]'>
                    LIC/ PLI{' '}
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[3.9%] '>
                    IT + Cess{' '}
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[5%]'>
                    HBA/
                    <br />
                    Others
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[5%] '>
                    Total Dedn.
                  </td>
                  <td className='p-4 font-extrabold border-2 text-center text-xs border-black w-[4.8%]'>
                    NET
                  </td>
                </tr>
              </div>
            </thead>
            <div id=''>
              <tr>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                >
                  03/23
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  16720
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  63620
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6072
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  7855
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  55765
                </td>
              </tr>

              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  04/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  16720
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  63620
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6072
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  7855
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  55765
                </td>
              </tr>

              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  05/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>

              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  06/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>

              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  07/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>

              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  08/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  09/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  10/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  18480
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  65380
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6248
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8031
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  57349
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  11/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  20240
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  67140
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6424
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8207
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  58933
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  12/23
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  20240
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  67140
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6424
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8207
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  58933
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  01/24
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  45300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  20838
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2900
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  69338
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6614
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8397
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  60941
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  02/24
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  45300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  20838
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  69338
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6614
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  8397
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  60941
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  DA ARR1
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  1760
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  1760
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  176
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  176
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  1584
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  DA ARR2
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  7040
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  7040
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  704
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  704
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  6336
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  BONUS
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  0
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  0
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  0
                </td>
              </tr>
              <tr>
                <td
                  className='p-2 text-xs w-[6%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  0
                </td>
              </tr>
              <tr className='font-bold'>
                <td
                  className='p-2 text-sm w-[6%] border-2 border-black'
                  contentEditable='true'
                >
                  Grand Total{' '}
                </td>
                <td
                  className='p-2 text-xs w-[5.1%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  44000
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  16720
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  2600
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  0
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black'
                  contentEditable='true'
                >
                  63620
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                >
                  6072
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  70
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  110
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                >
                  300
                </td>
                <td
                  className='p-2 text-xs w-[4%] border-2 border-black'
                  contentEditable='true'
                >
                  1303
                </td>
                <td
                  className='p-2 text-xs w-[3.9%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-2'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black'
                  contentEditable='true'
                  id='cell-1-3'
                ></td>
                <td
                  className='p-2 text-xs w-[5%] border-2 border-black text-blue-500'
                  contentEditable='true'
                  id='cell-1-3'
                >
                  7855
                </td>
                <td
                  className='p-2 text-xs w-[4.8%] border-2 border-black text-blue-500'
                  contentEditable='true'
                >
                  55765
                </td>
              </tr>
            </div>
          </table>

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
      </div>
    </div>
  )
}
export default TableBill