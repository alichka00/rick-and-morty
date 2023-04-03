import { Link } from 'react-router-dom'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.LinkItem>
          <Link to='/'>Characters</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to='/episodes'>Episodes</Link>
        </S.LinkItem>
      </S.Nav>
    </S.Header>
  )
}
