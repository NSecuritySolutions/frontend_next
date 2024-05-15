export function ChangeFormateDate(date: string) {
  return date.toString().split("-").reverse().join(".");
}
