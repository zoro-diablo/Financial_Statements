import { useSelector } from 'react-redux';

const GrossSalary = () => {
  const data = useSelector((state) => state.finance.form[0].itForm);
  console.log(data);
  return (
    <table
      id='financialTable'
      className='table1 border-2 border-black m-0 w-[96%]'
    >
      <thead>
        <tr>
          <th className='th1 w-[5%] border-2 border-black'>SL</th>
          <th className='th1 w-[50%] border-2 border-black'>Particulars</th>
          <th className='th1 w-[15%] border-2 border-black'>DR ₹</th>
          <th className='th1 w-[12%] border-2 border-black'>CR ₹</th>
        </tr>
      </thead>
    
        <tbody >
          <tr>
            <td className='td1 border-2 border-black'>1</td>
            <td className='td1 border-l-2 border-black'>
              GROSS SALARY INCOME (including all allowances) :{' '}
            </td>
            <td
              className='td1 border-l-2 border-black'
              onInput='updateCR_SL1(this)'
              contentEditable='true'
            ></td>
            <td className='td1 border-2 border-black'>
              <input className='input' type='text' value={data.grossSalaryIncome} 
              disabled
              />
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>2</td>
            <td className='td1 border-2 border-black'>
              LESS : HRA exempted under IT Rules u/s 10(13) A<br />
              a) Actual rent paid in a year : 12 x 9100 ={' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount td1 border-2 border-black'
              onInput='calculateTotalCR()'
            >
              109200
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              b) Actual amount of HRA received
            </td>
            <td
              contentEditable='true'
              className='crAmount td1 border-2 border-black'
              onInput='calculateTotalCR()'
            >
              31800
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              c) Expenditure on rent in excess of 10% of Salary
            </td>
            <td
              contentEditable='true'
              className='crAmount td1 border-2 border-black'
              onInput='calculateTotalCR()'
            >
              32162
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              d) 40 % of Salary ( Pay + DA){' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount td1 border-2 border-black'
              onInput='calculateTotalCR()'
            >
              306352
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              HRA exempted : Least of the above{' '}
            </td>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR'>
              31800
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>3</td>
            <td className='td1 border-l-2 border-black'>
              GROSS SALARY INCOME (1 - 2){' '}
            </td>
            <td
              className='td1 border-l-2 border-black'
              onInput='updateCR_SL2(this)'
              contentEditable='true'
            ></td>
            <td
              className='td1 border-2 border-black'
              id='totalDR_SL2'
              contentEditable='false'
            >
              769476
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>4</td>
            <td className='td1 border-2 border-black'>
              LESS : (a) Standard Deduction under IT Rules u/s 16 (ia)
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              50000
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (b) Professional Tax u/s 16 (iii)
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              2500
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (c) Interest on Housing Loan u/s 24(b)
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              <i className='fas fa-rupee-sign'></i>0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (d) Conveyance Allowance u/s 10(14){' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              <i className='fas fa-rupee-sign'></i>0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (e) Hill Allowance u/s 10(14)(ii){' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (f) Others (Please specify)
            </td>
            <td
              contentEditable='true'
              className='crAmount2 td1 border-2 border-black'
              onInput='calculateTotalCR2()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>TOTAL</td>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR2'>
              52500
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>5</td>
            <td className='td1 border-l-2 border-black'>
              TAXABLE SALARY INCOME ( 3 - 4 )
            </td>
            <td
              className='td1 border-l-2 border-black'
              onInput='updateCR_SL2(this)'
              contentEditable='true'
            ></td>
            <td
              className='td1 border-2 border-black'
              id='totalDR_SL2'
              contentEditable='false'
            >
              716976
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>6</td>
            <td className='td1 border-2 border-black'>
              ADD (a) Income from House property
            </td>
            <td
              contentEditable='true'
              className='crAmount3 td1 border-2 border-black'
              onInput='calculateTotalCR3()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-l-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (b) Income from Savings Bank Interest
            </td>
            <td
              contentEditable='true'
              className='crAmount3 td1 border-2 border-black'
              onInput='calculateTotalCR3()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-l-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (c) Any other Income (FD Interest, Agricultural Income, etc)
            </td>
            <td
              contentEditable='true'
              className='crAmount3 td1 border-2 border-black'
              onInput='calculateTotalCR3()'
            >
              <i className='fas fa-rupee-sign'></i>0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>7</td>
            <td className='td1 border-2 border-black'>GROSS TOTAL INCOME</td>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR2'>
              716976
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>8</td>
            <td className='td1 border-2 border-black'>
              LESS Deduction under Chapter VI A <br />
              (i) DED u/s 80 C
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>a) GPF / TPF</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>b) SPF + FBF</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>1260
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              c) PLI / RPLI / LIC Premium - Deducted from salary
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>15636
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              d) Repayment of Housing Loan (Principal)
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              e) LIC / PLI Premium paid
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>f) UTI / ULIP</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>g) Investment in NSC</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              h) Interst accured on NSC
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              i) Equity Linked Saving Scheme (ELSS)
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>20999
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>j) Tuition Fees</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>36000
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>k) PPF / RPF</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              l) Subscription to Equity shares / Infrastructure bonds
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              m) Investment in Term Deposits (Min. 5 years) in Banks
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              n) Investment in Sukanya Samriddhi Yojana Scheme
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              24000
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              o) Others (Please specify)
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>TOTAL AMOUNT u/s 80C</td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>98795
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (ii) DED. u/s 80 CCC : Annuity Pension Funds
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              <i className='fas fa-rupee-sign'></i>0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (iii) DED. u/s 80 CCD(1) :
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              76588
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              TOTAL DEDUCTION (80C + 80CCC + 80CCD) : 8 (i) to 8 (iii)
              <br />
              U/s 80CCE : Restricted to a Max. of ₨1,50,000{' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            >
              175383
            </td>
            <td className='td1 border-y-2 border-black'>150000</td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (iv) DED u/s 80-CCD(1B): Voluntary Contribution to NPS / CPS
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (v) Others (Please specify)
            </td>
            <td
              contentEditable='true'
              className='crAmount4 td1 border-2 border-black'
              onInput='calculateTotalCR4()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>9</td>
            <td className='td1 border-2 border-black'>GROSS TAXABLE INCOME</td>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR4'>
              566976
            </td>
          </tr>

          <tr>
            <td className='td1 border-2 border-black'>10</td>
            <td className='td1 border-2 border-black'>
              LESS Deduction under Chapter VI A (Continued)
              <br />
              (vi) DED.u/s 80 D: NHIS:{' '}
              <span className='border border-black p-1'>3600</span>{' '}
              Medl.Ins.premium{' '}
              <span className='border border-black p-1'>19364</span>
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              22964
            </td>
            <td className='td1 border-2 border-black'>22964</td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (vii) DED u/s 80 DD : Maintenance / Treatment of Dependant
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (viii) DED u/s 80 DDB : Medical Treatment of Chronic Illness
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              <i className='fas fa-rupee-sign'></i>
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (ix) DED u/s 80 E : Repayment of Interest on Educational Loan
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              <i className='fas fa-rupee-sign'></i>
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (x) DED u/s 80 EE / 80 EEA : Interest on Specific Home Loans
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (xi) DED u/s 80 G : CMPRF
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (xii) DED u/s 80TTA: Interest from Savings Accounts of Banks/PO
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (xiii) DED u/s 80 U : Permanent physical disability (Self)
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              (xiv) Others (Please specify)
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              TOTAL DEDUCTIONS 10 (vi) to 10 (xiv) above
            </td>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR5'>
              22964
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>11</td>
            <td className='td1 border-2 border-black'>
              NET TAXABLE INCOME (Rounded off to nearest ten Rupees) u/s 288A
            </td>
            <td className='td1 border-2 border-black'>544012</td>
            <td className='td1 border-2 border-black' id='totalCR2'>
              544010
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>12</td>
            <td className='td1 border-2 border-black'>
              TAX ON TOTAL INCOME :<br />
              a) Upto ₹ 2,50,000 Nil Tax on ₹ 2,50,000
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              0
            </td>
            <td className='td1 border-black'></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              b) ₹ 2,50,001 to Rs . ₹ 5,00,000 @ 5% on ₹ 2,50,00
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              12500
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              LESS : Tax Rebate U/s 87A
              <br />
              ONLY where the total income exceeds ₹ 2,50,000 but does not exceed
              ₨ 5,00,00
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              <i className='fas fa-rupee-sign'></i>
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              c) ₹ 5,00,001 to Rs . ₹ 10,00,000 @ 20% on ₹ 44,010
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              <i className='fas fa-rupee-sign'></i>8802
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              d) Exceeding Rs. ₹ 10,00,000 @ 30% on ₹{' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            ></td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>TAX PAYABLE</td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              21302
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              ADD : Surcharge on Income Tax : @ 0% on ₹{' '}
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-2 border-black'>
              ADD : Health and Education CESS @ 4% on ₹ 21,302
            </td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              852
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-b-2 border-black'>TOTAL TAX PAYABLE</td>
            <td className='td1 border-y-2 border-black'></td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              22154
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-b-2 border-black'>
              LESS : TAX RELIEF u/s 89
            </td>
            <td className='td1 border-y-2 border-black'></td>
            <td
              contentEditable='true'
              className='crAmount5 td1 border-2 border-black'
              onInput='calculateTotalCR5()'
            >
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'></td>
            <td className='td1 border-b-2 border-black'>
              TAX PAYABLE (Rounded off to nearest 10 Rupees) u/s 288B 21,298 +
              852
            </td>
            <td className='td1 border-y-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR5'>
              22150{' '}
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>13</td>
            <td className='td1 border-b-2 border-l-2 border-black'>
              Tax already deducted / paid :
            </td>
            <td className='td1 border-y-2 border-black'></td>
            <td className='td1 border-2 border-black' id='totalCR2'>
              0
            </td>
          </tr>
          <tr>
            <td className='td1 border-2 border-black'>14</td>
            <td className='td1 border-l-2 border-black'>
              NET TAX Payable / Refundable 21,298 + 852
            </td>
            <td className='td1 '></td>
            <td className='td1 border-x-2 border-black' id='totalCR2'>
              22150
            </td>
          </tr>
        </tbody>
  
    </table>
  );
};
export default GrossSalary;
