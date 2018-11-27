import presets from './presets.yml'

const presetArray = Object.keys(presets)
presetArray.getPathsFor = preset => {
  return presets[preset]
}

export default presetArray