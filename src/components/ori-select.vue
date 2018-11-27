<template>
  <div class="ori-select-container">
    <div v-if="!!label" class="label">
      {{ label }}
    </div>

    <div :class="['ori-select', { opened }]">
      <div class="current-item" @click="open">
        {{ currentLabel }}
      </div>

      <transition name="fade">
        <div v-show="opened" class="ori-select-items" ref="itemsContainer" :style="{ maxHeight: `${itemsMaxHeight}px`, top: `${itemsYOffset}px`, left: `${itemsXOffset}px` }">
          <div v-for="item in items" :key="item.id" @click="select(item.id)" :class="['ori-select-item', { selected: item.id === value }]">
            {{ item.label }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  const itemHeight = 36;

  export default {
    name: 'ori-select',
    props: {
      items: Array, // Array of { id, label }
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      }
    },
    data: () => ({
      itemsMaxHeight: window.innerHeight,
      itemsYOffset: 0,
      itemsXOffset: 0,
      opened: false
    }),
    computed: {
      currentLabel() {
        const item = this.items.find(i => i.id === this.value)
        return item ? item.label : ''
      }
    },
    mounted() {
      this.$nextTick(this.recalculateItemsPosition)
    },
    methods: {
      recalculateItemsPosition() {
        this.itemsMaxHeight = window.innerHeight

        const desiredOffset = Math.min(0, -(this.items.findIndex(i => i.id === this.value)) * itemHeight - 1) // -1 to compensate border

        const itemsContainerRect = this.$refs.itemsContainer.getBoundingClientRect()
        const mainRect = this.$el.getBoundingClientRect()
        const lowerBoundaryOverflow = Math.max(0, mainRect.top + itemsContainerRect.height + desiredOffset + 16 - window.innerHeight)

        this.itemsYOffset = desiredOffset - lowerBoundaryOverflow
        this.itemsXOffset = Math.min(0, window.innerWidth - (itemsContainerRect.x + itemsContainerRect.width + 16) + this.itemsXOffset)
      },
      open() {
        this.opened = true
        this.$nextTick(this.recalculateItemsPosition)
      },
      select(id) {
        this.$emit('input', id)
        this.opened = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $item-height: 36px;

  .ori-select-container {
    display: inline-block;

    .label {
      display: inline-block;
      margin-right: 4px;
    }

    .ori-select {
      display: inline-flex;
      position: relative;
      align-items: center;
      border-radius: 3px;
      border: 1px solid transparentize(white, 0.5);
      height: $item-height;
      cursor: pointer;

      &.opened {
        color: transparent;
        border-color: transparent;
      }

      .current-item {
        padding: 6px
      }

      .ori-select-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        color: white;
        border: 1px solid transparentize(white, 0.5);
        background: transparentize(black, 0.2);
        border-radius: 3px;
        overflow-y: auto;
        z-index: 100;

        // Compensate border
        left: -1px;

        .ori-select-item {
          height: $item-height;
          display: inline-flex;
          align-items: center;
          padding: 0 6px;
          cursor: pointer;
          white-space: nowrap;

          &.selected {
            background-color: transparentize(white, 0.8);
          }

          &:hover:not(.selected) {
            background-color: transparentize(white, 0.9);
          }
        }
      }
    }
  }
</style>