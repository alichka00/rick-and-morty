import { ChangeEvent, ReactNode, useRef, useState } from 'react'

import { RiCloseFill } from 'react-icons/ri'

import * as S from './styles'

import { useClickOutside } from 'hooks/useClickOutside'

interface I_SelectFieldProps {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: string
  onClear: () => void
  children: ReactNode
}

export const SelectField = ({
  value,
  onChange,
  defaultValue,
  onClear,
  children,
}: I_SelectFieldProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const wrapperRef = useRef(null)

  const handleClose = () => {
    setIsOpened(false)
  }

  useClickOutside(wrapperRef, handleClose)

  return (
    <S.SelectWrapper
      ref={wrapperRef}
      onClick={() => setIsOpened((prev) => !prev)}
      isOpened={isOpened}
    >
      {value && (
        <S.SelectClose>
          <RiCloseFill size={14} onClick={onClear} style={{ cursor: 'pointer' }} />
        </S.SelectClose>
      )}
      <S.Select value={value} onChange={onChange}>
        <S.Option hidden>{defaultValue}</S.Option>
        {children}
      </S.Select>
    </S.SelectWrapper>
  )
}
