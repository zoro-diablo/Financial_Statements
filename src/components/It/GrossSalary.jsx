import { useSelector, useDispatch } from 'react-redux';
import {
  updateActualAmount,
  updateExpenditure,
  updateFortyPercent,
  updateConveyance,
  updateHill,
  updateOthers,
  updateHouseProperty,
  updateSavingBank,
  updateOther,
  updateGpf,
  updateSpf,
  updatePli,
  updateLic,
  updateUti,
  updateNsc,
  updateNscInterest,
  updateEquity,
  updateTuition,
  updatePpf,
  updateSub,
  updateInvest,
  updateInvestInScheme,
  updateLessOthers,
  updateAnnualPe,
  updateAnnCps,
  updateRentPaid,
  updateDed,
  updateOtherSpf,
  updateFourOne,
  updateFourTwo,
  updateFourMedical,
  updateFourRepay,
  updateFourHomeLoan,
  updateFourDonn,
  updateFourCmprf,
  updateFourOthers,
  updateFiveValue,
  updateFiveValueTwo,
  updateCheckBoxTaxPayable,
  updateSelfSpouseChild,
  updateFatherMother,
  updateCheckAgeSelf,
  updateCheckAgeFather,
  updatePrivateHealth,
  updateFourGovOne,
  updateFourGovTwo,
  updateTicketMetro,
  updateLessThreeDedTwo,
  updateAddAgri,
  updateAddOthers,
} from '../../redux/features/finance';
import { FaGreaterThan } from 'react-icons/fa6';

const GrossSalary = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.finance.form[0].itForm);
  const { master } = useSelector((state) => state.finance.form[0]);

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

      <tbody>
        <tr>
          <td className='td1 border-2 border-black'>1</td>
          <td className='td1 border-l-2 border-black'>
            GROSS SALARY INCOME (including all allowances) :{' '}
          </td>
          <td
            className='td1 border-l-2 border-black'
            onInput='updateCR_SL1(this)'
          ></td>
          <td className='td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.grossSalaryIncome}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>2</td>
          <td className='td1 border-2 border-black'>
            LESS : HRA exempted under IT Rules u/s 10(13) A<br />
            a) Actual rent paid in a year : 12 x{' '}
            <input
              type='number'
              className='border-1 w-14 border border-gray-300 text-center'
              value={data.less.rentPaid}
              onChange={(e) => dispatch(updateRentPaid(e.target.value))}
            />
            ={' '}
          </td>
          <td className='crAmount td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.less.actualRentPaid}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            b) Actual amount of HRA received
          </td>
          <td className='crAmount td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.less.actualAmount}
              onChange={(e) => dispatch(updateActualAmount(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            c) Expenditure on rent in excess of 10% of Salary
          </td>
          <td className='crAmount td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.less.expenditure}
              onChange={(e) => dispatch(updateExpenditure(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            d) {data.less.percentage} % of Salary ( Pay + DA){' '}
          </td>
          <td className='crAmount td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.less.fortyPercent}
              onChange={(e) => dispatch(updateFortyPercent(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            HRA exempted : Least of the above{' '}
          </td>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.less.hra}
              disabled
            />
          </td>
        </tr>

        <div className='absolute top-[760px] right-8  h-32  '>
          <div className='flex'>
            <input
              className='mx-4 w-4 mt-2 h-4'
              type='checkbox'
              checked={data.less.checkSal}
              onChange={(e) => dispatch(updateTicketMetro(e.target.checked))}
            />{' '}
            <span className='mr-3 font-bold text-xl text-blue-700'>50%</span>
            <div className='text-red-800 font-bold'>
              Tick here for Metro City
            </div>
          </div>
        </div>

        <tr>
          <td className='td1 border-2 border-black'>3</td>
          <td className='td1 border-l-2 border-black'>
            GROSS SALARY INCOME (1 - 2)
          </td>
          <td className='td1 border-l-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalDR_SL2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.gspOne}
              disabled
            />
          </td>
        </tr>

        <tr>
          <td className='td1 border-2 border-black'>4</td>
          <td className='td1 border-2 border-black'>
            LESS : (a) Standard Deduction under IT Rules u/s 16 (ia)
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessTwo.standardDeduction}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (b) Professional Tax u/s 16 (iii)
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={master.professionalTax}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (c) Interest on Housing Loan u/s 24(b)
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={master.interestOnHousingLoan}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (d) Conveyance Allowance u/s 10(14){' '}
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessTwo.conveyance}
              onChange={(e) => dispatch(updateConveyance(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (e) Hill Allowance u/s 10(14)(ii){' '}
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessTwo.hill}
              onChange={(e) => dispatch(updateHill(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (f) Others (Please specify)
          </td>
          <td className='crAmount2 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessTwo.others}
              onChange={(e) => dispatch(updateOthers(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>TOTAL</td>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessTwo.total}
              disabled
            />
          </td>
        </tr>

        <tr>
          <td className='td1 border-2 border-black'>5</td>
          <td className='td1 border-l-2 border-black'>
            TAXABLE SALARY INCOME ( 3 - 4 )
          </td>
          <td className='td1 border-l-2 border-black'></td>
          <td
            className='td1 border-2 border-black'
            id='totalDR_SL2'
            contentEditable='false'
          >
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxableSalaryIncome}
              disabled
            />
          </td>
        </tr>

        <tr>
          <td className='td1 border-2 border-black'>6</td>
          <td className='td1 border-2 border-black'>
            ADD (a) Income from House property
          </td>
          <td className='crAmount3 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.add.houseProperty}
              onChange={(e) => dispatch(updateHouseProperty(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-l-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (b) Income from Savings Bank Interest
          </td>
          <td className='crAmount3 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.add.savingBank}
              onChange={(e) => dispatch(updateSavingBank(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-l-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (c) Any other Income (FD Interest, Agricultural Income, etc)
          </td>
          <td className='crAmount3 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.add.other}
              onChange={(e) => dispatch(updateOther(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-l-2 border-black'></td>
          <td className='td1 border-2 border-black'>
          Exempt Income : a) Agriculuture Income
          </td>
          <td className='crAmount3 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.add.agri}
              onChange={(e) => dispatch(updateAddAgri(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-l-2 border-black'></td>
          <td className='td1 border-2 border-black'>
          Exempt Income : b ) others
          </td>
          <td className='crAmount3 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.add.incOthers}
              onChange={(e) => dispatch(updateAddOthers(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>7</td>
          <td className='td1 border-2 border-black'>GROSS TOTAL INCOME</td>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.grossTotalIncome}
              disabled
            />
          </td>
        </tr>

        <tr>
          <td className='td1 border-2 border-black'>8</td>
          <td className='td1 border-2 border-black'>
            LESS Deduction under Chapter VI A <br />
            (i) DED u/s 80 C
          </td>
          <td className='crAmount4 td1 border-2 border-black'></td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>a) GPF / TPF</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.gpf}
              onChange={(e) => dispatch(updateGpf(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>b) SPF + FBF</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.spf}
              onChange={(e) => dispatch(updateSpf(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            c) PLI / RPLI / LIC Premium - Deducted from salary
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.pli}
              onChange={(e) => dispatch(updatePli(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            d) Repayment of Housing Loan (Principal)
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={master.repaymentOfHousingLoan}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            e) LIC / PLI Premium paid
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.lic}
              onChange={(e) => dispatch(updateLic(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>f) UTI / ULIP</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.uti}
              onChange={(e) => dispatch(updateUti(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>g) Investment in NSC</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.nsc}
              onChange={(e) => dispatch(updateNsc(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            h) Interst accured on NSC
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.nscInterest}
              onChange={(e) => dispatch(updateNscInterest(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            i) Equity Linked Saving Scheme (ELSS)
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.equity}
              onChange={(e) => dispatch(updateEquity(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>j) Tuition Fees</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.tuition}
              onChange={(e) => dispatch(updateTuition(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>k) PPF / RPF</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.ppf}
              onChange={(e) => dispatch(updatePpf(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            l) Subscription to Equity shares / Infrastructure bonds
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.sub}
              onChange={(e) => dispatch(updateSub(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            m) Investment in Term Deposits (Min. 5 years) in Banks
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.invest}
              onChange={(e) => dispatch(updateInvest(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            n) Investment in Sukanya Samriddhi Yojana Scheme
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.investInScheme}
              onChange={(e) => dispatch(updateInvestInScheme(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            o) Others (Please specify)
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.lessThree.others}
              onChange={(e) => dispatch(updateLessOthers(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>TOTAL AMOUNT u/s 80C :</td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.total}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (ii) DED. u/s 80 CCC : Annuity Pension Funds :{' '}
            <label className='font-bold p-1'>₹</label>
            <input
              type='number'
              className='border-2 text-center w-20'
              value={data.lessThree.annualPe}
              onChange={(e) => dispatch(updateAnnualPe(e.target.value))}
            />
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.annualPension}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (iii) DED. u/s 80 CCD(1) :{' '}
            <label className='font-bold p-1'>₹</label>
            <input
              type='number'
              className='border-2 text-center w-20'
              value={data.lessThree.cps}
              onChange={(e) => dispatch(updateAnnCps(e.target.value))}
            />
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.annualCps}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            TOTAL DEDUCTION (80C + 80CCC + 80CCD) : 8 (i) to 8 (iii)
            <br />
            U/s 80CCE : Restricted to a Max. of ₨1,50,000{' '}
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.totalDeduct}
              disabled
            />
          </td>
          <td className='td1 border-y-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.deduction}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (iv) DED u/s 80-CCD(1B): Voluntary Contribution to NPS / CPS
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            {' '}
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.ded}
              onChange={(e) => dispatch(updateDed(e.target.value))}
            />
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.finDed}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (iv) DED u/s 80 CCD(2)
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            {' '}
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.dedTwo}
              onChange={(e) => dispatch(updateLessThreeDedTwo(e.target.value))}
            />
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.findedTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (v) Others (Please specify)
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            {' '}
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.otherSpf}
              onChange={(e) => dispatch(updateOtherSpf(e.target.value))}
            />
          </td>
          <td className='crAmount4 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessThree.otherSpecific}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>9</td>
          <td className='td1 border-2 border-black'>GROSS TAXABLE INCOME</td>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR4'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.grossTaxableIncome}
              disabled
            />
          </td>
        </tr>

        <div className='absolute right-0 w-[310px] h-32 '>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='border-b-4 border-red-500 p-2'></th>
                <th className='bg-yellow-200 border-4 border-red-500 text-xs p-2'>
                  Medical Insurance premium paid :
                </th>
                <th className='bg-yellow-200 border-x-4 border-t-4 border-red-500 p-2'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-b-4 bg-yellow-200 border-red-500 w-[20%] p-2'>
                  80D
                </td>

                <td className='border-4 bg-yellow-200 border-red-500 w-[60%] p-2'>
                  Self/Spouse/Child
                  <br /> ₹
                  <input
                    type='number'
                    className='ml-2 mr-4 w-24 mb-2 h-6 mt-2 p-1 border border-gray-400'
                    value={data.lessFour.selfSpouseChild}
                    onChange={(e) =>
                      dispatch(updateSelfSpouseChild(e.target.value))
                    }
                  />
                  <br />{' '}
                  <input
                    className='mx-4'
                    type='checkbox'
                    checked={data.lessFour.checkAgeSelf}
                    onChange={(e) =>
                      dispatch(updateCheckAgeSelf(e.target.checked))
                    }
                  />
                  Age{' '}
                  <FaGreaterThan className='text-xs absolute left-32 ml-2 bottom-[-18px]' />{' '}
                  <span className='ml-4'>60</span>
                </td>

                <td className='border-r-4 bg-yellow-200 border-red-500 w-[20%] p-2'>
                  Preventive Health Checkup
                </td>
              </tr>
              <tr>
                <td className=' w-[20%] p-2'></td>

                <td className='border-4 bg-yellow-200 border-red-500 w-[60%] p-2'>
                  Father/Mother/Both
                  <br /> ₹
                  <input
                    type='number'
                    className='ml-2 mr-4 w-24 mb-2 h-6 mt-2 p-1 border border-gray-400'
                    value={data.lessFour.fatherMother}
                    onChange={(e) =>
                      dispatch(updateFatherMother(e.target.value))
                    }
                  />
                  <br />{' '}
                  <input
                    className='mx-4'
                    type='checkbox'
                    checked={data.lessFour.checkAgeFather}
                    onChange={(e) =>
                      dispatch(updateCheckAgeFather(e.target.checked))
                    }
                  />
                  Age{' '}
                  <FaGreaterThan className='text-xs absolute left-32 ml-2 bottom-[-127px]' />{' '}
                  <span className='ml-4'>60</span>
                </td>

                <td className='border-r-4 bg-yellow-200 border-b-4 border-red-500 w-[20%] p-2'>
                  <input
                    type='number'
                    className='ml-2 mr-4 w-14 mb-2 h-6 mt-2 p-1 border border-gray-400'
                    value={data.lessFour.privateHealth}
                    onChange={(e) =>
                      dispatch(updatePrivateHealth(e.target.value))
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <table className='w-full mt-10 border-y-4 border-r-4 border-red-500 border-collapse'>
            <tbody>
              <tr>
                <td className='border-b-4 bg-yellow-200 border-red-500 w-[10%] p-2'>
                  80D
                </td>

                <td className='border-4 bg-yellow-200 border-red-500 w-[45%] p-2'>
                  To Govt.
                  <br /> ₹
                  <input
                    type='number'
                    className='ml-2 mr-4 w-16 mb-2 h-6 mt-2 p-1 border border-gray-400'
                    value={data.lessFour.govOne}
                    onChange={(e) => dispatch(updateFourGovOne(e.target.value))}
                  />
                </td>

                <td className='border-r-4 bg-yellow-200 border-red-500 w-[45%] p-2'>
                  To Govt.
                  <br /> ₹
                  <input
                    type='number'
                    className='ml-2 mr-4 w-16 mb-2 h-6 mt-2 p-1 border border-gray-400'
                    value={data.lessFour.govTwo}
                    onChange={(e) => dispatch(updateFourGovTwo(e.target.value))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <tr>
          <td className='td1 border-2 border-black'>10</td>
          <td className='td1 border-2 border-black'>
            LESS Deduction under Chapter VI A (Continued)
            <br />
            (vi) DED.u/s 80 D: NHIS: <label className='font-bold pr-1'>₹</label>
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.lessFour.one}
              onChange={(e) => dispatch(updateFourOne(e.target.value))}
            />{' '}
            Medl.Ins.premium <label className='font-bold pr-1'>₹</label>
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.lessFour.two}
              onChange={(e) => dispatch(updateFourTwo(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.nhis}
              disabled
            />
          </td>
          <td className='td1 border-2 border-black'>
            {' '}
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.nhisTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (vii) DED u/s 80 DD : Maintenance / Treatment of Dependant
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'></label>
            
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.maintenanceTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (viii) DED u/s 80 DDB : Medical Treatment of Chronic Illness
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.medical}
              onChange={(e) => dispatch(updateFourMedical(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.medicalTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (ix) DED u/s 80 E : Repayment of Interest on Educational Loan
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.repay}
              onChange={(e) => dispatch(updateFourRepay(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.repayTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (x) DED u/s 80 EE / 80 EEA : Interest on Specific Home Loans
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.homeLoan}
              onChange={(e) => dispatch(updateFourHomeLoan(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.homeLoanTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (xi) DED u/s 80 G : CMPRF :{' '}
            <label className='font-bold pr-1'>₹</label>
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.lessFour.cmprf}
              onChange={(e) => dispatch(updateFourCmprf(e.target.value))}
            />{' '}
            Donation :<label className='font-bold px-1'>₹</label>
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.lessFour.donn}
              onChange={(e) => dispatch(updateFourDonn(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.donation}
              disabled
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.donationTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (xii) DED u/s 80TTA: Interest from Savings Accounts of Banks/PO
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'></label>
            
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.interestTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>(xiii) DED u/s 80TTB</td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'></label>
            <input
              className='input '
              type='number'
              disabled
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.ttbValue}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (xiv) DED u/s 80 U : Permanent physical disability (Self)
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'></label>           
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.disabilityTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            (xiv) Others (Please specify)
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input '
              type='number'
              value={data.lessFour.others}
              onChange={(e) => dispatch(updateFourOthers(e.target.value))}
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.othersTwo}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            TOTAL DEDUCTIONS 10 (vi) to 10 (xiv) above
          </td>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR5'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.lessFour.totalDed}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>11</td>
          <td className='td1 border-2 border-black'>
            NET TAXABLE INCOME (Rounded off to nearest ten Rupees) u/s 288A
          </td>
          <td className='td1 border-2 border-black'>
            <input
              className='input'
              type='number'
              value={data.netTaxableIncome}
              disabled
            />
          </td>
          <td className='td1 border-2 border-black' id='totalCR2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.roundedNetTaxableIncome}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>12</td>
          <td className='td1 border-2 border-black'>
            TAX ON TOTAL INCOME :<br />
            a) Upto <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.tax}
              disabled
            />{' '}
            Nil Tax on <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.nilTaxOn}
              disabled
            />
          </td>
          <td className='crAmount5 td1 border-2 border-black'></td>
          <td className='td1 border-black'></td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            b) <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.plusOne}
              disabled
            />{' '}
            to Rs . <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.value}
              onChange={(e) => dispatch(updateFiveValue(e.target.value))}
            />{' '}
            @ 5% on <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.minValue}
              disabled
            />{' '}
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.taxOnTotalIncome.fivePer}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            LESS : Tax Rebate U/s 87A
            <br />
            ONLY where the total income exceeds ₹ 2,50,000 but does not exceed ₨
            5,00,00
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.taxOnTotalIncome.less}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            c) <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.valueOne}
              disabled
            />{' '}
            to Rs . <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.valueTwo}
              onChange={(e) => dispatch(updateFiveValueTwo(e.target.value))}
            />{' '}
            @ 20% on <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.valueThree}
              disabled
            />{' '}
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.taxOnTotalIncome.twentyPer}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            d) Exceeding Rs. <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.rOne}
              disabled
            />{' '}
            @ 30% on <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.rTwo}
              disabled
            />{' '}
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input'
              type='number'
              value={data.taxOnTotalIncome.thirtyPer}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>TAX PAYABLE</td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.taxPayable}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            ADD : Surcharge on Income Tax : @{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.surPer}
              disabled
            />{' '}
            % on <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.surTax}
              disabled
            />{' '}
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.surcharge}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-2 border-black'>
            ADD : Health and Education CESS @ 4% on % on{' '}
            <span className='font-bold'>₹</span>{' '}
            <input
              type='number'
              className='border-1 w-20 border border-gray-300 text-center'
              value={data.taxOnTotalIncome.cess}
              disabled
            />{' '}
          </td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.cessTotal}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-b-2 border-black'>TOTAL TAX PAYABLE</td>
          <td className='td1 border-y-2 border-black'></td>
          <td className='crAmount5 td1 border-2 border-black'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.totalTaxPayable}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-b-2 border-black'>
            LESS : TAX RELIEF u/s 89
          </td>
          <td className='td1 border-y-2 border-black'></td>
          <td className='crAmount5 td1 border-2 border-black'>
            {' '}
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.lessTaxRelief}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'></td>
          <td className='td1 border-b-2 border-black'>
            TAX PAYABLE{' '}
            <input
              type='checkbox'
              checked={data.taxOnTotalIncome.checkBox}
              onChange={(e) =>
                dispatch(updateCheckBoxTaxPayable(e.target.checked))
              }
            />{' '}
            (Rounded off to nearest 10 Rupees) u/s 288B
          </td>
          <td className='td1 border-y-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR5'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxOnTotalIncome.lastTaxPayable}
              disabled
            />{' '}
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>13</td>
          <td className='td1 border-b-2 border-l-2 border-black'>
            Tax already deducted / paid :
          </td>
          <td className='td1 border-y-2 border-black'></td>
          <td className='td1 border-2 border-black' id='totalCR2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.taxAlreadyDed}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td className='td1 border-2 border-black'>14</td>
          <td className='td1 border-l-2 border-black'>
            NET TAX Payable / Refundable
          </td>
          <td className='td1 '></td>
          <td className='td1 border-x-2 border-black' id='totalCR2'>
            <label className='font-bold'>₹</label>
            <input
              className='input font-bold'
              type='number'
              value={data.netTaxPayable}
              disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default GrossSalary;
