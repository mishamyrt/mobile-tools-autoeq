import { parse } from './modules/mobile-tools'
import { readFile, writeFile } from 'fs/promises'
import { normalizeGain } from './modules/audio'
import { formatMeasurement } from './modules/autoeq'

if (process.argv.length < 4) {
    console.error('Too few arguments')
    process.exit(1)
}

const inputPath = process.argv[2]
const outputPath = process.argv[3]

readFile(inputPath, { encoding: 'utf8' })
    .then(parse)
    .then(normalizeGain)
    .then(formatMeasurement)
    .then(csv => writeFile(outputPath, csv))