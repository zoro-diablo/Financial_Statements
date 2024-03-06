import { createSlice } from '@reduxjs/toolkit';
import { form } from '../../utils/form';

const initialState = {
  form: form,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    updateActualRentPaid: (state, action) => {
      state.form[0].itForm.less.actualRentPaid = action.payload;
      updateHRA(state)
    },
    updateActualAmount: (state, action) => {
      state.form[0].itForm.less.actualAmount = action.payload;
      updateHRA(state)
    },
    updateExpenditure: (state, action) => {
      state.form[0].itForm.less.expenditure = action.payload;
      updateHRA(state)
    },
    updateFortyPercent: (state, action) => {
      state.form[0].itForm.less.fortyPercent = action.payload;
      updateHRA(state)
    },
    
  },
});

const updateHRA = (state) => {
  const { actualRentPaid, actualAmount, expenditure, fortyPercent } = state.form[0].itForm.less;
  const hra = Math.min(actualRentPaid, actualAmount, expenditure, fortyPercent);
  state.form[0].itForm.less.hra = hra;
};

export const {
  updateActualRentPaid,
  updateActualAmount,
  updateExpenditure,
  updateFortyPercent,
  
} = financeSlice.actions;

export default financeSlice.reducer;
