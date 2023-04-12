import * as S from './styles'

import { I_Character } from 'interfaces/character'

export const CharacterModal = (character: I_Character) => {
  return (
    <S.Wrapper>
      <S.Image src={character.image} alt={character.name} />
      <S.CharacterInfo>
        <ul>
          <li>
            <b>Name:</b> {character.name}
          </li>
          <li>
            <b>Gender:</b> {character.gender}
          </li>
          <li>
            <b>Status:</b> {character.status}
          </li>
        </ul>
      </S.CharacterInfo>
    </S.Wrapper>
  )
}
