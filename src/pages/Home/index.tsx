import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

import { CardsCharacter } from 'components/CardsCharacter'
import { Footer } from 'components/Footer'
import { Pagination } from 'components/Pagination'
import { Search } from 'components/Search'
import { SelectField } from 'components/SelectField'
import useDebounce from 'hooks/useDebounce'
import { useGetCharactersQuery } from 'store/charactersApi'
import { searchParamsToObject } from 'utils/searchParams'

export const Home = () => {
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

  const statusList = ['Alive', 'Dead', 'Unknown']
  const genderList = ['Male', 'Female', 'Genderless', 'Unknown']

  return (
    <S.Container>
      <Search />
      <S.FilterWrap>
        <S.WrapperSelects>
          <SelectField
            defaultValue='Gender'
            options={genderList}
            value={params.gender}
            onChange={onChangeGenderSelect}
          />
          <SelectField
            defaultValue='Status'
            options={statusList}
            value={params.status}
            onChange={onChangeStatusSelect}
          />
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
      <Pagination page={data?.info.pages || 1} currentPage={params.page} siblingCount={1} />
      <Footer />
    </S.Container>
  )
}
