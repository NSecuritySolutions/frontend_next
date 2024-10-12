const LIMIT = 40
const LENGTH8 = 8
const LENGTH5 = 5

export function propToStr(prop: string | number | boolean) {
  if (prop.toString() == 'true') return 'да'
  if (prop.toString() == 'false') return 'нет'
  return prop.toString()
}

export function truncateStr(str: string, screenWidth: number): string {
  if (screenWidth >= 1300) {
    return str.slice(0, 33 - 3) + '...'
  }
  if (1299 >= screenWidth && screenWidth >= 620) {
    return str.slice(0, 22 - 3) + '...'
  }
  if (screenWidth <= 619) {
    return str.slice(0, 17 - 3) + '...'
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

export function truncateLine(str: string, screenWidth: number): string {
  if (screenWidth >= 1300) {
    return str.slice(0, 13 - 3) + '...'
  }
  if (1299 >= screenWidth && screenWidth >= 620) {
    return str.slice(0, 10 - 3) + '...'
  }
  if (screenWidth <= 619) {
    return str.slice(0, 5 - 3) + '...'
  }
  return str
}
