import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from '../styles'

import { CardsCharacter, Search, SelectField, Pagination, Footer } from 'components'
import { ModalCharacter } from 'features/Modal/Characters'
import useDebounce from 'hooks/useDebounce'
import { useGetCharactersQuery } from 'store/charactersApi'
import { searchParamsToObject } from 'utils/searchParams'

export const Characters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = searchParamsToObject(searchParams)
  const params = {
    page: Number(searchParams.get('page')) || 1,
    search: searchParams.get('search') || '',
    status: searchParams.get('status') || '',
    gender: searchParams.get('gender') || '',
  }

  const debouncedSearch = useDebounce(params.search, 300)
  const apiData = {
    name: debouncedSearch,
    status: params.status,
    gender: params.gender,
    page: params.page,
  }
  const { data, isError, isLoading } = useGetCharactersQuery(apiData)

  const onChangeStatusSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      ...currentParams,
      status: e.target.value,
    })
  }

  const onChangeGenderSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      ...currentParams,
      gender: e.target.value,
    })
  }

  const onClearGenderSelect = () => {
    setSearchParams({
      ...currentParams,
      gender: '',
    })
  }

  const onClearStatusSelect = () => {
    setSearchParams({
      ...currentParams,
      status: '',
    })
  }

  const statusList = ['Alive', 'Dead', 'Unknown']
  const genderList = ['Male', 'Female', 'Genderless', 'Unknown']

  const animation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom,
      },
    }),
  }

  return (
    <S.Container initial='hidden' whileInView='visible'>
      <motion.div variants={animation}>
        <Search />
      </motion.div>
      <S.FilterWrap variants={animation} custom={0.15}>
        <S.WrapperSelects>
          <SelectField
            defaultValue='Gender'
            value={params.gender}
            onChange={onChangeGenderSelect}
            onClear={onClearGenderSelect}
          >
            {genderList.map((item) => (
              <S.Option key={item}>{item}</S.Option>
            ))}
          </SelectField>
          <SelectField
            defaultValue='Status'
            value={params.status}
            onChange={onChangeStatusSelect}
            onClear={onClearStatusSelect}
          >
            {statusList.map((item) => (
              <S.Option key={item}>{item}</S.Option>
            ))}
          </SelectField>
        </S.WrapperSelects>
        <S.CountCharacters>{isError ? '0' : <>{data?.info.count}</>} Characters</S.CountCharacters>
      </S.FilterWrap>
      {isError ? (
        <S.Error>Sorry, but nothing was found</S.Error>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <CardsCharacter characters={data?.results || []} />
      ) : null}
      <ModalCharacter />
      <Pagination page={data?.info.pages || 1} currentPage={params.page} siblingCount={1} />
      <Footer />
    </S.Container>
  )
}
