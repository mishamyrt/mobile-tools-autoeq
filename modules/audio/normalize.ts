import { GainData } from '.'

function getMiddle (items: number[]) {
  return items.reduce((sum, value) => sum + value, 0) / items.length
}

export function normalizeGain (data: GainData): GainData {
  const gains = data.map(v => v[1])
  const middle = getMiddle(gains)
  return data.map(v => [v[0], v[1] - middle])
}
