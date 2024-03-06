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
    updateRentPaid: (state, action) => {
      state.form[0].itForm.less.rentPaid = action.payload;
      updateRentPaidlessOne(state);
      updateHRA(state);
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
      updateTotalDeduct(state);
      updateDeduction(state);
    },
    updateAnnCps: (state, action) => {
      state.form[0].itForm.lessThree.cps = action.payload;
      updateAnnualCps(state);
      updateTotalDeduct(state);
      updateDeduction(state);
    },
    updateDed: (state, action) => {
      state.form[0].itForm.lessThree.ded = action.payload;
      updatefinDed(state);
      updategrossTaxableIncome(state);
    },
    updateOtherSpf: (state, action) => {
      state.form[0].itForm.lessThree.otherSpf = action.payload;
      otherSpecific(state);
      updategrossTaxableIncome(state);
    },
    updateFourOne: (state, action) => {
      state.form[0].itForm.lessFour.one = action.payload;
      updateNhis(state);
    },
    updateFourTwo: (state, action) => {
      state.form[0].itForm.lessFour.two = action.payload;
      updateNhis(state);
    },
    updateFourMaintenance: (state, action) => {
      state.form[0].itForm.lessFour.maintenance = action.payload;
    },
    updateFourMedical: (state, action) => {
      state.form[0].itForm.lessFour.medical = action.payload;
    },
    updateFourRepay: (state, action) => {
      state.form[0].itForm.lessFour.repay = action.payload;
    },
    updateFourHomeLoan: (state, action) => {
      state.form[0].itForm.lessFour.homeLoan = action.payload;
    },
    updateFourCmprf: (state, action) => {
      state.form[0].itForm.lessFour.cmprf = action.payload;
      updateDonation(state);
    },
    updateFourDonn: (state, action) => {
      state.form[0].itForm.lessFour.donn = action.payload;
      updateDonation(state);
    },
    updateFourInterest: (state, action) => {
      state.form[0].itForm.lessFour.interest = action.payload;
    },
    updateFourDisability: (state, action) => {
      state.form[0].itForm.lessFour.disability = action.payload;
    },
    updateFourOthers: (state, action) => {
      state.form[0].itForm.lessFour.others = action.payload;
    },
    updateTuitionFeeDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsTutionFee[index][field] = value;
      state.form[0].itForm.totalTuition =
        state.form[0].itForm.particularsTutionFee.reduce((total, child) => {
          const fee = isNaN(Number(child.fee)) ? 0 : Number(child.fee);
          return total + fee;
        }, 0);
    },
    updateMutualFundDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsMutualFund[index][field] = value;
      state.form[0].itForm.totalMutualFund =
        state.form[0].itForm.particularsMutualFund.reduce((total, child) => {
          const amount = isNaN(Number(child.amount)) ? 0 : Number(child.amount);
          return total + amount;
        }, 0);
    },
    updateAccuredDetails : (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsAccured[index][field] = value;
      state.form[0].itForm.totalAccured =
        state.form[0].itForm.particularsAccured.reduce((total, child) => {
          const amount = isNaN(Number(child.amount)) ? 0 : Number(child.amount);
          return total + amount;
        }, 0);
    }
  },
});

const updateRentPaidlessOne = (state) => {
  const { rentPaid } = state.form[0].itForm.less;
  const actualRentpaid = rentPaid * 12;
  state.form[0].itForm.less.actualRentPaid = actualRentpaid;
};
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
  updategrossTaxableIncome(state);
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
  updateTotalDeduct(state);
  updateDeduction(state);
  updategrossTaxableIncome(state);
};
const updateAnnualPension = (state) => {
  const { annualPe } = state.form[0].itForm.lessThree;
  if (annualPe > 150000) {
    state.form[0].itForm.lessThree.annualPension = 150000;
    updateTotalDeduct(state);
  } else if (annualPe > 0) {
    state.form[0].itForm.lessThree.annualPension = annualPe;
    updateTotalDeduct(state);
  } else {
    state.form[0].itForm.lessThree.annualPension = 0;
    updateTotalDeduct(state);
  }
};
const updateAnnualCps = (state) => {
  const { cps } = state.form[0].itForm.lessThree;
  if (cps > 150000) {
    state.form[0].itForm.lessThree.annualCps = 150000;
    updateTotalDeduct(state);
  } else if (cps > 0) {
    state.form[0].itForm.lessThree.annualCps = cps;
    updateTotalDeduct(state);
  } else {
    state.form[0].itForm.lessThree.annualCps = 0;
    updateTotalDeduct(state);
  }
};
const updateTotalDeduct = (state) => {
  const { annualPension, annualCps, total } = state.form[0].itForm.lessThree;
  const TotalDeduction =
    parseFloat(annualPension) + parseFloat(annualCps) + parseFloat(total);
  state.form[0].itForm.lessThree.totalDeduct = TotalDeduction;
};
const updateDeduction = (state) => {
  const { annualPension, annualCps, total } = state.form[0].itForm.lessThree;
  const { grossTotalIncome } = state.form[0].itForm;
  const dud =
    parseFloat(annualCps) + parseFloat(annualPension) + parseFloat(total);
  if (grossTotalIncome > 0.1) {
    if (dud < 150000 && dud > 0) {
      state.form[0].itForm.lessThree.deduction = dud;
    } else {
      state.form[0].itForm.lessThree.deduction = 150000;
    }
  } else {
    state.form[0].itForm.lessThree.deduction = 0;
  }
};
const updatefinDed = (state) => {
  const { ded } = state.form[0].itForm.lessThree;
  const { grossTotalIncome } = state.form[0].itForm;
  if (grossTotalIncome > 0.1) {
    if (ded < 50000) {
      state.form[0].itForm.lessThree.finDed = ded;
    } else {
      state.form[0].itForm.lessThree.finDed = 50000;
    }
  } else {
    state.form[0].itForm.lessThree.finDed = 0;
  }
};
const otherSpecific = (state) => {
  const { otherSpf } = state.form[0].itForm.lessThree;
  if (otherSpf > 0) {
    if (otherSpf < 50000) {
      state.form[0].itForm.lessThree.otherSpecific = Math.round(otherSpf / 2);
    } else {
      state.form[0].itForm.lessThree.otherSpecific = 50000;
    }
  } else {
    state.form[0].itForm.lessThree.otherSpecific = 0;
  }
};
const updategrossTaxableIncome = (state) => {
  const { grossTotalIncome } = state.form[0].itForm;
  const { deduction, finDed, otherSpecific } = state.form[0].itForm.lessThree;

  const newGrossTaxableIncome =
    grossTotalIncome - deduction - finDed - otherSpecific;

  state.form[0].itForm.grossTaxableIncome = newGrossTaxableIncome;
};
const updateNhis = (state) => {
  const { one, two } = state.form[0].itForm.lessFour;
  const nhis = parseFloat(one) + parseFloat(two);
  state.form[0].itForm.lessFour.nhis = nhis;
};
const updateDonation = (state) => {
  const { cmprf, donn } = state.form[0].itForm.lessFour;
  const donation = parseFloat(cmprf) + parseFloat(donn);
  state.form[0].itForm.lessFour.donation = donation;
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
  updateAnnCps,
  updateRentPaid,
  updateDed,
  updateOtherSpf,
  updateFourOne,
  updateFourTwo,
  updateFourMaintenance,
  updateFourMedical,
  updateFourRepay,
  updateFourHomeLoan,
  updateFourCmprf,
  updateFourDonn,
  updateFourInterest,
  updateFourDisability,
  updateFourOthers,
  updateTuitionFeeDetails,
  updateMutualFundDetails,
  updateAccuredDetails
} = financeSlice.actions;

export default financeSlice.reducer;
