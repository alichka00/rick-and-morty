import { useState } from 'react'

import * as S from './styles'

import { useAppSelector, useAppDispatch } from 'store'
import { selectedGender } from 'store/filter'

export const GenderPopup = () => {
  const [open, setOpen] = useState(false)
  const gender = useAppSelector((state) => state.filter.gender)
  const dispatch = useAppDispatch()

  const genderList = ['male', 'female', 'genderless', 'unknown']

  const selectGender = (gender: string) => {
    dispatch(selectedGender(gender))
    setOpen(false)
  }
  return (
    <S.Popup onClick={() => setOpen(!open)}>
      Gender: {gender}
      {open && (
        <S.List>
          {genderList.map((item, idx) => (
            <S.ListItem key={idx} isActive={gender === item} onClick={() => selectGender(item)}>
              {item}
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.Popup>
  )
}
