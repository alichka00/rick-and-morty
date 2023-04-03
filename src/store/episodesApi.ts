import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_Episode, I_RootObject } from '../interfaces/episode'

interface I_Data {
  name: string
  page: string
  episode: string
}

interface I_Id {
  id: string
}

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getEpisodes: builder.query<I_RootObject, unknown>({
      query: ({ name, page }: I_Data) => ({
        url: `/episode/?&name=${name}&page=${page}`,
        method: 'get',
      }),
    }),
    getEpisodesId: builder.query<I_Episode, unknown>({
      query: (id: I_Id) => ({
        url: `/episode/${id}`,
        method: 'get',
      }),
    }),
  }),
})

export const { useGetEpisodesQuery, useGetEpisodesIdQuery } = episodesApi
