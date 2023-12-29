<template>
  <IntroAnimation ref="animation" @animation:expand-complete="shouldShow = true" />

  <div v-if="shouldShow" class="intro">
    <div class="intro__text">
      <h1 ref="name" class="intro__text__title">
        I’m Mohan,<br />
        <span class="intro__text__subtitle">designer and engineer.</span>
      </h1>
      <div ref="info" class="intro__info-container">
        <button aria-label="About my name" class="intro__info">
          <PhInfo />
        </button>
      </div>
    </div>

    <button ref="cta" class="intro__cta" @click="startChat">
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
import { ref } from 'vue';
import { gsap } from 'gsap';

const cta = ref<HTMLElement | null>(null);
const name = ref<HTMLElement | null>(null);
const info = ref<HTMLElement | null>(null);

const shouldShow = ref(false);

const startChat = () => {
  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .to(name.value, {
      duration: 0.5,
      y: '-32px',
      opacity: 0,
    })
    .to(
      info.value,
      {
        duration: 0.5,
        y: '-32px',
        opacity: 0,
      },
      0.25,
    )
    .to(
      cta.value,
      {
        duration: 0.5,
        y: '32px',
        opacity: 0,
      },
      0.375,
    );
};
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
  text-align: center;
}

.intro--hide {
  opacity: 0;
}

.intro__text {
  position: relative;
  line-height: 84px;
  margin-bottom: 32px;
}

.intro__text__hi {
  @include helpers.circle(128px);

  position: relative;
  color: colors.$white;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-2;
  background: colors.$gradient-orange;
  box-shadow: colors.$glass-effect;
  display: block;
  text-align: center;
  line-height: 118px;
  margin-bottom: -32px;
  margin-left: -48px;
  z-index: 2;
}

.intro__text__hi-text {
  transform: rotate(-10deg);
  display: block;
}

.intro__text__title {
  font-family: type.$family-mono;
  font-weight: type.$weight-bold;
  font-size: type.$size-display-1;
  color: colors.$white;
  display: block;
  text-align: center;
  border-radius: 24px;
  padding: 0 36px;
}

.intro__text__subtitle {
  font-weight: type.$weight-light;
  font-family: type.$family-sans;
  font-size: type.$size-display-3;
  color: colors.$green-500;
  line-height: 1.3;
  display: block;
  margin-top: 16px;
  font-style: italic;
}

.intro__info-container {
  position: absolute;
  z-index: 1;
  right: 30%;
  top: -10px;
}

.intro__info {
  @include helpers.square(48px, 12px);
  @include helpers.center-contents;

  color: colors.$white;
  background: colors.$gradient-blue-green;
  box-shadow: colors.$glass-effect;
  font-size: 32px;
  margin-bottom: 4px;

  &::before {
    @include helpers.square(48px, 12px);

    content: ' ';
    position: absolute;
    top: 4px;
    z-index: -1;
    background: colors.$gradient-blue-green-dark;
  }

  &:active {
    margin-top: 4px;
    margin-bottom: 0px;
  }
}

.intro__cta {
  @include helpers.center-contents;

  position: relative;
  font-weight: type.$weight-medium;
  font-size: type.$size-display-4;
  border-radius: 1000px;
  background: colors.$gradient-red-blue;
  padding: 24px 36px;
  line-height: 1;
  color: colors.$white;
  gap: 12px;
  transition: background-size 250ms ease-in-out;
  box-shadow: colors.$glass-effect;
  margin-bottom: 6px;

  &::before {
    content: ' ';
    position: absolute;
    inset: 6px 0 -6px;
    z-index: -1;
    border-radius: 1000px;
    background: colors.$gradient-red-blue-dark;
  }

  &:active {
    margin-top: 6px;
    margin-bottom: 0px;

    &::before {
      inset: 0;
    }
  }
}

.intro__cta__arrow {
  @include helpers.center-contents;

  color: colors.$white;
}
</style>
