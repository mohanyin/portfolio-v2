<template>
  <div v-if="!hasCompletedAnimation" aria-hidden>
    <div ref="blue" class="circle--blue">Hi</div>
    <div ref="red" class="circle--red">Hi</div>
    <div ref="orange" class="circle--orange">Hi</div>
    <div ref="yellow" class="circle--yellow">Hi</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ref } from 'vue'

const emit = defineEmits<{
  (event: 'animation:expand-complete'): void
}>()

const yellow = ref<HTMLElement | null>(null)
const orange = ref<HTMLElement | null>(null)
const red = ref<HTMLElement | null>(null)
const blue = ref<HTMLElement | null>(null)

const hasCompletedAnimation = ref(false)

const START = { height: 0, width: 0, top: '110%' }
const CENTER = (size: string) => {
  return { duration: 3, height: size, width: size, top: '50%' }
}
const COVER_AND_ROTATE = (targetPosition: DOMRect) => {
  return {
    duration: 1.5,
    height: targetPosition.height,
    width: targetPosition.width,
    top: targetPosition.top + targetPosition.width / 2,
    left: targetPosition.left + targetPosition.width / 2,
    rotate: '-10deg',
  }
}
const HIDDEN = { duration: 0, opacity: 0 }

function* linearIterator(start: number, interval: number): Generator<number> {
  let next = start
  while (true) {
    yield next
    next += interval
  }
}

const startAnimation = (targetPosition: DOMRect) => {
  const centerTimer = linearIterator(1, 0.25)
  const coverTimer = linearIterator(3.5, 0.5)
  const coverDuration = linearIterator(2.5, -0.5)
  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .fromTo(yellow.value, START, CENTER('30vh'))
    .to(yellow.value, COVER_AND_ROTATE(targetPosition), coverTimer.next().value)
    .to(yellow.value, { duration: 3, opacity: 0 }, 6)
    .call(() => {
      hasCompletedAnimation.value = true
    })

  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .fromTo(orange.value, START, { ...CENTER('38vh'), duration: 2.75 }, centerTimer.next().value)
    .to(
      orange.value,
      { ...COVER_AND_ROTATE(targetPosition), duration: coverDuration.next().value },
      coverTimer.next().value,
    )
    .to(orange.value, HIDDEN)

  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .fromTo(red.value, START, { ...CENTER('55vh'), duration: 2.75 }, centerTimer.next().value)
    .to(
      red.value,
      { ...COVER_AND_ROTATE(targetPosition), duration: coverDuration.next().value },
      coverTimer.next().value,
    )
    .to(red.value, HIDDEN)

  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .fromTo(blue.value, START, { ...CENTER('85vh'), duration: 2.75 }, centerTimer.next().value)
    .call(() => emit('animation:expand-complete'))
    .to(
      blue.value,
      { ...COVER_AND_ROTATE(targetPosition), duration: coverDuration.next().value },
      coverTimer.next().value,
    )
    .to(blue.value, HIDDEN)
}

defineExpose({ startAnimation })
</script>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';

.circle--yellow {
  @include helpers.circle(30vh);
  @include helpers.center-contents;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: colors.$orange-500;
  border: 2px solid colors.$black;
  z-index: 103;
  overflow: hidden;
}

.circle--orange {
  @include helpers.circle(38vh);
  @include helpers.center-contents;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;
  border: 2px solid colors.$black;

  transform: translate(-50%, -50%);
  background-color: colors.$orange-700;
  z-index: 102;
}

.circle--red {
  @include helpers.circle(55vh);
  @include helpers.center-contents;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-1;
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;
  border: 2px solid colors.$black;

  transform: translate(-50%, -50%);
  background-color: colors.$red-500;
  z-index: 101;
}

.circle--blue {
  @include helpers.circle(80vh);
  @include helpers.center-contents;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-1;
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;
  border: 2px solid colors.$black;

  transform: translate(-50%, -50%);
  background-color: colors.$blue-500;
  z-index: 100;
}
</style>
