import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_RootObject, I_Character } from '../interfaces/character'

interface I_Data {
  name: string
  status: string
  gender: string
  page: number
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<I_RootObject, I_Data>({
      query: ({ name, status, gender, page }: I_Data) => ({
        url: `/character/?name=${name}&status=${status}&gender=${gender}&page=${page}`,
        method: 'get',
      }),
    }),
    getCharactersId: builder.query<I_Character[], string[]>({
      query: (id) => ({
        url: `/character/${id}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharactersIdQuery } = charactersApi
