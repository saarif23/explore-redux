import { configureStore } from "@reduxjs/toolkit";
import taskSclice from "./factures/tasks/taskSclice";
const store = configureStore({
  reducer: {
    tasks: taskSclice,
  },
});

export default store;
