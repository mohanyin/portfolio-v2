<template>
  <div v-if="!hasCompletedAnimation" aria-hidden>
    <div ref="blue" class="circle--blue">What’s&nbsp;up</div>
    <div ref="red" class="circle--red">Hello</div>
    <div ref="orange" class="circle--orange">Hey</div>
    <div ref="yellow" class="circle--yellow">Hi</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ref } from 'vue';

const emit = defineEmits<{
  (event: 'animation:expand-complete'): void;
}>();

const yellow = ref<HTMLElement | null>(null);
const orange = ref<HTMLElement | null>(null);
const red = ref<HTMLElement | null>(null);
const blue = ref<HTMLElement | null>(null);

const hasCompletedAnimation = ref(false);

const START: gsap.TweenVars = {
  height: 0,
  width: 0,
  top: '100%',
  yPercent: -50,
  xPercent: -50,
};
const CENTER = (size: string): gsap.TweenVars => {
  return {
    duration: 3,
    height: size,
    width: size,
    top: '50%',
    left: '50%',
  };
};
const COVER_AND_ROTATE = (targetPosition: DOMRect): gsap.TweenVars => {
  return {
    duration: 1.5,
    height: targetPosition.height,
    width: targetPosition.width,
    top: targetPosition.top,
    left: targetPosition.left,
    yPercent: 0,
    xPercent: 0,
    rotate: '-10deg',
  };
};
const HIDDEN: gsap.TweenVars = { duration: 0, opacity: 0 };

function* linearIterator(start: number, interval: number): Generator<number> {
  let next = start;
  while (true) {
    yield next;
    next += interval;
  }
}

const startAnimation = (targetPosition: DOMRect) => {
  const centerTimer = linearIterator(1, 0.25);
  const coverTimer = linearIterator(4, 0.125);
  const coverDuration = linearIterator(2.5, 0);
  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .fromTo(yellow.value, START, CENTER('30vh'))
    .to(yellow.value, COVER_AND_ROTATE(targetPosition), coverTimer.next().value)
    .to(yellow.value, { duration: 3, opacity: 0 }, 7)
    .call(() => {
      hasCompletedAnimation.value = true;
    });

  gsap
    .timeline({ defaults: { ease: 'back.inOut' } })
    .fromTo(orange.value, START, { ...CENTER('38vh'), duration: 2.75 }, centerTimer.next().value)
    .to(
      orange.value,
      { ...COVER_AND_ROTATE(targetPosition), duration: coverDuration.next().value },
      coverTimer.next().value,
    )
    .to(orange.value, HIDDEN);

  gsap
    .timeline({ defaults: { ease: 'back.inOut' } })
    .fromTo(red.value, START, { ...CENTER('55vh'), duration: 2.75 }, centerTimer.next().value)
    .to(
      red.value,
      { ...COVER_AND_ROTATE(targetPosition), duration: coverDuration.next().value },
      coverTimer.next().value,
    )
    .to(red.value, HIDDEN);

  gsap
    .timeline({ defaults: { ease: 'back.inOut' } })
    .fromTo(blue.value, START, { ...CENTER('95vh'), duration: 2.75 }, centerTimer.next().value)
    .call(() => emit('animation:expand-complete'))
    .to(
      blue.value,
      {
        ...COVER_AND_ROTATE(targetPosition),
        duration: coverDuration.next().value,
        ease: 'power3.inOut',
      },
      coverTimer.next().value,
    )
    .to(blue.value, HIDDEN);
};

defineExpose({ startAnimation });
</script>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';

@mixin intro-circle($size, $gradient) {
  @include helpers.circle($size);
  @include helpers.center-contents;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  position: fixed;
  left: 50%;
  top: 50%;
  scale: 100%;
  overflow: hidden;
  box-shadow: colors.$glass-effect;
  background: $gradient;
}

.circle--yellow {
  @include intro-circle(30vh, colors.$gradient-orange);
  z-index: 103;
}

.circle--orange {
  @include intro-circle(38vh, colors.$gradient-orange-red);
  z-index: 102;
}

.circle--red {
  @include intro-circle(55vh, colors.$gradient-red-blue);
  z-index: 101;
}

.circle--blue {
  @include intro-circle(95vh, colors.$gradient-blue-green);
  z-index: 100;
}
</style>
