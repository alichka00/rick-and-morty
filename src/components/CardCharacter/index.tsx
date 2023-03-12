import * as S from './styles'

import { I_Character } from 'interfaces/character'

export const CardCharacter = (character: I_Character) => {
  return (
    <S.Card>
      <S.Image src={character.image} alt={character.name} />
      <S.CardContent>
        <S.CharacterName>{character.name}</S.CharacterName>
        <p>
          {character.gender} | {character.status}
        </p>
      </S.CardContent>
    </S.Card>
  )
}
