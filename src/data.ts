import { Variants } from 'framer-motion'

export const episodeVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom,
    },
  }),
}

// Status
export const statusList = ['Alive', 'Dead', 'Unknown']

// Gender
export const genderList = ['Male', 'Female', 'Genderless', 'Unknown']

// Episode Numbers
export const episodeList = (count: number) => {
  const episodes = []
  for (let i = 0; i <= count - 1; i++) {
    episodes.push({ episode: `Episode - ${i + 1}`, id: i + 1 })
  }
  return episodes
}
