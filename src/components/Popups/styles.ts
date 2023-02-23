import styled, { css } from 'styled-components'

interface I_ListItemProps {
  isActive: boolean
}

export const Popup = styled.div`
  cursor: pointer;

  position: relative;

  display: inline-block;

  width: 200px;
  height: 40px;

  font-size: 16px;
  line-height: 40px;
  color: #fffc;
  text-align: center;

  background-color: #0f0d0df7;
  border: 1px solid #76b644;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  position: absolute;
  z-index: 1;

  width: 100%;
  padding: 10px 15px;

  text-align: left;
  list-style-type: none;

  background-color: #0f0d0df7;
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 #76b644;
`

export const ListItem = styled.li<I_ListItemProps>`
  cursor: pointer;

  :hover {
    color: #76b644;
    transition: 0.3s;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          color: #76b644;
        `
      : css`
          color: #fffc;
        `}
`
