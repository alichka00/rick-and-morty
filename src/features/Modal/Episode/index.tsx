import * as S from './styles'

import { CharactersModal } from 'components/CharactersModal'
import { useEscapeKey } from 'hooks/useEscapeKey'
import { useAppSelector, useAppDispatch } from 'store'
import { useGetCharactersIdQuery } from 'store/charactersApi'
import { closeModalEpisode } from 'store/Modal/episode'

export const ModalEpisode = () => {
  const dispatch = useAppDispatch()
  const selectedEpisode = useAppSelector((state) => state.modalSliceEpisode.selectedEpisode)

  const idCharacter = selectedEpisode?.characters.map((item) => item.replace(/[^\d]/g, ''))

  const { data } = useGetCharactersIdQuery(idCharacter)

  const handleCloseModal = () => {
    dispatch(closeModalEpisode())
  }

  useEscapeKey(handleCloseModal)

  if (!selectedEpisode) {
    return <></>
  }

  return (
    <div>
      <S.ModalOverlayEpisode onClick={handleCloseModal}>
        <S.ModalContentEpisode onClick={(event) => event.stopPropagation()}>
          <S.ListModal layoutId={`card-${selectedEpisode.id}`}>
            <ul>
              <li>
                <b>Episode Name:</b> {selectedEpisode.name}
              </li>
              <li>
                <b>Episode:</b> {selectedEpisode.episode}
              </li>
              <li>
                <b>Air Data:</b> {selectedEpisode.air_date}
              </li>
              <li>
                <b>Created:</b> {selectedEpisode.created}
              </li>
            </ul>
            {data ? <CharactersModal characters={data || []} /> : null}
          </S.ListModal>
        </S.ModalContentEpisode>
      </S.ModalOverlayEpisode>
    </div>
  )
}
