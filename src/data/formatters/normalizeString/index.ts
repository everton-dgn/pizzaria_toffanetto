export const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
    .replaceAll(/ +/g, ' ')
}
