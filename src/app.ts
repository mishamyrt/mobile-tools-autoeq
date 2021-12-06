#!/usr/bin/env node
import { parse } from './modules/mobile-tools'
import { readFile, writeFile } from 'fs/promises'
import { normalizeGain } from './modules/audio'
import { formatMeasurement } from './modules/autoeq'

function main (args: string[]) {
  if (args.length < 2) {
    console.error('Too few arguments')
    process.exit(1)
  }
  const inputPath = args[0]
  const outputPath = args[1]

  return readFile(inputPath, { encoding: 'utf8' })
    .then(parse)
    .then(normalizeGain)
    .then(formatMeasurement)
    .then(csv => writeFile(outputPath, csv))
}

main(process.argv.slice(2))
