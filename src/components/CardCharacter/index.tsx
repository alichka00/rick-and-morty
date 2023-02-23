import * as S from './styles'

import { I_Character } from 'interfaces/character'

interface I_CharacterProps {
  characters: I_Character[]
}
export const CardCharacter = (characters: I_CharacterProps) => {
  return (
    <S.Cards>
      {characters.characters.map((character) => (
        <S.Card key={character.id}>
          <S.Image src={character.image} alt={character.name} />
          <S.CardContent>
            <h3>{character.name}</h3>
            <p>
              {character.gender} | {character.status}
            </p>
          </S.CardContent>
        </S.Card>
      ))}
    </S.Cards>
  )
}
