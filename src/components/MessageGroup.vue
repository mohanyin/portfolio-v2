<template>
  <div class="message-group">
    <div class="message-group__messages">
      <div v-for="(message, index) in props.messages" :key="index" class="message-group__message">
        <div class="message-group__message__text">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';

const props = defineProps<{
  messages: string[];
}>();
</script>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';

.message-group__messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.message-group__message {
  background-color: colors.$green-500;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 4px 24px 24px 4px;
  box-shadow: colors.$glass-effect;
  font-family: type.$family-mono;

  &:first-of-type {
    border-top-left-radius: 24px;
  }

  &:last-of-type {
    border-bottom-left-radius: 24px;
  }
}
</style>
