import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`
export const FilterWrap = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const WrapperPopups = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
export const CountCharacters = styled.div`
  font-size: 24px;
  color: #76b644;
  text-align: center;
`

export const Error = styled.div`
  font-size: 30px;
  text-align: center;
`
