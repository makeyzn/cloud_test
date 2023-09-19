import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./features/SendDataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export default store