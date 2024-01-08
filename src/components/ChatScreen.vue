<template>
  <div class="chat-screen">
    <div class="chat-transcript">
      <MessageGroup v-for="(messages, index) in transcript" :key="index" :messages="messages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue';
import { gsap } from 'gsap';
import { useChatStore } from '@/stores/chat';
import { script } from '@/data/script';
import MessageGroup from '@/components/MessageGroup.vue';

const chat = useChatStore();

const transcript = reactive<string[][]>([]);

onBeforeMount(() => {
  const messages = chat.startScript(script);
  transcript.push(messages);
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors.scss';
@use '@/styles/helpers.scss';
@use '@/styles/type.scss';
</style>
