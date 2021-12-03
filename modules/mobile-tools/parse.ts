import { GainData } from "../audio"

function parseMobileToolsFloat(input: string) {
    return parseFloat(input.replace(',', '.'))
}

export function parse(file: string): GainData {
    const lines = file.split('\n')
    const result: GainData = []
    for (let i = 2; i < lines.length; i++) {
        const values = lines[i]
            .split('\t')
            .map(parseMobileToolsFloat)
        if (!values[0]) {
            break
        }
        result.push([values[0], values[1]])
    }
    return result
}