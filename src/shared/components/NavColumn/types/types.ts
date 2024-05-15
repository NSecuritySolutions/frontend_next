type TNavColumnItem = {
  title: string
  items: { text: string; navLink: string }[]
}

type TNavColumnProps = {
  lists: TNavColumnItem[]
}

export type { TNavColumnItem, TNavColumnProps }
