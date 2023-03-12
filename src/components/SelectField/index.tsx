import { ChangeEvent, useRef, useState } from 'react'

import * as S from './styles'

import { useClickOutside } from 'hooks/useClickOutside'

interface I_SelectFieldProps {
  value: string
  options: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: string
}

export const SelectField = ({ value, options, onChange, defaultValue }: I_SelectFieldProps) => {
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
      <S.Select value={value} onChange={onChange}>
        <S.Option hidden>{defaultValue}</S.Option>
        {options.map((item) => (
          <S.Option key={item} value={item}>
            {item}
          </S.Option>
        ))}
      </S.Select>
    </S.SelectWrapper>
  )
}
