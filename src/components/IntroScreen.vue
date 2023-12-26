<script setup lang="ts">
import { PhInfo, PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <div class="intro">
    <div class="intro__text">
      <h1>
        <span class="intro__text__hi">Hi</span>
        <span class="intro__text__name">I’m Mohan.</span>
      </h1>
      <button class="intro__info">
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

.intro__text {
  position: relative;
}

.intro__text__hi {
  @include helpers.circle(128px);

  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  background-color: colors.$orange-500;
  border: 2px solid colors.$black;
  display: block;
  text-align: center;
  line-height: 118px;
  margin-bottom: -24px;
  transform: rotate(-10deg);
}

.intro__text__name {
  font-family: type.$family-mono;
  font-weight: type.$weight-bold;
  font-size: type.$size-display-1;
  color: colors.$white;
  background-color: colors.$black;
  display: block;
  text-align: center;
  border-radius: 24px;
  padding: 12px 36px;
}

.intro__info {
  @include helpers.square(56px, 12px);
  @include helpers.center-contents;

  position: absolute;
  right: 60px;
  bottom: 100px;
  color: colors.$white;
  background: colors.$blue-500;
  border: 2px solid colors.$black;
  font-size: 32px;
}

.intro__cta {
  @include helpers.center-contents;

  font-weight: type.$weight-medium;
  font-size: type.$size-display-3;
  border-radius: 1000px;
  background: colors.$white;
  padding: 18px 18px 18px 36px;
  line-height: 1;
  border: 2px solid colors.$black;
  gap: 24px;
}

.intro__cta__arrow {
  @include helpers.center-contents;

  background: colors.$blue-500;
  height: 72px;
  width: 72px;
  border: 2px solid colors.$black;
  border-radius: 1000px;
  color: colors.$white;
}
</style>
