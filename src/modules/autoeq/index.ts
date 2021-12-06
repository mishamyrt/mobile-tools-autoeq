import { GainData } from '../audio'

const TABLE_HEADERS = ['frequency', 'raw']

function numbersToFixed (items: number[]): string[] {
  return items.map(i => i.toFixed(2))
}

function joinCSVLine (data: any[]) {
  return data.join(',')
}

export function formatMeasurement (data: GainData) {
  const tuples = data.map(numbersToFixed)
  return [TABLE_HEADERS, ...tuples]
    .map(joinCSVLine)
    .join('\n')
}
