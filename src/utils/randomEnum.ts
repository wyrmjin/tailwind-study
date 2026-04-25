export function getRandomNumericEnum<T extends object>(anEnum: T): T[keyof T] {
  // 过滤掉 Key，只保留 Value
  const enumValues = Object.values(anEnum).filter(
    (v) => typeof v === 'number'
  ) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}
