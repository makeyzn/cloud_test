import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormValues } from "../pages/StepPages/Step2";
import { MainValues } from "../pages/MainPage/MainPage";
import { AboutValues } from "../pages/StepPages/Step3";
import store from "../store";
import { sendData } from "./SendDataAction";
import { InfoValues } from "../pages/StepPages/Step1/schemaStep1";

interface DataState extends InfoValues {
  phone: string;
  email: string;
  advntgs: { advntg: string }[];
  checkboxes: string[];
  radio: string;
  about: string;
  status: string;
  isOpen: boolean;
}

const initialState: DataState = {
  phone: "",
  email: "",
  nickname: "",
  name: "",
  surname: "",
  sex: 'man',
  advntgs: [{ advntg: "" }, { advntg: "" }, { advntg: "" }],
  checkboxes: [],
  radio: "",
  about: "",
  status: "",
  isOpen: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<FormValues>) => {
      state.advntgs = action.payload.advntgs;
      state.checkboxes = action.payload.checkboxes;
      state.radio = action.payload.radio;
    },
    addMain: (state, action: PayloadAction<MainValues>) => {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    addInfo: (state, action: PayloadAction<InfoValues>) => {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
    addAbout: (state, action: PayloadAction<AboutValues>) => {
      state.about = action.payload.about;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendData.fulfilled, (state) => {
      console.log("Отправлено!");
      state.status = "fulfilled";
      state.isOpen = true;
    });
    builder.addCase(sendData.rejected, (state) => {
      console.log("rejected!");
      state.status = "rejected";
      state.isOpen = true;
    });
  },
});

export const { addData, addMain, addInfo, addAbout, closeModal } =
  dataSlice.actions;

export const dataReducer = dataSlice.reducer;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
