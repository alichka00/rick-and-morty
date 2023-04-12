import * as S from './styles'

import { CharactersModal } from 'features/Modal/Episode/extensions/CharactersModal'
import { useEscapeKey } from 'hooks/useEscapeKey'
import { useAppSelector, useAppDispatch } from 'store'
import { useGetCharactersIdQuery } from 'store/charactersApi'
import { closeModalEpisode } from 'store/Modal/episode'
import { formatDate } from 'utils/formatDate'

export const ModalEpisode = () => {
  const dispatch = useAppDispatch()
  const selectedEpisode = useAppSelector((state) => state.modalSliceEpisode.selectedEpisode)

  const idCharacter = selectedEpisode?.characters.map((item) => item.replace(/[^\d]/g, '')) || []

  const { data } = useGetCharactersIdQuery(idCharacter, { skip: !idCharacter?.length })

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
                <b>Created:</b> {formatDate(selectedEpisode.created)}
              </li>
            </ul>
          </S.ListModal>
          <S.ModalCharacters
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data ? <CharactersModal characters={data || []} /> : null}
          </S.ModalCharacters>
        </S.ModalContentEpisode>
      </S.ModalOverlayEpisode>
    </div>
  )
}
