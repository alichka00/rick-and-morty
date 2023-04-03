import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Cards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
`
