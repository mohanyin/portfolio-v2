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
      <button aria-label="About my name" class="intro__info">
        <PhInfo />
      </button>
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
  background-color: colors.$orange-500;
  border: 2px solid colors.$black;
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

.intro__info {
  @include helpers.square(56px, 12px);
  @include helpers.center-contents;

  position: absolute;
  right: 60px;
  bottom: 80px;
  color: colors.$white;
  background: colors.$blue-500;
  border: 2px solid colors.$green-500;
  font-size: 32px;
  z-index: 1;
  box-shadow: 0px 4px 0px 0px colors.$green-500;

  &:active {
    background: colors.$blue-400;
    transform: scale(0.95);
  }
}

.intro__cta {
  @include helpers.center-contents;

  font-weight: type.$weight-medium;
  font-size: type.$size-display-3;
  border-radius: 1000px;
  background: colors.$white;
  padding: 18px 18px 18px 36px;
  line-height: 1;
  color: colors.$black;
  border: 2px solid colors.$blue-500;
  gap: 24px;
  box-shadow: 0px 12px 0px 0px colors.$blue-500;
  transition: transform 250ms ease-in-out;

  &:active {
    background: colors.$green-100;
    transform: scale(0.95);
  }
}

.intro__cta__arrow {
  @include helpers.center-contents;

  background: colors.$green-500;
  height: 72px;
  width: 72px;
  border-radius: 1000px;
  color: colors.$black;
}
</style>
