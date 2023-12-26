<script setup lang="ts">
import { PhInfo, PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <header>mohan yin</header>

  <main>
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
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/helpers.scss';

.intro {
  @include center-contents;

  flex-direction: column;
  gap: 36px;
  position: fixed;
  inset: 0;
}

.intro__text {
  position: relative;
}

.intro__text__hi {
  @include circle(128px);

  font-weight: $font-weight-medium;
  font-size: $font-size-display-2;
  background-color: $color-orange-500;
  border: 2px solid $color-black;
  display: block;
  text-align: center;
  line-height: 118px;
  margin-bottom: -24px;
  transform: rotate(-10deg);
}

.intro__text__name {
  font-family: $font-family-mono;
  font-weight: $font-weight-bold;
  font-size: $font-size-display-1;
  color: $color-white;
  background-color: $color-black;
  display: block;
  text-align: center;
  border-radius: 24px;
  padding: 12px 36px;
}

.intro__info {
  @include square(56px, 12px);
  @include center-contents;

  position: absolute;
  right: 60px;
  bottom: 100px;
  color: $color-white;
  background: $color-blue-500;
  border: 2px solid $color-black;
  font-size: 32px;
}

.intro__cta {
  @include center-contents;

  font-weight: $font-weight-medium;
  font-size: $font-size-display-3;
  border-radius: 1000px;
  background: $color-white;
  padding: 18px 18px 18px 36px;
  line-height: 1;
  border: 2px solid $color-black;
  gap: 24px;
}

.intro__cta__arrow {
  @include center-contents;

  background: $color-blue-500;
  height: 72px;
  width: 72px;
  border: 2px solid $color-black;
  border-radius: 1000px;
  color: $color-white;
}
</style>
