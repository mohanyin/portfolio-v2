<template>
  <IntroAnimation
    ref="animation"
    :target-position="hiCirclePosition"
    @animation:expand-complete="shouldShow = true"
  />

  <div class="intro" :class="{ 'intro--hide': !shouldShow }">
    <div class="intro__text">
      <h1>
        <span ref="hiCircle" class="intro__text__hi">
          <span class="intro__text__hi-text">Hi</span>
        </span>
        <span class="intro__text__name">I’m Mohan.</span>
      </h1>
      <div class="intro__info-container">
        <button aria-label="About my name" class="intro__info">
          <PhInfo />
        </button>
      </div>
    </div>

    <button class="intro__cta">
      Let’s talk
      <div class="intro__cta__arrow">
        <PhArrowRight />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { PhInfo, PhArrowRight } from '@phosphor-icons/vue';
import IntroAnimation from '@/components/IntroAnimation.vue';
import { onMounted, ref } from 'vue';

const shouldShow = ref(false);
const hiCirclePosition = ref<DOMRect | null>(null);

const hiCircle = ref<HTMLElement | null>(null);
const animation = ref<typeof IntroAnimation | null>(null);

onMounted(() => {
  hiCirclePosition.value = hiCircle.value!.getBoundingClientRect();
  animation.value!.startAnimation(hiCirclePosition.value!);
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';

.intro {
  @include helpers.center-contents;

  flex-direction: column;
  gap: 36px;
  position: fixed;
  inset: 0;
}

.intro--hide {
  opacity: 0;
}

.intro__text {
  position: relative;
}

.intro__text__hi {
  @include helpers.circle(128px);

  position: relative;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  background: colors.$gradient-orange;
  box-shadow: colors.$glass-effect;
  display: block;
  text-align: center;
  line-height: 118px;
  margin-bottom: -48px;
  margin-left: -48px;
  z-index: 2;
}

.intro__text__hi-text {
  transform: rotate(-10deg);
  display: block;
}

.intro__text__name {
  font-family: type.$family-mono;
  font-weight: type.$weight-bold;
  font-size: type.$size-display-1;
  color: colors.$black;
  display: block;
  text-align: center;
  border-radius: 24px;
  padding: 0 36px;
}

.intro__info-container {
  position: absolute;
  z-index: 1;
  right: 60px;
  bottom: 80px;
}

.intro__info {
  @include helpers.square(56px, 12px);
  @include helpers.center-contents;

  color: colors.$white;
  background: colors.$gradient-blue-green;
  box-shadow: colors.$glass-effect;
  font-size: 32px;

  &::before {
    @include helpers.square(56px, 12px);

    content: ' ';
    position: absolute;
    top: 6px;
    z-index: -1;
    background: colors.$gradient-blue-green-dark;
  }

  &:active {
    transform: scale(0.95);
  }
}

.intro__cta {
  @include helpers.center-contents;

  position: relative;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-3;
  border-radius: 1000px;
  background: colors.$gradient-red-blue;
  padding: 18px 18px 18px 36px;
  line-height: 1;
  color: colors.$white;
  gap: 24px;
  transition: transform 250ms ease-in-out;
  box-shadow: colors.$glass-effect;

  &::before {
    content: ' ';
    position: absolute;
    inset: 6px 0 -6px;
    z-index: -1;
    border-radius: 1000px;
    background: colors.$gradient-red-blue-dark;
  }

  &:active {
    transform: scale(0.95);
  }
}

.intro__cta__arrow {
  @include helpers.center-contents;

  background: colors.$black;
  height: 72px;
  width: 72px;
  border-radius: 1000px;
  color: colors.$white;
}
</style>
