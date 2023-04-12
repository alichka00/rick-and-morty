import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from '../styles'

import { Search, SelectField, ListEpisode, Episode, Pagination, Footer } from 'components'
import { episodeVariants, episodeList } from 'data'
import { ModalEpisode } from 'features/Modal/Episode'
import useDebounce from 'hooks/useDebounce'
import { I_Episode } from 'interfaces/episode'
import { useGetEpisodesQuery, useGetEpisodesIdQuery } from 'store/episodesApi'
import { searchParamsToObject } from 'utils/searchParams'

export const Episodes = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = searchParamsToObject(searchParams)

  const params = {
    id: searchParams.get('id') || '',
    page: Number(searchParams.get('page')) || 1,
    search: searchParams.get('search') || '',
  }

  const debouncedSearch = useDebounce(params.search, 300)
  const apiData = {
    name: debouncedSearch,
    page: params.page,
  }

  const { data, isError, isLoading } = useGetEpisodesQuery(apiData)
  const { data: dataId } = useGetEpisodesIdQuery(params.id)

  const onChangeEpisodeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      ...currentParams,
      id: e.target.value,
    })
  }

  const onClearEpisodeSelect = () => {
    setSearchParams({
      ...currentParams,
      id: '',
    })
  }

  const count = data?.info.count || 0

  const episodes = episodeList(count)

  let episode
  if (params.id) {
    episode = <Episode {...(dataId as I_Episode)} />
  } else {
    episode = <ListEpisode episodes={data?.results || []} />
  }

  return (
    <S.Container initial='hidden' animate='visible'>
      <>
        <motion.div variants={episodeVariants}>
          <S.FilterWrap gap={0}>
            <Search />
            <SelectField
              defaultValue='Episode'
              value={params.id}
              onChange={onChangeEpisodeSelect}
              onClear={onClearEpisodeSelect}
            >
              {episodes.map((item) => (
                <S.Option key={item.id} value={item.id}>
                  {item.episode}
                </S.Option>
              ))}
            </SelectField>
          </S.FilterWrap>
        </motion.div>
        {isError ? (
          <S.Error>Sorry, but nothing was found</S.Error>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : data || dataId ? (
          episode
        ) : null}
        <ModalEpisode />
        <Pagination page={data?.info.pages || 1} currentPage={params.page} siblingCount={1} />
      </>
      <Footer />
    </S.Container>
  )
}
