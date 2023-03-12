import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  margin: 30px 0;

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const Input = styled.input`
  user-select: none;

  width: 420px;
  padding: 10px 20px;

  font-family: Raleway, sans-serif;
  font-size: 17px;
  color: #fffc;

  background: transparent;
  border: 1px solid #61a999;
  border-radius: 15px;
  outline: none;

  &:focus {
    box-shadow: 1px 1px 2px 0 #9dd1c5;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`
