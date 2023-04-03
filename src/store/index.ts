import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { charactersApi } from './charactersApi'
import { episodesApi } from './episodesApi'

import { modalSliceCharacter } from './Modal/character'
import { modalSliceEpisode } from './Modal/episode'

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [episodesApi.reducerPath]: episodesApi.reducer,
    modalSliceCharacter: modalSliceCharacter.reducer,
    modalSliceEpisode: modalSliceEpisode.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware, episodesApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
