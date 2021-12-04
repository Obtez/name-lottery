export const getRandomName = (names: string[]) => {
  const randomNum = Math.floor(Math.random() * names.length)
  return names[randomNum]
}