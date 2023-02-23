import ReactPaginate from 'react-paginate'

import * as S from './styles'

interface I_PaginationProps {
  currentPage: number
  onCgangePage: (n: number) => void
  pages: number
}

export const Pagination = ({ currentPage, onCgangePage, pages }: I_PaginationProps) => (
  <div>
    <S.Pagination>
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(event) => onCgangePage(event.selected + 1)}
        pageCount={pages}
        marginPagesDisplayed={0}
        pageRangeDisplayed={2}
        forcePage={currentPage - 1}
        activeClassName={'active'}
      />
    </S.Pagination>
  </div>
)
