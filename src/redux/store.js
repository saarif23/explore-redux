import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./factures/tasks/taskSclice";
const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
  },
});

export default store;
