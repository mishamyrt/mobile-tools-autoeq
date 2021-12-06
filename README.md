# MobileTools to AutoEQ converter

A utility that allows you to convert FFT measurements from [MobileTools](https://apps.apple.com/ru/app/mobile-tools-by-audiocontrol/id1321129383) into a format that [AutoEQ](https://github.com/jaakkopasanen/AutoEq) understands. It is worth calibrating the speakers to get a smooth amplitude-frequency response.

## Usage

```
npx mobiletools2autoeq input.txt output.csv
```

## Correction
I suggest using a combination of the following:

1. [MobileTools](https://apps.apple.com/ru/app/mobile-tools-by-audiocontrol/id1321129383) — iOS app that uses calibrated microphone profiles to record FFT.
2. [mobiletools2autoeq](https://github.com/mishamyrt/mobiletools2autoeq) — This utility that converts measurements from MobileTools format into a format that AutoEQ understands.
3. [AutoEQ](https://github.com/jaakkopasanen/AutoEq) — An amazing app that creates a correction file based on the measurement and target curve.

To generate a correction in AutoEQ, execute:

```sh
python3 autoeq.py
  --input_dir=input \
  --compensation=compensation/zero.csv \
  --output_dir=output \
  --equalize \
  --parametric_eq
```

You can then use the resulting file located in the `output/* ParametricEQ.txt` folder in any supported application or plug-in. I use [SoundSource](https://rogueamoeba.com/soundsource/) on macOS.
