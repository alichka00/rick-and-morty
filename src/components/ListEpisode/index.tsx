import * as S from './styles'

import { Episode } from 'components/Episode'
import { episodeVariants } from 'data'
import { I_Episode } from 'interfaces/episode'

interface I_EpisodeProps {
  episodes: I_Episode[]
}

export const ListEpisode = ({ episodes }: I_EpisodeProps) => {
  return (
    <S.ListWrapper initial='hidden' animate='visible' variants={episodeVariants} custom={0.1}>
      {episodes.map((episodeItem) => (
        <Episode key={episodeItem.id} {...episodeItem} />
      ))}
    </S.ListWrapper>
  )
}
