import { createSlice } from '@reduxjs/toolkit';
import { form } from '../../utils/form';

const initialState = {
  form: form,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    updateGrossSalaryIncome: (state, action) => {
      state.form[0].itForm.grossSalaryIncome = action.payload;
    },
    updateActualRentPaid: (state, action) => {
      state.form[0].itForm.less.actualRentPaid = action.payload;
      updateHRA(state);
    },
    updateActualAmount: (state, action) => {
      state.form[0].itForm.less.actualAmount = action.payload;
      updateHRA(state);
    },
    updateExpenditure: (state, action) => {
      state.form[0].itForm.less.expenditure = action.payload;
      updateHRA(state);
    },
    updateFortyPercent: (state, action) => {
      state.form[0].itForm.less.fortyPercent = action.payload;
      updateHRA(state);
    },
    updateStandardDeduction: (state, action) => {
      state.form[0].itForm.lessTwo.standardDeduction = action.payload;
      updateTotalLessTwo(state);
    },
    updateTax: (state, action) => {
      state.form[0].itForm.lessTwo.tax = action.payload;
      updateTotalLessTwo(state);
    },
    updateInterest: (state, action) => {
      state.form[0].itForm.lessTwo.interest = action.payload;
      updateTotalLessTwo(state);
    },
    updateConveyance: (state, action) => {
      state.form[0].itForm.lessTwo.conveyance = action.payload;
      updateTotalLessTwo(state);
    },
    updateHill: (state, action) => {
      state.form[0].itForm.lessTwo.hill = action.payload;
      updateTotalLessTwo(state);
    },
    updateOthers: (state, action) => {
      state.form[0].itForm.lessTwo.others = action.payload;
      updateTotalLessTwo(state);
    },
    updateHouseProperty: (state, action) => {
      state.form[0].itForm.add.houseProperty = action.payload;
      updateGrossTotalIncome(state);
    },
    updateSavingBank: (state, action) => {
      state.form[0].itForm.add.savingBank = action.payload;
      updateGrossTotalIncome(state);
    },
    updateOther: (state, action) => {
      state.form[0].itForm.add.other = action.payload;
      updateGrossTotalIncome(state);
    },
    updateGpf: (state, action) => {
      state.form[0].itForm.lessThree.gpf = action.payload;
      updateTotalLessThree(state);
    },
    updateSpf: (state, action) => {
      state.form[0].itForm.lessThree.spf = action.payload;
      updateTotalLessThree(state);
    },
    updatePli: (state, action) => {
      state.form[0].itForm.lessThree.pli = action.payload;
      updateTotalLessThree(state);
    },
    updateRepayment: (state, action) => {
      state.form[0].itForm.lessThree.repayment = action.payload;
      updateTotalLessThree(state);
    },
    updateLic: (state, action) => {
      state.form[0].itForm.lessThree.lic = action.payload;
      updateTotalLessThree(state);
    },
    updateUti: (state, action) => {
      state.form[0].itForm.lessThree.uti = action.payload;
      updateTotalLessThree(state);
    },
    updateNsc: (state, action) => {
      state.form[0].itForm.lessThree.nsc = action.payload;
      updateTotalLessThree(state);
    },
    updateNscInterest: (state, action) => {
      state.form[0].itForm.lessThree.nscInterest = action.payload;
      updateTotalLessThree(state);
    },
    updateEquity: (state, action) => {
      state.form[0].itForm.lessThree.equity = action.payload;
      updateTotalLessThree(state);
    },
    updateTuition: (state, action) => {
      state.form[0].itForm.lessThree.tuition = action.payload;
      updateTotalLessThree(state);
    },
    updatePpf: (state, action) => {
      state.form[0].itForm.lessThree.ppf = action.payload;
      updateTotalLessThree(state);
    },
    updateSub: (state, action) => {
      state.form[0].itForm.lessThree.sub = action.payload;
      updateTotalLessThree(state);
    },
    updateInvest: (state, action) => {
      state.form[0].itForm.lessThree.invest = action.payload;
      updateTotalLessThree(state);
    },
    updateInvestInScheme: (state, action) => {
      state.form[0].itForm.lessThree.investInScheme = action.payload;
      updateTotalLessThree(state);
    },
    updateLessOthers: (state, action) => {
      state.form[0].itForm.lessThree.others = action.payload;
      updateTotalLessThree(state);
    },
    updateAnnualPe: (state, action) => {
      state.form[0].itForm.lessThree.annualPe = action.payload;
      updateAnnualPension(state);
    }
  },
});

const updateHRA = (state) => {
  const { actualRentPaid, actualAmount, expenditure, fortyPercent } =
    state.form[0].itForm.less;
  const hra = Math.min(actualRentPaid, actualAmount, expenditure, fortyPercent);
  state.form[0].itForm.less.hra = hra;
  updateGrossSalary(state);
};
const updateGrossSalary = (state) => {
  const { grossSalaryIncome } = state.form[0].itForm;
  const gspOne = grossSalaryIncome - state.form[0].itForm.less.hra;
  state.form[0].itForm.gspOne = gspOne;
};
const updateTotalLessTwo = (state) => {
  const { standardDeduction, tax, interest, conveyance, hill, others } =
    state.form[0].itForm.lessTwo;
  const total =
    parseFloat(standardDeduction) +
    parseFloat(tax) +
    parseFloat(interest) +
    parseFloat(conveyance) +
    parseFloat(hill) +
    parseFloat(others);
  state.form[0].itForm.lessTwo.total = total;
  updateTaxableIncome(state);
};
const updateTaxableIncome = (state) => {
  const { gspOne } = state.form[0].itForm;
  const taxableSalaryIncome = gspOne - state.form[0].itForm.lessTwo.total;
  state.form[0].itForm.taxableSalaryIncome = taxableSalaryIncome;
  updateGrossTotalIncome(state);
};
const updateGrossTotalIncome = (state) => {
  const { taxableSalaryIncome } = state.form[0].itForm;
  const { houseProperty, savingBank, other } = state.form[0].itForm.add;
  const grossTotalIncome =
    parseFloat(taxableSalaryIncome) +
    parseFloat(houseProperty) +
    parseFloat(savingBank) +
    parseFloat(other);
  state.form[0].itForm.grossTotalIncome = grossTotalIncome;
};
const updateTotalLessThree = (state) => {
  const {
    gpf,
    spf,
    pli,
    repayment,
    lic,
    uti,
    nsc,
    nscInterest,
    equity,
    tuition,
    ppf,
    sub,
    invest,
    investInScheme,
    others,
  } = state.form[0].itForm.lessThree;
  const total =
    parseFloat(gpf) +
    parseFloat(spf) +
    parseFloat(pli) +
    parseFloat(repayment) +
    parseFloat(lic) +
    parseFloat(uti) +
    parseFloat(nsc) +
    parseFloat(nscInterest) +
    parseFloat(equity) +
    parseFloat(tuition) +
    parseFloat(ppf) +
    parseFloat(sub) +
    parseFloat(invest) +
    parseFloat(investInScheme) +
    parseFloat(others);
  state.form[0].itForm.lessThree.total = total;
};
const updateAnnualPension = (state) => {
  const { annualPe } = state.form[0].itForm.lessThree;
  if (annualPe > 150000) {
    state.form[0].itForm.lessThree.annualPension = 150000;
  } else if (annualPe > 0) {
    state.form[0].itForm.lessThree.annualPension = annualPe;
  } else {
    state.form[0].itForm.lessThree.annualPension = 0;
  }
};


export const {
  updateGrossSalaryIncome,
  updateActualRentPaid,
  updateActualAmount,
  updateExpenditure,
  updateFortyPercent,
  updateStandardDeduction,
  updateTax,
  updateInterest,
  updateConveyance,
  updateHill,
  updateOthers,
  updateHouseProperty,
  updateSavingBank,
  updateOther,
  updateGpf,
  updateSpf,
  updatePli,
  updateRepayment,
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
} = financeSlice.actions;

export default financeSlice.reducer;
