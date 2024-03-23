import { createSlice } from '@reduxjs/toolkit';
import { form } from '../../utils/form';

const initialState = {
  form: form,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    // <------------------- It form ---------------------->

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
    updateTicketMetro: (state, action) => {
      state.form[0].itForm.less.checkSal = action.payload;
      updateFiftyPercentSal(state);
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
      updateInterestLast(state);
      updateTtb(state);
      updateTotalDeduction(state);
      updateGrossTotalIncome(state);
    },
    updateOther: (state, action) => {
      state.form[0].itForm.add.other = action.payload;
      updateTtb(state);
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
    updateSelfSpouseChild: (state, action) => {
      state.form[0].itForm.lessFour.selfSpouseChild = action.payload;
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updateFatherMother: (state, action) => {
      state.form[0].itForm.lessFour.fatherMother = action.payload;
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updateCheckAgeSelf: (state, action) => {
      state.form[0].itForm.lessFour.checkAgeSelf = action.payload;
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updateCheckAgeFather: (state, action) => {
      state.form[0].itForm.lessFour.checkAgeFather = action.payload;
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updatePrivateHealth: (state, action) => {
      state.form[0].itForm.lessFour.privateHealth = action.payload;
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updateFourOne: (state, action) => {
      state.form[0].itForm.lessFour.one = action.payload;
      updateNhis(state);
      updateNhisTwo(state);
      updateTotalDeduction(state);
    },
    updateFourTwo: (state, action) => {
      state.form[0].itForm.lessFour.two = action.payload;
      updateNhis(state);
      updateTotalDeduction(state);
    },
    updateFourMedical: (state, action) => {
      state.form[0].itForm.lessFour.medical = action.payload;
      updateMedicalTwo(state);
      updateTotalDeduction(state);
    },
    updateFourRepay: (state, action) => {
      state.form[0].itForm.lessFour.repay = action.payload;
      updateReplyTwo(state);
      updateTotalDeduction(state);
    },
    updateFourHomeLoan: (state, action) => {
      state.form[0].itForm.lessFour.homeLoan = action.payload;
      updateHomeLoanTwo(state);
      updateTotalDeduction(state);
    },
    updateFourGovOne: (state, action) => {
      state.form[0].itForm.lessFour.govOne = action.payload;
      updateFourDonationLast(state);
      updateTotalDeduction(state);
    },
    updateFourGovTwo: (state, action) => {
      state.form[0].itForm.lessFour.govTwo = action.payload;
      updateFourDonationLast(state);
      updateTotalDeduction(state);
    },
    updateFourCmprf: (state, action) => {
      const newValue = action.payload < 0 ? 0 : action.payload;
      state.form[0].itForm.lessFour.cmprf = newValue;
      updateDonation(state);
      updateFourDonationLast(state);
      updateTotalDeduction(state);
    },

    updateFourDonn: (state, action) => {
      const newValue = action.payload < 0 ? 0 : action.payload;
      state.form[0].itForm.lessFour.donn = newValue;
      updateDonation(state);
      updateFourDonationLast(state);
      updateTotalDeduction(state);
    },


    updateFourOthers: (state, action) => {
      state.form[0].itForm.lessFour.others = action.payload;
      updateOthersTwo(state);
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
    updateCheckBoxTaxPayable: (state, action) => {
      state.form[0].itForm.taxOnTotalIncome.checkBox = action.payload;
      updateLastTaxPayable(state);
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
    updateLessThreeDedTwo: (state, action) => {
      state.form[0].itForm.lessThree.dedTwo = action.payload;
      updateLessThreeFinDedTwo(state);
    },
    // <------------------- It form ---------------------->

    // <------------------- Master ---------------------->
    updateMasterName: (state, action) => {
      state.form[0].master.name = action.payload;
    },
    updateMasterDesignation: (state, action) => {
      state.form[0].master.designation = action.payload;
    },
    updateMasterPAN: (state, action) => {
      state.form[0].master.pan = action.payload;
    },
    updateSchoolOfficeName: (state, action) => {
      state.form[0].master.schoolOfficeName = action.payload;
    },
    updateMasterTAN: (state, action) => {
      state.form[0].master.tan = action.payload;
    },
    updateMasterDOB: (state, action) => {
      state.form[0].master.dob = action.payload;
      updateMasterAge(state);
    },
    updateMasterHouseRent: (state, action) => {
      state.form[0].master.monthlyHouseRentPaid = action.payload;
      updateActualHouseRentPaid(state);
    },
    updateMasterProfessionalTax: (state, action) => {
      state.form[0].master.professionalTax = action.payload;
      updateTotalLessTwo(state);
    },
    updateInterestOfHousingLoan: (state, action) => {
      state.form[0].master.interestOnHousingLoan = action.payload;
      updateInterestOnHousingLoan(state);
      updateTotalLessTwo(state);
    },
    updateRepaymentOfHousingLoan: (state, action) => {
      state.form[0].master.repaymentOfHousingLoan = action.payload;
      updateTotalLessThree(state);
    },
    updateMasterTuitionFee: (state, action) => {
      state.form[0].master.tuitionFee = action.payload;
      updateTotalDeduction(state);
    },
    updateMasterTuition: (state, action) => {
      state.form[0].master.tuition = action.payload;
      updateTotalDeduction(state);
    },
    updateMasterDisability_self_less: (state, action) => {
      state.form[0].master.disability_self_less = action.payload;
      updateMaintenanceTwo(state);
      updateTotalDeduction(state)
    },
    updateMasterDisability_self_greater: (state, action) => {
      state.form[0].master.disability_self_greater = action.payload;
      updateMaintenanceTwo(state);
      updateTotalDeduction(state)
    },
    updateMasterDisability_selfOne: (state, action) => {
      state.form[0].master.disability_self_One = action.payload;   
      updateDisabilityMasterValues(state)
      updateTotalDeduction(state)
    },
    updateMasterDisability_selfTwo: (state, action) => {
      state.form[0].master.disability_self_Two = action.payload;
      updateDisabilityMasterValues(state)
      updateTotalDeduction(state)
    },
    // <------------------- Master ---------------------->

    // <------------------- Bill Drawn ---------------------->

    updateBillDataCell: (state, action) => {
      const { formIndex, itemIndex, propName, value } = action.payload;
      let item = state.form[formIndex].billData[itemIndex];

      item[propName] = value;

      if (
        [
          'basicPay',
          'pp',
          'da',
          'hra',
          'cca',
          'ma',
          'spla',
          'ha',
          'wa',
          'convAllow',
          'bonus',
          'others',
        ].includes(propName)
      ) {
        item.gross = calculateTotalGross(item);
      }
      if (
        [
          'cps',
          'spf',
          'fbf',
          'nhis',
          'lic_pli',
          'it_cess',
          'hba_others',
        ].includes(propName)
      ) {
        item.totalDedn = calculateTotalDedn(item);
      }
      item.net = calculateNet(item.gross, item.totalDedn);

      const columnTotals = calculateColumnTotals(
        state.form[formIndex].billData
      );
      const totalsItemIndex = state.form[formIndex].billData.length - 1;
      state.form[formIndex].billData[totalsItemIndex] = columnTotals;
      updateTenPerPayDaPp(state);
      updateBillTotalHra(state);
      updateBillTotalIncome(state);
      updateBillTotalNetIncome(state);
    },

    // <------------------- Bill Drawn ---------------------->
    // <------------------- Bill Total ---------------------->

    updateCheckPp: (state, action) => {
      state.form[0].billTotal.checkPp = action.payload;
      updateTenPerPayDaPp(state);
    },

    // <------------------- Bill Total ---------------------->
  },
});

// <------------------- Bill Drawn ---------------------->

function calculateTotalGross(item) {
  const {
    basicPay,
    pp,
    da,
    hra,
    cca,
    ma,
    spla,
    ha,
    wa,
    convAllow,
    bonus,
    others,
  } = item;
  return [
    basicPay,
    pp,
    da,
    hra,
    cca,
    ma,
    spla,
    ha,
    wa,
    convAllow,
    bonus,
    others,
  ].reduce((total, current) => {
    const value = parseFloat(current) || 0;
    return total + value;
  }, 0);
}

function calculateTotalDedn(item) {
  const { cps, spf, fbf, nhis, lic_pli, it_cess, hba_others } = item;
  return [cps, spf, fbf, nhis, lic_pli, it_cess, hba_others].reduce(
    (total, current) => {
      const value = parseFloat(current) || 0;
      return total + value;
    },
    0
  );
}

function calculateNet(gross, totalDedn) {
  return gross - totalDedn;
}

function calculateColumnTotals(billData) {
  const columnNames = [
    'basicPay',
    'pp',
    'da',
    'hra',
    'cca',
    'ma',
    'spla',
    'ha',
    'wa',
    'convAllow',
    'bonus',
    'others',
    'gross',
    'cps',
    'spf',
    'fbf',
    'nhis',
    'lic_pli',
    'it_cess',
    'hba_others',
    'totalDedn',
    'net',
  ];
  let totals = columnNames.reduce((acc, columnName) => {
    acc[columnName] = billData.slice(0, -1).reduce((total, item) => {
      let value = parseFloat(item[columnName]) || 0;
      return total + value;
    }, 0);
    return acc;
  }, {});

  totals.month = 'Grand Total';

  return totals;
}

// <------------------- Bill Drawn ---------------------->

// <------------------- Bill Total ---------------------->

const updateActualHouseRentPaid = (state) => {
  const { monthlyHouseRentPaid } = state.form[0].master;
  state.form[0].billTotal.ActRentPaid = 12 * parseFloat(monthlyHouseRentPaid);
  updateRentPaidOverTenPer(state);
};

const updateTenPerPayDaPp = (state) => {
  const { basicPay, pp, da } = state.form[0].billData[18];
  const { checkPp } = state.form[0].billTotal;
  let sum =
    parseFloat(basicPay) +
    parseFloat(da) +
    (checkPp === true ? parseFloat(pp) : 0);
  state.form[0].billTotal.TenPerPayDa = parseFloat((sum * 0.1).toFixed(2));
  updateRentPaidOverTenPer(state);
};

const updateRentPaidOverTenPer = (state) => {
  const { ActRentPaid, TenPerPayDa } = state.form[0].billTotal;
  const difference = parseFloat(ActRentPaid) - parseFloat(TenPerPayDa);
  if (difference < 0) {
    state.form[0].billTotal.RentPaidOverTenPer = 0.000001;
  } else {
    state.form[0].billTotal.RentPaidOverTenPer = difference.toFixed(2);
  }
};

const updateBillTotalHra = (state) => {
  const accHra = state.form[0].billData[12].hra;
  const totHra = state.form[0].billData[18].hra;
  if (accHra > 0) {
    state.form[0].billTotal.hra = parseFloat(totHra) - parseFloat(accHra);
  } else {
    state.form[0].billTotal.hra = parseFloat(totHra);
  }
};

const updateBillTotalIncome = (state) => {
  const { gross } = state.form[0].billData[18];
  state.form[0].billTotal.totalIncome = parseFloat(gross);
  updateBillTotalNetIncome(state);
  updateItFOrmTotalIncome(state);
};

const updateBillTotalLessHra = (state) => {
  const { hra } = state.form[0].itForm.less;
  state.form[0].billTotal.LessHRA = parseFloat(hra);
  updateBillTotalNetIncome(state);
};

const updateBillTotalNetIncome = (state) => {
  const { totalIncome, LessHRA } = state.form[0].billTotal;
  state.form[0].billTotal.NetIncome =
    parseFloat(totalIncome) - parseFloat(LessHRA);
};

// <------------------- Bill Total ---------------------->

// <------------------- It form ---------------------->

const updateLessThreeFinDedTwo = (state) =>{
  const { dedTwo } = state.form[0].itForm.lessThree;
  state.form[0].itForm.lessThree.findedTwo=parseFloat(dedTwo);
}

const updateItFOrmTotalIncome = (state) => {
  const { totalIncome } = state.form[0].billTotal;
  state.form[0].itForm.grossSalaryIncome = parseFloat(totalIncome);
  updateTotalTaxPayable(state);
  updateLessTaxRelief(state);
};

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
  updateBillTotalLessHra(state);
};
const updateGrossSalary = (state) => {
  const { grossSalaryIncome } = state.form[0].itForm;
  const gspOne = grossSalaryIncome - state.form[0].itForm.less.hra;
  state.form[0].itForm.gspOne = gspOne;
  updateTaxableIncome(state);
};
const updateTotalLessTwo = (state) => {
  const { standardDeduction, conveyance, hill, others } =
    state.form[0].itForm.lessTwo;
  const { professionalTax, interestOnHousingLoan } = state.form[0].master;
  const total =
    parseFloat(standardDeduction) +
    parseFloat(professionalTax) +
    parseFloat(interestOnHousingLoan) +
    parseFloat(conveyance) +
    parseFloat(hill) +
    parseFloat(others);
  state.form[0].itForm.lessTwo.total = total;
  updateTaxableIncome(state);
};
const updateTaxableIncome = (state) => {
  const { gspOne } = state.form[0].itForm;
  const { total } = state.form[0].itForm.lessTwo;
  state.form[0].itForm.taxableSalaryIncome =
    parseFloat(gspOne) - parseFloat(total);
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
  updategrossTaxableIncome(state);
};
const updateDeduction = (state) => {
  const { annualPension, annualCps, total } = state.form[0].itForm.lessThree;
  const { grossTotalIncome } = state.form[0].itForm;
  const dud =
    parseFloat(annualCps) + parseFloat(annualPension) + parseFloat(total);
  if (grossTotalIncome > 0.1) {
    state.form[0].itForm.lessThree.deduction = Math.min(150000, dud);
  } else {
    state.form[0].itForm.lessThree.deduction = 0;
  }
  updategrossTaxableIncome(state);
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
  updategrossTaxableIncome(state);
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
  updategrossTaxableIncome(state);
};
const updategrossTaxableIncome = (state) => {
  const { grossTotalIncome } = state.form[0].itForm;
  const { deduction, finDed, otherSpecific } = state.form[0].itForm.lessThree;

  const newGrossTaxableIncome =
    parseFloat(grossTotalIncome) -
    parseFloat(deduction) -
    parseFloat(finDed) -
    parseFloat(otherSpecific);

  state.form[0].itForm.grossTaxableIncome = newGrossTaxableIncome;
  updateNextTaxIncome(state);
  updateRoundedNetTaxableIncome(state);
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
  updateFourDonationLast(state);
};
const updateTotalDeduction = (state) => {
  const {
    nhisTwo,
    maintenanceTwo,
    medicalTwo,
    repayTwo,
    homeLoanTwo,
    donationTwo,
    interestTwo,
    ttbValue,
    disabilityTwo,
    othersTwo,
  } = state.form[0].itForm.lessFour;
  const total =
    parseFloat(nhisTwo) +
    parseFloat(maintenanceTwo) +
    parseFloat(medicalTwo) +
    parseFloat(repayTwo) +
    parseFloat(homeLoanTwo) +
    parseFloat(donationTwo) +
    parseFloat(interestTwo) +
    parseFloat(ttbValue) +
    parseFloat(disabilityTwo) +
    parseFloat(othersTwo);
  state.form[0].itForm.lessFour.totalDed = total;
  updateFourDonationLast(state);
  updateNilTaxOn(state);
  updateMaintenanceTwo(state)
  updatePlusOne(state);
  updateInterestLast(state);
  updateTtb(state);
  updateDisabilityMasterValues(state);
  updateMinValue(state);
  updateNextTaxIncome(state);
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
  updateMinValue(state);
};
const updateNilTaxOn = (state) => {
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  if (roundedNetTaxableIncome <= 250000) {
    state.form[0].itForm.taxOnTotalIncome.nilTaxOn = roundedNetTaxableIncome;
  } else {
    state.form[0].itForm.taxOnTotalIncome.nilTaxOn = 250000;
  }
  updateValueThree(state);
  updateMinValue(state);
};
const updatePlusOne = (state) => {
  const { tax } = state.form[0].itForm.taxOnTotalIncome;
  state.form[0].itForm.taxOnTotalIncome.plusOne = parseFloat(tax) + 1;
};
const updateMinValue = (state) => {
  const { value, nilTaxOn } = state.form[0].itForm.taxOnTotalIncome;
  const { roundedNetTaxableIncome } = state.form[0].itForm;
  const minValue = Math.min(value, roundedNetTaxableIncome) - nilTaxOn;

  state.form[0].itForm.taxOnTotalIncome.minValue = minValue;

  updateFivePer(state);
  updateLess(state);
  updateValueThree(state);
};

const updateTtb = (state) => {
  const { age } = state.form[0].master;
  const { savingBank, other } = state.form[0].itForm.add;
  if (age > 60) {
    state.form[0].itForm.lessFour.ttbValue = Math.min(
      50000,
      parseFloat(savingBank) + parseFloat(other)
    );
  } else {
    state.form[0].itForm.lessFour.ttbValue = 0;
  }
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
    state.form[0].itForm.taxOnTotalIncome.less = 0;
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
    parseFloat(twentyPer) +
    parseFloat(thirtyPer) -
    parseFloat(less);
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
  updateLastTaxPayable(state);
};
const updateLessTaxRelief = (state) => {
  const { grossSalaryIncome } = state.form[0].itForm;
  if (grossSalaryIncome === 0) {
    state.form[0].itForm.taxOnTotalIncome.lessTaxRelief = 0;
  } else {
    state.form[0].itForm.taxOnTotalIncome.lessTaxRelief = 0.000001;
  }
  updateLastTaxPayable(state);
  updateLastNetTaxPayable(state);
};
const updateLastTaxPayable = (state) => {
  const { grossSalaryIncome } = state.form[0].itForm;
  const { totalTaxPayable, lessTaxRelief, checkBox } =
    state.form[0].itForm.taxOnTotalIncome;
  let result = 0;
  if (checkBox === true) {
    result =
      Math.round(
        (parseFloat(totalTaxPayable) - parseFloat(lessTaxRelief)) / 10
      ) * 10;
  } else {
    result = parseFloat(totalTaxPayable) - parseFloat(lessTaxRelief);
  }
  if (grossSalaryIncome > 0) {
    state.form[0].itForm.taxOnTotalIncome.lastTaxPayable = result + 0.000001;
  }
  updateLastNetTaxPayable(state);
};
const updateLastNetTaxPayable = (state) => {
  const { taxAlreadyDed, grossSalaryIncome } = state.form[0].itForm;
  const { lastTaxPayable } = state.form[0].itForm.taxOnTotalIncome;

  if (grossSalaryIncome > 0) {
    state.form[0].itForm.netTaxPayable =
      parseFloat(lastTaxPayable) - parseFloat(taxAlreadyDed);
  } else {
    state.form[0].itForm.netTaxPayable = 0;
  }
};
const updateNhisTwo = (state) => {
  const {
    one,
    privateHealth,
    selfSpouseChild,
    fatherMother,
    checkAgeSelf,
    checkAgeFather,
  } = state.form[0].itForm.lessFour;

  const oneValue = Number(one);
  const privateHealthValue = privateHealth === '' ? 0 : Number(privateHealth);
  const selfSpouseChildValue =
    selfSpouseChild === '' ? 0 : Number(selfSpouseChild);
  const fatherMotherValue = fatherMother === '' ? 0 : Number(fatherMother);
  let sum = 0;
  if (checkAgeSelf === true) {
    sum += Math.min(50000, selfSpouseChildValue + oneValue);
  } else {
    sum += Math.min(25000, selfSpouseChildValue + oneValue);
  }
  if (checkAgeFather === true) {
    sum += Math.min(50000, fatherMotherValue);
  } else {
    sum += Math.min(25000, fatherMotherValue);
  }
  sum += Math.min(5000, privateHealthValue);
  const nhisTwo = sum > 100000 ? 100000 : sum;
  state.form[0].itForm.lessFour.nhisTwo = nhisTwo;
  return nhisTwo;
};
const updateMedicalTwo = (state) => {
  const { medical } = state.form[0].itForm.lessFour;
  const { age } = state.form[0].master;
  if (age < 60) {
    state.form[0].itForm.lessFour.medicalTwo = Math.min(
      40000,
      parseFloat(medical)
    );
  } else {
    state.form[0].itForm.lessFour.medicalTwo = Math.min(
      100000,
      parseFloat(medical)
    );
  }
};
const updateReplyTwo = (state) => {
  const { repay } = state.form[0].itForm.lessFour;
  state.form[0].itForm.lessFour.repayTwo = parseFloat(repay);
};
const updateHomeLoanTwo = (state) => {
  const { homeLoan } = state.form[0].itForm.lessFour;
  if (homeLoan > 150000) {
    state.form[0].itForm.lessFour.homeLoanTwo = 150000;
  } else {
    state.form[0].itForm.lessFour.homeLoanTwo = homeLoan;
  }
};
const updateFourDonationLast = (state) => {
  const { govOne, govTwo, cmprf } = state.form[0].itForm.lessFour;
  let govOneValue = parseFloat(govOne);
  let govTwoValue = parseFloat(govTwo);

  govOneValue = isNaN(govOneValue) ? 0 : govOneValue;
  govTwoValue = isNaN(govTwoValue) ? 0 : govTwoValue;

  const calculateCappedValue = (value, taxableIncome) => {
    const cap = taxableIncome * 0.1;
    return Math.min(value, cap);
  };
  const calculateCappedValueTwo = (value, taxableIncome) => {
    const cap = (taxableIncome * 0.1) / 2;
    return Math.min(value, cap);
  };

  const taxableIncome = state.form[0].itForm.grossTaxableIncome;

  govOneValue = calculateCappedValue(govOneValue, taxableIncome);

  govTwoValue = calculateCappedValueTwo(
    Math.round(govTwoValue / 2),
    taxableIncome
  );

  const cmprfValue = parseFloat(cmprf);
  const donationTwo = isNaN(cmprfValue)
    ? 0
    : cmprfValue + govOneValue + govTwoValue;

  state.form[0].itForm.lessFour.donationTwo = parseFloat(
    donationTwo.toFixed(2)
  );

  return state;
};

const updateInterestLast = (state) => {
  const { age } = state.form[0].master;
  const { savingBank } = state.form[0].itForm.add;
  if (age < 60) {
    state.form[0].itForm.lessFour.interestTwo = Math.min(
      parseFloat(savingBank),
      10000
    );
  } else {
    state.form[0].itForm.lessFour.interestTwo = 0;
  }
};
const updateOthersTwo = (state) => {
  const { others } = state.form[0].itForm.lessFour;
  state.form[0].itForm.lessFour.othersTwo = parseFloat(others);
};
const updateFiftyPercentSal = (state) => {
  const { checkSal } = state.form[0].itForm.less;
  if (checkSal === true) {
    state.form[0].itForm.less.fortyPercent = Math.round(
      state.form[0].itForm.less.fortyPercent * 1.1
    );
    state.form[0].itForm.less.percentage = 50;
  } else {
    state.form[0].itForm.less.fortyPercent = Math.round(
      state.form[0].itForm.less.fortyPercent / 1.1
    );
    state.form[0].itForm.less.percentage = 40;
  }
};
// <------------------- It form ---------------------->

// <------------------- Master ---------------------->

const updateMasterAge = (state) => {
  const dob = state.form[0].master.dob;
  const dobDate = new Date(dob);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dobDate.getFullYear();
  if (
    currentDate.getMonth() < dobDate.getMonth() ||
    (currentDate.getMonth() === dobDate.getMonth() &&
      currentDate.getDate() < dobDate.getDate())
  ) {
    age--;
  }
  state.form[0].master.age = age;
  updateInterestLast(state);
  updateTtb(state);
  return state;
};
const updateInterestOnHousingLoan = (state) => {
  const { interestOnHousingLoan } = state.form[0].master;
  if (interestOnHousingLoan > 200000) {
    state.form[0].master.interestOnHousingLoan = 200000;
  }
  return state;
};
const updateMaintenanceTwo = (state) => {
  const { disability_self_less, disability_self_greater } =
    state.form[0].master;
  if (disability_self_less) {
    state.form[0].itForm.lessFour.maintenanceTwo = 75000;
  } else if (disability_self_greater) {
    state.form[0].itForm.lessFour.maintenanceTwo = 125000;
  } else {
    state.form[0].itForm.lessFour.maintenanceTwo = 0;
  }
};
const updateDisabilityMasterValues = (state) => {
  const { disability_self_One, disability_self_Two } =
    state.form[0].master;
  if (disability_self_One) {
    state.form[0].itForm.lessFour.disabilityTwo = 75000;
  } else if (disability_self_Two) {
    state.form[0].itForm.lessFour.disabilityTwo = 125000;
  } else {
    state.form[0].itForm.lessFour.disabilityTwo = 0;
  }
};

// <------------------- Master ---------------------->

export const {
  updateActualRentPaid,
  updateActualAmount,
  updateExpenditure,
  updateFortyPercent,
  updateStandardDeduction,
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
  updateFourCmprf,
  updateFourDonn,
  updateFourOthers,
  updateTuitionFeeDetails,
  updateMutualFundDetails,
  updateAccuredDetails,
  updateSavingsDetails,
  updateLicDetails,
  updatePremiumDetails,
  updateFiveValue,
  updateFiveValueTwo,
  updateCheckBoxTaxPayable,
  updateFatherMother,
  updateSelfSpouseChild,
  updateCheckAgeSelf,
  updateCheckAgeFather,
  updatePrivateHealth,
  updateFourGovOne,
  updateFourGovTwo,
  updateTicketMetro,
  updateMasterName,
  updateMasterDesignation,
  updateMasterPAN,
  updateSchoolOfficeName,
  updateMasterTAN,
  updateMasterDOB,
  updateMasterProfessionalTax,
  updateMasterHouseRent,
  updateInterestOfHousingLoan,
  updateRepaymentOfHousingLoan,
  updateMasterTuitionFee,
  updateMasterTuition,
  updateBillDataCell,
  updateCheckPp,
  updateGrossSalaryIncome,
  updateLessThreeDedTwo,
  updateMasterDisability_selfOne,
  updateMasterDisability_selfTwo,
  updateMasterDisability_self_less,
  updateMasterDisability_self_greater,
} = financeSlice.actions;

export default financeSlice.reducer;
