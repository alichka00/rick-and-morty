import * as S from './styles'

import { I_Character } from 'interfaces/character'
import { useAppDispatch, useAppSelector } from 'store'
import { openModal } from 'store/Modal'

export const CardCharacter = (character: I_Character) => {
  const dispatch = useAppDispatch()
  const { selectedCharacter } = useAppSelector((state) => state.modalSlice)

  const handleOpenModal = () => {
    dispatch(openModal(character))
  }

  return (
    <S.Card
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
    >
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
