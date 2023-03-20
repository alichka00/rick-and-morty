import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 45px 0;
`
export const Page = styled(motion.div)`
  cursor: pointer;

  display: inline-block;

  width: 40px;
  height: 40px;
  margin: 0 3px;

  line-height: 37px;
  color: #61a999;
  text-align: center;

  border: 1px solid #9dd1c5;
  border-radius: 10px;
`
