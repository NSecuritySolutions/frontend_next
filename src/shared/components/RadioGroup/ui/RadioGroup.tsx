import React, { useEffect, useRef, useState } from 'react'
import { Label, Radio, LabelText, Select, Option, SelectMenu, Arrow, SelectItem } from './styled'
import { observer } from 'mobx-react-lite'
import CalculatorBlockStore from '../../CalculatorCard/store'
import { createPortal } from 'react-dom'
import { IOption } from '@/widgets/Calculator/types'

interface RadioGroupProps {
  option: IOption
  store: CalculatorBlockStore
  onChange: (option: IOption, func: (...args: any[]) => void) => void
}

const RadioGroup: React.FC<RadioGroupProps> = observer(({ option, store, onChange }) => {
  const options = option
    .choices!.split(';')
    .map((part) => part.trim())
    .filter((part) => part !== '')
  const name = option.name
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

  useEffect(() => {
    if (isDropdown && value == 'unknown') {
      store.setVariable(name, options[0])
    }
  }, [isDropdown, value])

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
                {options.map((item) => (
                  <Option
                    className={item == value ? 'checked' : ''}
                    key={item}
                    onClick={() => onChange(option, () => store.setVariable(name, item))}
                  >
                    {item}
                  </Option>
                ))}
              </SelectMenu>,
              document.body,
            )}
        </Select>
      ) : (
        options.map((item) => (
          <Label key={item}>
            <Radio
              name={name}
              value={item}
              checked={value === item}
              onChange={(e) =>
                onChange(option, () =>
                  store.setVariable(name, e.target.value === value ? 'unknown' : e.target.value),
                )
              }
            />
            <LabelText>{item}</LabelText>
          </Label>
        ))
      )}
    </div>
  )
})

export default RadioGroup
