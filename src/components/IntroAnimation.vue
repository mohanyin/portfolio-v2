<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const START = { scale: 0, top: '110%' }
const CENTER = { duration: 3, scale: 1, top: '50%' }
const DISAPPEARED = { scale: 0 }

const yellow = ref<HTMLElement | null>(null)
const orange = ref<HTMLElement | null>(null)
const red = ref<HTMLElement | null>(null)
const blue = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

  tl.fromTo(yellow.value, START, CENTER)
  tl.fromTo(orange.value, START, CENTER, 0.5).to(orange.value, { duration: 2, ...DISAPPEARED }, 3)
  tl.fromTo(red.value, START, CENTER, 0.75).to(red.value, { duration: 1.7, ...DISAPPEARED }, 3.25)
  tl.fromTo(blue.value, START, CENTER, 1).to(blue.value, { duration: 1.4, ...DISAPPEARED }, 3.5)
})
</script>

<template>
  <div ref="blue" class="circle--blue"></div>
  <div ref="red" class="circle--red"></div>
  <div ref="orange" class="circle--orange"></div>
  <div ref="yellow" class="circle--yellow">Hi</div>
</template>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';

.circle--yellow {
  @include helpers.circle(30vh);
  @include helpers.center-contents;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: colors.$orange-500;
}

.circle--orange {
  @include helpers.circle(38vh);
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;

  transform: translate(-50%, -50%);
  background-color: colors.$orange-700;
}

.circle--red {
  @include helpers.circle(55vh);
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;

  transform: translate(-50%, -50%);
  background-color: colors.$red-500;
}

.circle--blue {
  @include helpers.circle(80vh);
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;

  transform: translate(-50%, -50%);
  background-color: colors.$blue-500;
}
</style>
