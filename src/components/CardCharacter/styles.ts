import styled from 'styled-components'

interface I_ImageProps {
  src: string
  alt: string
}

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
`
export const Card = styled.div`
  overflow: hidden;
  border: 1px solid #33957f;
  border-radius: 5px;
`
export const Image = styled.img<I_ImageProps>`
  width: 100%;
`
export const CardContent = styled.div`
  padding: 10px;
  text-align: center;
`
