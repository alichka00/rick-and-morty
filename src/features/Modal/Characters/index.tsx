import * as S from './styles'

import { useEscapeKey } from 'hooks/useEscapeKey'
import { useAppSelector, useAppDispatch } from 'store'
import { closeModalCharacter } from 'store/Modal/character'

export const ModalCharacter = () => {
  const dispatch = useAppDispatch()
  const selectedCharacter = useAppSelector((state) => state.modalSliceCharacter.selectedCharacter)

  const handleCloseModal = () => {
    dispatch(closeModalCharacter())
  }

  useEscapeKey(handleCloseModal)

  if (!selectedCharacter) {
    return <></>
  }

  return (
    <div>
      <S.ModalOverlay onClick={handleCloseModal}>
        <S.ModalContent onClick={(event) => event.stopPropagation()}>
          <S.Image layoutId={`card-${selectedCharacter.id}`} src={selectedCharacter.image} />
          <S.DescriptionWrapper
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <S.CharacterName>{selectedCharacter.name}</S.CharacterName>
            <ul>
              <li>Status: {selectedCharacter.status}</li>
              <li>Species: {selectedCharacter.species}</li>
              {selectedCharacter.type.length ? <li>Type: {selectedCharacter.type}</li> : ''}
              <li>Gender: {selectedCharacter.gender}</li>
              <li>Origin: {selectedCharacter.origin.name}</li>
              <li>Location: {selectedCharacter.location.name}</li>
            </ul>
          </S.DescriptionWrapper>
        </S.ModalContent>
      </S.ModalOverlay>
    </div>
  )
}
