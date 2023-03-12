import * as S from './styles'

import { CardCharacter } from 'components/CardCharacter'
import { I_Character } from 'interfaces/character'

interface I_CharacterProps {
  characters: I_Character[]
}
export const CardsCharacter = (characters: I_CharacterProps) => {
  return (
    <S.Cards>
      {characters.characters.map((character) => (
        <CardCharacter key={character.id} {...character} />
      ))}
    </S.Cards>
  )
}
