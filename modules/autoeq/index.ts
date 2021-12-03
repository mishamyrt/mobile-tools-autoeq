import { GainData } from "../audio";

function mapToFixed(v: number[]): string[] {
    return v.map(i => i.toFixed(2))
}

function joinCSVLine(data: any[]) {
    return data.join(',')
}

export function formatMeasurement(data: GainData) {
    return [
        ['frequency', 'raw'],
        ...data.map(mapToFixed)
    ]   .map(joinCSVLine)
        .join('\n')
}