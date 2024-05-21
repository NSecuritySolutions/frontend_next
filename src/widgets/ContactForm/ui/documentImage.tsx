import { Typography } from '@/shared/components/CalculatorCard/ui/styled'
import { FC } from 'react'

interface DocumentImageProps {
  name: string
}

const DocumentImage: FC<DocumentImageProps> = ({ name }) => {
  const splittedFileName = name.split('.')
  const extension = splittedFileName[splittedFileName.length - 1]

  const getExtensionColor = (extension: string) => {
    switch (extension) {
      case 'xls':
      case 'xlsx':
        return '#84BD5A'
      case 'doc':
      case 'docx':
        return '#50BEE8'
      case 'pdf':
        return '#F15642'
      default:
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0C6.0375 0 5.25 0.7875 5.25 1.75V26.25C5.25 27.2125 6.0375 28 7 28H24.5C25.4625 28 26.25 27.2125 26.25 26.25V7L19.25 0H7Z"
          fill="white"
        />
        <path
          d="M21 7H26.25L19.25 0V5.25C19.25 6.2125 20.0375 7 21 7Z"
          fill="#101010"
          fillOpacity="0.5"
        />
        <path d="M26.25 12.25L21 7H26.25V12.25Z" fill="#272727" fillOpacity="0.2" />
        <path
          d="M22.75 22.75C22.75 23.2312 22.3563 23.625 21.875 23.625H2.625C2.14375 23.625 1.75 23.2312 1.75 22.75V14C1.75 13.5187 2.14375 13.125 2.625 13.125H21.875C22.3563 13.125 22.75 13.5187 22.75 14V22.75Z"
          fill={getExtensionColor(extension)}
        />
        <path
          d="M21.875 23.625H5.25V24.5H21.875C22.3563 24.5 22.75 24.1063 22.75 23.625V22.75C22.75 23.2313 22.3563 23.625 21.875 23.625Z"
          fill="#101010"
          fillOpacity="0.5"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          left: 1.75,
          top: 13.13,
          height: 10.5,
          width: 21,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography size={7} $weight={800} color="white">
          {extension.slice(0, 3).toUpperCase()}
        </Typography>
      </div>
    </div>
  )
}

export default DocumentImage
