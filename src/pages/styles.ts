import { motion } from 'framer-motion'
import styled from 'styled-components'

interface I_FilterWrapProp {
  gap?: number
}

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`
export const FilterWrap = styled(motion.div)<I_FilterWrapProp>`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({ gap = 30 }) => gap}px;
    align-items: stretch;
  }
`

export const WrapperSelects = styled(motion.div)`
  display: flex;
  gap: 25px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
export const CountCharacters = styled(motion.div)`
  font-size: 24px;
  color: #61a999;
  text-align: center;
`

export const Error = styled.div`
  font-size: 30px;
  text-align: center;
`

export const Option = styled.option`
  font-size: 17px;
  color: #9dd1c5;
`
