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
      updateTotalTaxPayable(state);
      updateLessTaxRelief(state);
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
      updateTotalDeduction(state);
    },
    updateFourTwo: (state, action) => {
      state.form[0].itForm.lessFour.two = action.payload;
      updateNhis(state);
      updateTotalDeduction(state);
    },
    updateFourMaintenance: (state, action) => {
      state.form[0].itForm.lessFour.maintenance = action.payload;
      updateTotalDeduction(state);
    },
    updateFourMedical: (state, action) => {
      state.form[0].itForm.lessFour.medical = action.payload;
      updateTotalDeduction(state);
    },
    updateFourRepay: (state, action) => {
      state.form[0].itForm.lessFour.repay = action.payload;
      updateTotalDeduction(state);
    },
    updateFourHomeLoan: (state, action) => {
      state.form[0].itForm.lessFour.homeLoan = action.payload;
      updateTotalDeduction(state);
    },
    updateFourCmprf: (state, action) => {
      state.form[0].itForm.lessFour.cmprf = action.payload;
      updateDonation(state);
      updateTotalDeduction(state);
    },
    updateFourDonn: (state, action) => {
      state.form[0].itForm.lessFour.donn = action.payload;
      updateDonation(state);
      updateTotalDeduction(state);
    },
    updateFourInterest: (state, action) => {
      state.form[0].itForm.lessFour.interest = action.payload;
      updateTotalDeduction(state);
    },
    updateFourDisability: (state, action) => {
      state.form[0].itForm.lessFour.disability = action.payload;
      updateTotalDeduction(state);
    },
    updateFourOthers: (state, action) => {
      state.form[0].itForm.lessFour.others = action.payload;
      updateTotalDeduction(state);
    },
    updateFiveValue: (state, action) => {
      state.form[0].itForm.taxOnTotalIncome.value = action.payload;
      updateMinValue(state);
      updateFivePer(state);
      updateValueOne(state);
    },
    updateFiveValueTwo: (state, action) => {
      state.form[0].itForm.taxOnTotalIncome.valueTwo = action.payload;
      updateROne(state);
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
    updateAccuredDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsAccured[index][field] = value;
      state.form[0].itForm.totalAccured =
        state.form[0].itForm.particularsAccured.reduce((total, child) => {
          const amount = isNaN(Number(child.amount)) ? 0 : Number(child.amount);
          return total + amount;
        }, 0);
    },
    updateSavingsDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsNationalSaving[index][field] = value;
      state.form[0].itForm.totalSavings =
        state.form[0].itForm.particularsNationalSaving.reduce(
          (total, child) => {
            const amount = isNaN(Number(child.amount))
              ? 0
              : Number(child.amount);
            return total + amount;
          },
          0
        );
    },
    updateLicDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsLic[index][field] = value;
      state.form[0].itForm.totalLic =
        state.form[0].itForm.particularsLic.reduce((total, child) => {
          const paid = isNaN(Number(child.paid)) ? 0 : Number(child.paid);
          return total + paid;
        }, 0);
    },
    updatePremiumDetails: (state, action) => {
      const { index, field, value } = action.payload;
      state.form[0].itForm.particularsPremium[index][field] = value;
      state.form[0].itForm.totalPremium =
        state.form[0].itForm.particularsPremium.reduce((total, child) => {
          const paid = isNaN(Number(child.paid)) ? 0 : Number(child.paid);
          return total + paid;
        }, 0);
    },
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
const updateTotalDeduction = (state) => {
  const {
    nhis,
    maintenance,
    medical,
    repay,
    homeLoan,
    donation,
    interest,
    disability,
    others,
  } = state.form[0].itForm.lessFour;
  const total =
    parseFloat(nhis) +
    parseFloat(maintenance) +
    parseFloat(medical) +
    parseFloat(repay) +
    parseFloat(homeLoan) +
    parseFloat(donation) +
    parseFloat(interest) +
    parseFloat(disability) +
    parseFloat(others);
  state.form[0].itForm.lessFour.totalDed = total;
  updateNextTaxIncome(state);
  updateNilTaxOn(state);
  updatePlusOne(state);
  updateMinValue(state);
};
const updateNextTaxIncome = (state) => {
  const { grossTaxableIncome } = state.form[0].itForm;
  const { totalDed } = state.form[0].itForm.lessFour;
  const nextTaxIncome = grossTaxableIncome - totalDed;
  state.form[0].itForm.netTaxableIncome = nextTaxIncome;
  updateRoundedNetTaxableIncome(state);
  updateNilTaxOn(state);
  updatePlusOne(state);
};
const updateRoundedNetTaxableIncome = (state) => {
  const { netTaxableIncome } = state.form[0].itForm;
  const { grossSalaryIncome } = state.form[0].itForm;
  if (grossSalaryIncome > 0.1) {
    state.form[0].itForm.roundedNetTaxableIncome =
      Math.round(netTaxableIncome / 10) * 10;
  } else {
    state.form[0].itForm.roundedNetTaxableIncome = 0;
  }
  updateNilTaxOn(state);
  updateLess(state);
  updateValueThree(state);
  updateRTwo(state);
  updateSurPercentage(state);
  updateSurTax(state);
};
const updateNilTaxOn = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  if (roundedNetTaxableIncome <= 250000) {
    state.form[0].itForm.taxOnTotalIncome.nilTaxOn = roundedNetTaxableIncome;
  } else {
    state.form[0].itForm.taxOnTotalIncome.nilTaxOn = 250000;
  }
  updateValueThree(state);
};
const updatePlusOne = (state) => {
  const { tax } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.plusOne = parseFloat(tax) + 1;
};
const updateMinValue = (state) => {
  const { value, nilTaxOn } = state.form[0].itForm.taxOnTotalIncome;
  if (value > nilTaxOn) {
    state.form[0].itForm.taxOnTotalIncome.minValue = nilTaxOn;
  } else {
    state.form[0].itForm.taxOnTotalIncome.minValue = value;
  }
  updateFivePer(state);
  updateLess(state);
  updateValueThree(state);
};
const updateFivePer = (state) => {
  const { minValue } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.fivePer = Math.round(
    parseFloat(minValue) * 0.05
  );
  updateTaxPayable(state);
};
const updateLess = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  const { nilTaxOn } = state.form[0].itForm.taxOnTotalIncome;
  if (roundedNetTaxableIncome <= nilTaxOn) {
    state.form[0].itForm.less = 0;
  } else if (roundedNetTaxableIncome <= 500000) {
    state.form[0].itForm.taxOnTotalIncome.less =
      state.form[0].itForm.taxOnTotalIncome.fivePer;
  } else {
    state.form[0].itForm.taxOnTotalIncome.less = 0;
  }
  updateTaxPayable(state);
};
const updateValueOne = (state) => {
  const { value } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.valueOne = parseFloat(value) + 1;
};
const updateValueThree = (state) => {
  const { nilTaxOn, minValue } = state.form[0].itForm.taxOnTotalIncome;
  const { roundedNetTaxableIncome } = state.form[0].itForm;

  if (roundedNetTaxableIncome <= 500000) {
    state.form[0].itForm.taxOnTotalIncome.valueThree = 0;
  } else if (roundedNetTaxableIncome <= 1000000) {
    state.form[0].itForm.taxOnTotalIncome.valueThree =
      roundedNetTaxableIncome - parseFloat(nilTaxOn) - parseFloat(minValue);
  } else {
    state.form[0].itForm.taxOnTotalIncome.valueThree =
      1000000 - parseFloat(nilTaxOn) - parseFloat(minValue);
  }
  updateTwentyPer(state);
};
const updateTwentyPer = (state) => {
  const { valueThree } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.twentyPer = Math.round(
    parseFloat(valueThree) * 0.2
  );
  updateTaxPayable(state);
};
const updateROne = (state) => {
  const { valueTwo } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.rOne = parseFloat(valueTwo);
};
const updateRTwo = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  if (roundedNetTaxableIncome > 1000000) {
    state.form[0].itForm.taxOnTotalIncome.rTwo =
      parseFloat(roundedNetTaxableIncome) - 1000000;
  } else {
    state.form[0].itForm.taxOnTotalIncome.rTwo = 0;
  }
  updateThirtyPer(state);
};
const updateThirtyPer = (state) => {
  const { rTwo } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.thirtyPer = Math.round(
    parseFloat(rTwo) * 0.3
  );
  updateTaxPayable(state);
};
const updateTaxPayable = (state) => {
  const { fivePer, less, twentyPer, thirtyPer } =
    state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.taxPayable =
    parseFloat(fivePer) +
    parseFloat(less) +
    parseFloat(twentyPer) +
    parseFloat(thirtyPer);
  updateSurTax(state);
  updateTotalTaxPayable(state);
};
const updateSurPercentage = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  let surPercentage;
  if (roundedNetTaxableIncome <= 5000000) {
    surPercentage = 0;
  } else if (roundedNetTaxableIncome <= 10000000) {
    surPercentage = 0.1;
  } else if (roundedNetTaxableIncome <= 20000000) {
    surPercentage = 0.15;
  } else if (roundedNetTaxableIncome <= 50000000) {
    surPercentage = 0.25;
  } else {
    surPercentage = 0.37;
  }
  state.form[0].itForm.taxOnTotalIncome.surPer = surPercentage;
  updateCess(state);
};
const updateSurTax = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  const { taxPayable } = state.form[0].itForm.taxOnTotalIncome;
  if (roundedNetTaxableIncome > 5000000) {
    state.form[0].itForm.taxOnTotalIncome.surTax = 0;
  } else {
    state.form[0].itForm.taxOnTotalIncome.surTax = parseFloat(taxPayable);
  }
  updateSurcharge(state);
};
const updateSurcharge = (state) => {
  const { surTax } = state.form[0].itForm.taxOnTotalIncome;
  const { surPer } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.surcharge =
    parseFloat(surTax) * parseFloat(surPer);
  updateCess(state);
  updateTotalTaxPayable(state);
};
const updateCess = (state) => {
  const { taxPayable, surcharge } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.cess =
    parseFloat(taxPayable) + parseFloat(surcharge);
  updateTotalCess(state);
};
const updateTotalCess = (state) => {
  const { cess } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.cessTotal = Math.round(
    parseFloat(cess) * 0.04
  );
  updateTotalTaxPayable(state);
};
const updateTotalTaxPayable = (state) => {
  const { taxPayable, surcharge, cessTotal } =
    state.form[0].itForm.taxOnTotalIncome;
  const { grossSalaryIncome } = state.form[0].itForm;
  if (grossSalaryIncome > 0) {
    state.form[0].itForm.taxOnTotalIncome.totalTaxPayable =
      parseFloat(taxPayable) + parseFloat(surcharge) + parseFloat(cessTotal);
  } else {
    state.form[0].itForm.taxOnTotalIncome.totalTaxPayable = 0;
  }
};
const updateLessTaxRelief = (state) => {
  const { grossSalaryIncome } = state.form[0].itForm;
  if (grossSalaryIncome === 0) {
    state.form[0].itForm.taxOnTotalIncome.lessTaxRelief = 0;
  } else {
    state.form[0].itForm.taxOnTotalIncome.lessTaxRelief = 0.000001;
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
  updateAccuredDetails,
  updateSavingsDetails,
  updateLicDetails,
  updatePremiumDetails,
  updateFiveValue,
  updateFiveValueTwo,
} = financeSlice.actions;

export default financeSlice.reducer;
