import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ListWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  align-items: center;
  justify-items: center;
`
