import React, { useEffect, useRef, useState } from 'react'
import { Label, Radio, LabelText, Select, Option, SelectMenu, Arrow, SelectItem } from './styled'
import { observer } from 'mobx-react-lite'
import CalculatorBlockStore from '../../CalculatorCard/store'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface RadioGroupProps {
  options: string[]
  name: string
  store: CalculatorBlockStore
}

const RadioGroup: React.FC<RadioGroupProps> = observer(({ options, name, store }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdown, setIsDropdown] = useState(false)
  const value = store.getVariable(name)
  const radiogroup = useRef<HTMLDivElement>(null)
  const select = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (radiogroup.current) {
        setIsDropdown(radiogroup.current.offsetWidth > 180)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (select.current && !select.current.contains(event.target as Node)) {
        setIsOpen(!isOpen)
      }
    }
    // ставим слушатели, чтобы закрыть выбор при клике вне его
    if (isOpen) {
      window.addEventListener('click', handleClickOutside)
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsOpen(!isOpen)
        }
      })
      window.addEventListener('blur', () => {
        setIsOpen(!isOpen)
      })
    } else {
      window.removeEventListener('click', handleClickOutside)
    }

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  if (isDropdown && value == 'unknown') {
    store.setVariable(name, options[0])
  }

  return (
    <div
      ref={radiogroup}
      role="radiogroup"
      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
    >
      {isDropdown ? (
        <Select
          className={isOpen ? 'focus' : ''}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={select}
        >
          <SelectItem>{value}</SelectItem>
          <Arrow src="icons/calculator/select-arrow.svg" alt="menu" $open={isOpen} />
          {isOpen &&
            createPortal(
              <SelectMenu
                $top={
                  select.current!.getBoundingClientRect().top +
                  window.scrollY +
                  select.current!.offsetHeight +
                  3
                }
                $left={select.current!.getBoundingClientRect().left + window.scrollX}
              >
                {options.map((option) => (
                  <Option
                    className={option == value ? 'checked' : ''}
                    key={option}
                    onClick={() => store.setVariable(name, option)}
                  >
                    {option}
                  </Option>
                ))}
              </SelectMenu>,
              document.body,
            )}
        </Select>
      ) : (
        options.map((option) => (
          <Label key={option}>
            <Radio
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) =>
                store.setVariable(name, e.target.value === value ? 'unknown' : e.target.value)
              }
            />
            <LabelText>{option}</LabelText>
          </Label>
        ))
      )}
    </div>
  )
})

export default RadioGroup
