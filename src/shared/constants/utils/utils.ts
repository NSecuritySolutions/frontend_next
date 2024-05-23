export function ChangeFormateDate(date: string) {
  return date.toString().split('-').reverse().join('.')
}

// export default function translit(word: string): string {
//   const converter: { [key: string]: string } = {
//     а: 'a',
//     б: 'b',
//     в: 'v',
//     г: 'g',
//     д: 'd',
//     е: 'e',
//     ё: 'e',
//     ж: 'zh',
//     з: 'z',
//     и: 'i',
//     й: 'y',
//     к: 'k',
//     л: 'l',
//     м: 'm',
//     н: 'n',
//     о: 'o',
//     п: 'p',
//     р: 'r',
//     с: 's',
//     т: 't',
//     у: 'u',
//     ф: 'f',
//     х: 'h',
//     ц: 'c',
//     ч: 'ch',
//     ш: 'sh',
//     щ: 'sch',
//     ь: '',
//     ы: 'y',
//     ъ: '',
//     э: 'e',
//     ю: 'yu',
//     я: 'ya',
//   }

//   word = word.toLowerCase()

//   let answer = ''
//   for (let i = 0; i < word.length; ++i) {
//     if (converter[word[i]] === undefined) {
//       answer += word[i]
//     } else {
//       answer += converter[word[i]]
//     }
//   }

//   answer = answer.replace(/[^-0-9a-z]/g, '-')
//   answer = answer.replace(/[-]+/g, '-')
//   answer = answer.replace(/^\-|-$/g, '')
//   return answer
// }

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
