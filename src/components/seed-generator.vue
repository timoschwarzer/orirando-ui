<template>
  <div class="seed-generator">
    <div class="main-settings">
      <ori-select label="Logic Path:" :items="presetItems" v-model="selectedPreset" />
      <ori-select label="Key Mode:" :items="keyModeItems" v-model="selectedKeyMode" />
      <ori-select label="Goal Mode:" :items="goalModeItems" v-model="selectedGoalMode" />
    </div>
  </div>
</template>

<script>
  import presets   from '../data/presets'
  import keyModes   from '../data/key-modes'
  import goalModes   from '../data/goal-modes'
  import OriSelect from './ori-select'

  export default {
    name: 'seed-generator',
    components: {
      OriSelect
    },
    data: () => ({
      selectedPreset: 'standard',
      selectedKeyMode: 'clues',
      selectedGoalMode: 'force trees'
    }),
    created() {
      this.presetItems = presets.map(p => ({ label: p.toLocaleUpperCase(), id: p }))
      this.keyModeItems = keyModes.map(k => ({ label: k.toLocaleUpperCase(), id: k }))
      this.goalModeItems = goalModes.map(g => ({ label: g.toLocaleUpperCase(), id: g }))
    }
  }
</script>

<style lang="scss" scoped>
  .seed-generator {
    .main-settings {
      display: flex;
      justify-content: space-around;

      .label {
        padding-right: 4px;
      }
    }
  }
</style>