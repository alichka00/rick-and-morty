import { useCallback, useState } from 'react'

import * as S from './styles'

import { I_Character } from 'interfaces/character'
import { useAppDispatch } from 'store'
import { openModalCharacter } from 'store/Modal/character'

export const Character = (character: I_Character) => {
  const dispatch = useAppDispatch()
  const [, updateState] = useState({})
  const forceUpdate = useCallback(() => updateState({}), [])

  const handleOpenModal = () => {
    dispatch(openModalCharacter(character))
    forceUpdate()
  }

  return (
    <S.List>
      <S.Image
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleOpenModal}
        layoutId={`card-${character.id}`}
        src={character.image}
        alt={character.name}
      />
      <S.ListContent>
        <S.CharacterName>{character.name}</S.CharacterName>
        <p>
          {character.gender} | {character.status}
        </p>
      </S.ListContent>
    </S.List>
  )
}
