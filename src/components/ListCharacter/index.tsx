import { motion } from 'framer-motion'

import * as S from './styles'

import { Character } from 'components/Character'
import { episodeVariants } from 'data'
import { I_Character } from 'interfaces/character'

interface I_CharacterProps {
  characters: I_Character[]
}
export const ListCharacter = ({ characters }: I_CharacterProps) => {
  return (
    <motion.div initial='hidden' animate='visible'>
      <S.ListWrapper variants={episodeVariants} custom={0.1}>
        {characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </S.ListWrapper>
    </motion.div>
  )
}
