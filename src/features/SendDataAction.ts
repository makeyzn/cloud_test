import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const sendData = createAsyncThunk<unknown, void, { state: RootState }>(
  "data/sendData",
  async function (_, { rejectWithValue, getState }) {
    try {
      const response = await fetch(
        "https://api.sbercloud.ru/content/v1/bootcamp1/frontend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: getState().data.phone,
            email: getState().data.email,
            nickname: getState().data.nickname,
            name: getState().data.name,
            surname: getState().data.surname,
            sex: getState().data.sex,
            advntgs: getState().data.advntgs.map((e) => e.advntg),
            checkboxes: getState().data.checkboxes,
            radio: Number(getState().data.radio),
            about: getState().data.about,
          }),
        }
      );
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
