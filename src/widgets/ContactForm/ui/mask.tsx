import type { LegacyRef } from 'react'
import { IMaskMixin } from 'react-imask'
import { Input } from './styled'

const MaskedStyledInput = IMaskMixin(({ inputRef, error, ...props }) => (
  <Input $error={error as string} {...props} ref={inputRef as LegacyRef<HTMLInputElement>} />
))

export default MaskedStyledInput
