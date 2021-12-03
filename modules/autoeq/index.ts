import { GainData } from '../audio'

function mapToFixed (v: number[]): string[] {
  return v.map(i => i.toFixed(2))
}

function joinCSVLine (data: any[]) {
  return data.join(',')
}

export function formatMeasurement (data: GainData) {
  const tuples = data.map(mapToFixed)
  return [['frequency', 'raw'], ...tuples]
    .map(joinCSVLine)
    .join('\n')
}
