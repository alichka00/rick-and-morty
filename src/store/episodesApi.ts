import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_Episode, I_RootObject } from '../interfaces/episode'

interface I_Data {
  name: string
  page: number
}

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getEpisodes: builder.query<I_RootObject, I_Data>({
      query: ({ name, page }: I_Data) => ({
        url: `/episode/?&name=${name}&page=${page}`,
        method: 'get',
      }),
    }),
    getEpisodesId: builder.query<I_Episode, string>({
      query: (id) => ({
        url: `/episode/${id}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetEpisodesQuery, useGetEpisodesIdQuery } = episodesApi
