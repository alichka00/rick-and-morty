import styled, { css } from 'styled-components'

interface I_PageProps {
  isActive?: boolean
}

export const PaginationWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 45px 0;
`
export const Page = styled.div<I_PageProps>`
  cursor: pointer;

  display: inline-block;

  width: 40px;
  height: 40px;
  margin: 0 3px;

  line-height: 37px;
  color: #61a999;
  text-align: center;

  border: 1px solid #9dd1c5;
  border-radius: 10px;

  transition: 0.5s;

  :hover {
    color: green;
    background: #9dd1c5;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          transition: 0.5s;
          background-color: #9dd1c5;
          color: green;
        `
      : css`
          transition: 0.5s;
          background-color: transparent;
        `}
`
