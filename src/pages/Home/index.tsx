import * as S from './styles'

import { CardCharacter } from 'components/CardCharacter'
import { Pagination } from 'components/Pagination'
import { GenderPopup } from 'components/Popups/GenderPopup'
import { StatusPopup } from 'components/Popups/StatusPopup'
import { Search } from 'components/Search'
import useDebounce from 'hooks/debounce'
import { useAppDispatch, useAppSelector } from 'store'
import { useGetCharactersQuery } from 'store/charactersApi'
import { changePage } from 'store/filter'

export const Home = () => {
  const { search, status, gender, page } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const debouncedSearch = useDebounce(search, 300)
  const apiData = {
    name: debouncedSearch,
    status: status,
    gender: gender,
    page: page,
  }
  const { data, isError, isLoading } = useGetCharactersQuery(apiData)

  const onChangePage = (page: number) => {
    dispatch(changePage(page))
  }

  return (
    <S.Container>
      <Search />
      <S.FilterWrap>
        <S.WrapperPopups>
          <StatusPopup />
          <GenderPopup />
        </S.WrapperPopups>
        <S.CountCharacters>{isError ? '0' : <>{data?.info.count}</>} Characters</S.CountCharacters>
      </S.FilterWrap>

      {isError ? (
        <S.Error>Sorry, but nothing was found</S.Error>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <CardCharacter characters={data?.results || []} />
      ) : null}
      <Pagination currentPage={page} onCgangePage={onChangePage} pages={data?.info.pages || 1} />
    </S.Container>
  )
}
