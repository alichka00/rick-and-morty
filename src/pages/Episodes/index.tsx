import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from '../styles'

import { Search, SelectField, ListEpisode, Episode, Pagination, Footer } from 'components'
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

  const episodeList = []
  for (let i = 0; i <= count - 1; i++) {
    episodeList.push({ episode: `Episode - ${i + 1}`, id: i + 1 })
  }

  let episode
  if (params.id) {
    episode = <Episode {...(dataId as I_Episode)} />
  } else {
    episode = <ListEpisode episodes={data?.results || []} />
  }

  const animation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <S.Container initial='hidden' whileInView='visible'>
      <>
        <motion.div variants={animation}>
          <S.FilterWrap gap={0}>
            <Search />
            <SelectField
              defaultValue='Episode'
              value={params.id}
              onChange={onChangeEpisodeSelect}
              onClear={onClearEpisodeSelect}
            >
              {episodeList.map((item) => (
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
          { ...episode }
        ) : null}
        <ModalEpisode />
        <Pagination page={data?.info.pages || 1} currentPage={params.page} siblingCount={1} />
      </>
      <Footer />
    </S.Container>
  )
}
