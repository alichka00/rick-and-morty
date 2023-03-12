import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

import { searchParamsToObject } from 'utils/searchParams'

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = searchParamsToObject(searchParams)
  const searchValue = searchParams.get('search') || ''
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...currentParams,
      search: e.target.value,
    })
  }
  return (
    <S.Container>
      <S.Input value={searchValue} onChange={changeHandler} placeholder='Search...' />
    </S.Container>
  )
}
