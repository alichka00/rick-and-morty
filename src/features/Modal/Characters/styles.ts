import { motion } from 'framer-motion'
import styled from 'styled-components'

interface I_ImageProps {
  src: string
}

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgba(0 0 0 / 65%);
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
export const DescriptionWrapper = styled(motion.div)`
  margin-top: -4px;
  padding: 15px;

  color: #fffc;

  background-color: #1e1a1a;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const Image = styled(motion.img)<I_ImageProps>`
  user-select: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
export const CharacterName = styled.h3`
  text-align: center;
`
