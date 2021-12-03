import { GainData } from "../audio";

export interface MobileToolsFile {
    overall?: number
    decay?: string,
    frequencies: GainData
}

export * from './parse'

// overall dB	57,4 dB
// decay	Peak Hold
// averaging	1/3 Octave
// source	Internal Mic 1 High Range
// latitude	0
// longitude	0
// saved	25.07.2021, 19:51
// peak	46.9Hz