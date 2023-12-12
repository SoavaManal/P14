import { createSlice } from "@reduxjs/toolkit";

const employeeReducer = createSlice({
  name: "employees",
  initialState: {
    employee: [],
  },
  reducers: {
    setEmployee(state, action) {
      state.employee.push(action.payload);
    },
  },
});

export const { setEmployee } = employeeReducer.actions;
export default employeeReducer.reducer;
