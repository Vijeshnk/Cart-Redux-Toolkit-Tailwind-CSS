import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  intialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;