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
    if (paginationRange) {
      if (page < paginationRange[paginationRange.length - 1]) {
        setSearchParams({ ...currentParams, page: String(+page + 1) })
      }
    }
  }

  const variants = {
    initial: {
      color: '#61a999',
      background: '#0f0d0df7',
    },
    whileHover: {
      color: '#008000',
      background: '#9dd1c5',
    },
  }

  return (
    <S.PaginationWrapper>
      <S.Page
        variants={variants}
        initial={'initial'}
        whileHover={'whileHover'}
        transition={{
          duration: 0.5,
        }}
        onClick={() => onChangePrevPage(currentPage)}
      >
        {'<'}
      </S.Page>
      {paginationRange?.map((item) => (
        <S.Page
          variants={variants}
          initial={'initial'}
          whileHover={'whileHover'}
          transition={{
            duration: 0.5,
          }}
          animate={{
            color: currentPage === item ? '#008000' : '#61a999',
            background: currentPage === item ? '#9dd1c5' : '#0f0d0df7',
            transition: {
              duration: 0.5,
            },
          }}
          key={item}
          onClick={() => onChangePage(item)}
        >
          {item}
        </S.Page>
      ))}
      <S.Page
        variants={variants}
        initial={'initial'}
        whileHover={'whileHover'}
        transition={{
          duration: 0.5,
        }}
        onClick={() => onChangeNextPage(currentPage)}
      >
        {'>'}
      </S.Page>
    </S.PaginationWrapper>
  )
}
