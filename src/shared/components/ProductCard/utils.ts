const LIMIT = 40
const LENGTH8 = 8
const LENGTH5 = 5

export function truncateStr(str: string, screenWidth: number): string {
  if (screenWidth >= 1300) {
    return str.slice(0, 40 - 3) + '...'
  }
  if (1299 >= screenWidth && screenWidth >= 620) {
    return str.slice(0, 22) + '...'
  }
  if (screenWidth <= 619) {
    return str.slice(0, 17) + '...'
  }
  return str
}

export function truncateArr(strArr: any, screenWidth: number) {
  let maxLength = strArr.length

  if (typeof window !== 'undefined') {
    maxLength = screenWidth > 1300 ? LENGTH8 : screenWidth > 620 ? LENGTH5 : strArr.length
  }

  return strArr.slice(0, maxLength)
}
