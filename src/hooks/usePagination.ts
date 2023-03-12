interface I_PaginationProps {
  page: number
  siblingCount: number
  currentPage: number
}
export const DOTS = '…'

export const usePagination = ({ page, siblingCount, currentPage }: I_PaginationProps) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const totalPageNumbers = siblingCount + 7

  if (totalPageNumbers >= page) {
    return range(1, page)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, page)

  const showDots = leftSiblingIndex > 3
  const showRightItemCount = rightSiblingIndex > page - 2

  const firstPageIndex = 1

  if (!showDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = range(1, leftItemCount)

    return [...leftRange]
  }

  if (showDots && showRightItemCount) {
    const rightItemCount = 1 + 2 * siblingCount
    const rightRange = range(page - rightItemCount + 1, page)
    return [firstPageIndex, DOTS, ...rightRange]
  }

  if (showDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange]
  }

  if (showDots) {
    const middleRange = range(rightSiblingIndex, leftSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange]
  }
}
