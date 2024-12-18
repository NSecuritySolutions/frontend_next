import React, { useEffect, useRef, useState } from 'react'
import {
  Label,
  Radio,
  LabelText,
  Select,
  Option,
  SelectMenu,
  Arrow,
  SelectItem,
  RadioWrapper,
  RadioContainer,
} from './styled'
import { observer } from 'mobx-react-lite'
import CalculatorBlockStore from '@/app/store/calculatorBlockStore'
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
      if (window.innerWidth < 620) {
        setIsDropdown(true)
      } else {
        setIsDropdown(false)
        setTimeout(() => {
          if (radiogroup.current) setIsDropdown(radiogroup.current.offsetWidth > 168)
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [radiogroup])

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
  }, [isOpen, name, options, store])

  useEffect(() => {
    if (isDropdown && value == 'unknown') {
      store.setVariable(name, options[0])
    }
  }, [isDropdown, value, name, options, store])

  return (
    <RadioContainer ref={radiogroup}>
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
                $left={select.current!.getBoundingClientRect().left}
                $width={select.current!.clientWidth}
              >
                {options.map((item) => (
                  <Option
                    className={
                      item == value
                        ? 'checked'
                        : store.isOptionValueDisabled(option.name, item)
                          ? 'disabled'
                          : ''
                    }
                    key={item}
                    onClick={() => {
                      if (!store.isOptionValueDisabled(option.name, item)) {
                        onChange(option, () => store.setVariable(name, item))
                      }
                    }}
                  >
                    {item}
                  </Option>
                ))}
              </SelectMenu>,
              document.body,
            )}
        </Select>
      ) : (
        <RadioWrapper>
          {options.map((item) => (
            <Label key={item}>
              <Radio
                name={name}
                value={item}
                checked={value === item}
                disabled={store.isOptionValueDisabled(option.name, item)}
                onChange={(e) =>
                  onChange(option, () =>
                    // store.setVariable(name, e.target.value === value ? 'unknown' : e.target.value),
                    store.setVariable(name, e.target.value),
                  )
                }
              />
              <LabelText>{item}</LabelText>
            </Label>
          ))}
        </RadioWrapper>
      )}
    </RadioContainer>
  )
})

export default RadioGroup
