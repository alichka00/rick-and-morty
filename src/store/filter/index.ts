import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

interface I_FilterState {
  search: string
  status: string
  gender: string
  page: number
}

const initialState: I_FilterState = {
  search: '',
  status: '',
  gender: '',
  page: 1,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectedStatus(state, action: PayloadAction<string>) {
      state.status = action.payload
    },
    selectedGender(state, action: PayloadAction<string>) {
      state.gender = action.payload
    },
    inputSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
  },
})

export const { inputSearch, selectedStatus, selectedGender, changePage } = filterSlice.actions

export default filterSlice.reducer
