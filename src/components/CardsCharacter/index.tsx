import { motion } from 'framer-motion'

import * as S from './styles'

import { CardCharacter } from 'components/CardCharacter'
import { I_Character } from 'interfaces/character'

interface I_CharacterProps {
  characters: I_Character[]
}
export const CardsCharacter = ({ characters }: I_CharacterProps) => {
  const animation = {
    hidden: {
      y: -45,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }
  return (
    <motion.div initial='hidden' whileInView='visible'>
      <S.Cards variants={animation}>
        {characters.map((character) => (
          <CardCharacter key={character.id} {...character} />
        ))}
      </S.Cards>
    </motion.div>
  )
}
