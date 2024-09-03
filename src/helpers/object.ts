export function getKeys<T=string>(obj: Record<string, unknown>): T[] {
  return Object.keys(obj) as T[]
}
