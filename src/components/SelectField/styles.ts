import styled from 'styled-components'

interface I_IsOpened {
  isOpened: boolean
}

export const SelectWrapper = styled.div<I_IsOpened>`
  width: 200px;
  height: 40px;
  line-height: 40px;

  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const Select = styled.select`
  cursor: pointer;
  user-select: none;

  width: 100%;
  padding: 8px;

  font-family: Raleway, sans-serif;
  font-size: 16px;
  color: #fffc;

  background-color: #0f0d0df7;
  border: 1px solid #61a999;
  border-radius: 10px;
  outline: none;
`

export const Option = styled.option`
  font-size: 17px;
  color: #9dd1c5;
`
