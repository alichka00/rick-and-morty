import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

import { usePagination } from 'hooks/usePagination'
import { searchParamsToObject } from 'utils/searchParams'

interface I_PaginationProps {
  page: number
  currentPage: number
  siblingCount: number
}

export const Pagination = ({ page, currentPage, siblingCount }: I_PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    page,
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const currentParams = searchParamsToObject(searchParams)

  const onChangePage = (page: number | string) => {
    setSearchParams({ ...currentParams, page: String(page) })
  }

  const onChangePrevPage = (page: number | string) => {
    if (page > 1) {
      setSearchParams({ ...currentParams, page: String(+page - 1) })
    }
  }
  const onChangeNextPage = (page: number | string) => {
    if (page < paginationRange![paginationRange!.length - 1]) {
      setSearchParams({ ...currentParams, page: String(+page + 1) })
    }
  }
  return (
    <S.PaginationWrapper>
      <S.Page onClick={() => onChangePrevPage(currentPage)}>{'<'}</S.Page>
      {paginationRange?.map((item) => (
        <S.Page key={item} isActive={currentPage === item} onClick={() => onChangePage(item)}>
          {item}
        </S.Page>
      ))}
      <S.Page onClick={() => onChangeNextPage(currentPage)}>{'>'}</S.Page>
    </S.PaginationWrapper>
  )
}
