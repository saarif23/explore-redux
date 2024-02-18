import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Arif Hossain",
  email: "arif@gmail.com",
  userTasks: [],
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
