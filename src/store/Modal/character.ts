import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Character } from 'interfaces/character'

interface I_InitialState {
  selectedCharacter: I_Character | null
}

const initialState: I_InitialState = {
  selectedCharacter: null,
}

export const modalSliceCharacter = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalCharacter(state, action: PayloadAction<I_Character>) {
      state.selectedCharacter = action.payload
    },
    closeModalCharacter(state) {
      state.selectedCharacter = null
    },
  },
})

export const { openModalCharacter, closeModalCharacter } = modalSliceCharacter.actions
