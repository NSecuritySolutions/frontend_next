import { FC, useEffect, useRef, useState } from 'react'
import {
  Arrow,
  Select,
  SelectItem,
  SelectMenu,
  Option,
  SelectContainer,
  DropdownContainer,
} from './styled'
import { createPortal } from 'react-dom'
import { IProductCategory } from '@/widgets/Calculator/types'

interface SelectCategoryProps {
  options: IProductCategory[]
  selectedCategory: IProductCategory
  selectCategory: (category: IProductCategory) => void
}

const SelectCategory: FC<SelectCategoryProps> = ({ options, selectedCategory, selectCategory }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdown = useRef(null)
  const select = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (select.current && !select.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('click', handleClickOutside)
    } else {
      window.removeEventListener('click', handleClickOutside)
    }

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const handleBlur = () => {
      setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <SelectContainer>
      <Select
        className={isOpen ? 'focus' : ''}
        onClick={() => setIsOpen((prev) => !prev)}
        ref={select}
      >
        <SelectItem>{selectedCategory.title}</SelectItem>
        <Arrow src="icons/calculator/select-arrow.svg" alt="menu" $open={isOpen} />
        {isOpen &&
          dropdown.current &&
          createPortal(
            <SelectMenu>
              {options.map((item) => (
                <Option
                  className={item.id == selectedCategory.id ? 'checked' : ''}
                  key={item.id}
                  onClick={() => selectCategory(item)}
                >
                  {item.title}
                </Option>
              ))}
            </SelectMenu>,
            dropdown.current,
          )}
      </Select>
      <DropdownContainer ref={dropdown} />
    </SelectContainer>
  )
}

export default SelectCategory
