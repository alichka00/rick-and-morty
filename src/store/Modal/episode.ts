import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Episode } from 'interfaces/episode'

interface I_InitialState {
  selectedEpisode: I_Episode | null
}

const initialState: I_InitialState = {
  selectedEpisode: null,
}

export const modalSliceEpisode = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalEpisode(state, action: PayloadAction<I_Episode>) {
      state.selectedEpisode = action.payload
    },
    closeModalEpisode(state) {
      state.selectedEpisode = null
    },
  },
})

export const { openModalEpisode, closeModalEpisode } = modalSliceEpisode.actions
