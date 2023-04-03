import * as S from './styles'

import { Episode } from 'components/Episode'
import { I_Episode } from 'interfaces/episode'

interface I_EpisodeProps {
  episodes: I_Episode[]
}

export const ListEpisode = ({ episodes }: I_EpisodeProps) => {
  const animation = {
    hidden: {
      y: -45,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }
  return (
    <S.ListWrapper initial='hidden' whileInView='visible' variants={animation}>
      {episodes.map((episodeItem) => (
        <Episode key={episodeItem.id} {...episodeItem} />
      ))}
    </S.ListWrapper>
  )
}
