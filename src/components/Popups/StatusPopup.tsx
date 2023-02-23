import { useState } from 'react'

import * as S from './styles'

import { useAppSelector, useAppDispatch } from 'store'
import { selectedStatus } from 'store/filter'

export const StatusPopup = () => {
  const [open, setOpen] = useState(false)
  const status = useAppSelector((state) => state.filter.status)
  const dispatch = useAppDispatch()

  const statusList = ['alive', 'dead', 'unknown']

  const selectStatus = (status: string) => {
    dispatch(selectedStatus(status))
    setOpen(false)
  }
  return (
    <S.Popup onClick={() => setOpen(!open)}>
      Status: {status}
      {open && (
        <S.List>
          {statusList.map((item, idx) => (
            <S.ListItem key={idx} isActive={status === item} onClick={() => selectStatus(item)}>
              {item}
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.Popup>
  )
}
