import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Character } from 'interfaces/character'

interface I_InitialState {
  selectedCharacter: I_Character | null
}

const initialState: I_InitialState = {
  selectedCharacter: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<I_Character>) {
      state.selectedCharacter = action.payload
    },
    closeModal(state) {
      state.selectedCharacter = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
