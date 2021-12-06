import { GainData } from '../audio'

function parseMobileToolsFloat (input: string) {
  return parseFloat(input.replace(',', '.'))
}

function parseLine (input: string): number[] {
  return input
    .split('\t')
    .map(parseMobileToolsFloat)
}

export function parse (file: string): GainData {
  const lines = file.split('\n')
  const result: GainData = []
  for (let i = 2; i < lines.length; i++) {
    const values = parseLine(lines[i])
    if (!values[0]) break
    result.push([values[0], values[1]])
  }
  return result
}
