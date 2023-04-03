import styled from 'styled-components'

interface I_ImageProps {
  src: string
  alt: string
}

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image = styled.img<I_ImageProps>`
  user-select: none;

  width: 100%;
  max-width: 150px;
  max-height: 150px;

  border-radius: 5px;

  @media (max-width: 500px) {
    max-width: 170px;
    max-height: 170px;
  }
`
export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  @media (max-width: 500px) {
    text-align: center;
  }
`
