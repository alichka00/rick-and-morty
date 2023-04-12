import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ModalOverlay, ModalContent } from '../Character/styles'

import { List } from 'components/Episode/styles'

export const ListModal = styled(List)`
  cursor: auto;
  width: 100%;
  padding: 20px 20px 0;
  border-radius: 0;
`

export const ModalOverlayEpisode = styled(ModalOverlay)``
export const ModalContentEpisode = styled(ModalContent)`
  overflow-x: hidden;
  overflow-y: scroll;

  width: 100%;
  max-width: 400px;
  max-height: 450px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 100%;
    background-color: #1f1f1f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-button:vertical:start:increment,
  ::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
  }

  @media (max-width: 535px) {
    width: 85%;
  }
`

export const ModalCharacters = styled(motion.div)`
  padding: 0 20px;
  background-color: #1f1f1f;
`
