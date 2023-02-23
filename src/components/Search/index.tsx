import { ChangeEvent } from 'react'

import * as S from './styles'

import { useAppDispatch, useAppSelector } from 'store'
import { inputSearch } from 'store/filter'

export const Search = () => {
  const search = useAppSelector((state) => state.filter.search)
  const dispatch = useAppDispatch()
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSearch(e.target.value))
  }
  return (
    <S.Container>
      <S.Input value={search} onChange={changeHandler} placeholder='Search...' />
    </S.Container>
  )
}
