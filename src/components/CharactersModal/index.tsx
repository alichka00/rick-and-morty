import * as S from './styles'

import { CharacterModal } from '../CharacterModal'

import { I_Character } from 'interfaces/character'

interface I_CharacterProps {
  characters: I_Character[]
}

export const CharactersModal = ({ characters }: I_CharacterProps) => {
  return (
    <S.WrapperCharacters>
      {characters.map((character) => (
        <CharacterModal key={character.id} {...character} />
      ))}
    </S.WrapperCharacters>
  )
}
