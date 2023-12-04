<script setup lang="ts"></script>

<template>
  <header>mohan yin</header>

  <main>
    <div class="intro">
      <h1 class="intro__text">
        <span class="intro__text__hi">Hi</span>
        <span class="intro__text__name">I’m Mohan.</span>
      </h1>
      <button class="intro__button">
        Let’s talk
        <div class="intro__button__arrow"></div>
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
  gap: 36px;
  position: fixed;
  top: 0;
}

.intro__text {
  position: relative;
}

.intro__text__hi {
  font-weight: $font-weight-medium;
  font-size: $font-size-display-2;
  background-color: $color-orange-500;
  border: 2px solid $color-black;
  display: block;
  height: 124px;
  width: 124px;
  border-radius: 50%;
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

.intro__button {
  font-weight: $font-weight-medium;
  font-size: $font-size-display-3;
  border-radius: 1000px;
  background: $color-white;
  padding: 18px 18px 18px 36px;
  line-height: 1;
  border: 2px solid $color-black;
  display: flex;
  align-items: center;
  gap: 24px;
}

.intro__button__arrow {
  background: $color-blue-500;
  height: 72px;
  width: 72px;
  border: 2px solid $color-black;
  border-radius: 1000px;
  display: inline-block;
}
</style>
