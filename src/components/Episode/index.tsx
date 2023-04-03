import { useCallback, useState } from 'react'

import * as S from './styles'

import { I_Episode } from 'interfaces/episode'
import { useAppDispatch } from 'store'

import { openModalEpisode } from 'store/Modal/episode'

export const Episode = (episodeItem: I_Episode) => {
  const dispatch = useAppDispatch()
  const [, updateState] = useState({})
  const forceUpdate = useCallback(() => updateState({}), [])

  const handleOpenModal = () => {
    dispatch(openModalEpisode(episodeItem))
    forceUpdate()
  }
  return (
    <S.List
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
      layoutId={`card-${episodeItem.id}`}
      key={episodeItem.id}
    >
      <li>
        <b>Episode Name:</b> {episodeItem.name}
      </li>
      <li>
        <b>Episode:</b> {episodeItem.episode}
      </li>
      <li>
        <b>Air Date: </b> {episodeItem.air_date}
      </li>
      <li>
        <b>Created:</b> {episodeItem.created}
      </li>
    </S.List>
  )
}
