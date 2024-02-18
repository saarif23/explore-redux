import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./factures/tasks/taskSclice";
import userSlice from "./factures/user/userSlice";
const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
    userSlice: userSlice,
  },
});

export default store;
