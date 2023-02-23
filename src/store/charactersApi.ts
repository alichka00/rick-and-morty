import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_RootObject } from '../interfaces/character'

interface I_Data {
  name: string
  status: string
  gender: string
  page: string
}

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<I_RootObject, unknown>({
      query: ({ name, status, gender, page }: I_Data) => ({
        url: `/character/?name=${name}&status=${status}&gender=${gender}&page=${page}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetCharactersQuery } = charactersApi
