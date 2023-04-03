import { motion } from 'framer-motion'
import styled from 'styled-components'

interface I_ImageProps {
  src: string
  alt: string
}

export const Card = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  min-width: 260px;
  min-height: 360px;

  border: 1px solid #33957f;
  border-radius: 5px;
`
export const Image = styled(motion.img)<I_ImageProps>`
  user-select: none;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const CardContent = styled.div`
  margin: auto;
  padding: 10px;
  text-align: center;
`
export const CharacterName = styled.h3`
  font-size: 18px;
`
