import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Chat } from '@/types';

export const useChatStore = defineStore('chat', () => {
  const script = ref<Chat.Script | null>(null);
  const step = ref<Chat.Step | null>(null);

  function startScript(_script: Chat.Script): string[] {
    script.value = _script;
    step.value = _script.steps[0];
    return step.value.messages;
  }

  function selectResponse(response: string): string[] | null {
    const nextStep = step.value?.responses.find((r) => r.text === response)?.next;
    if (nextStep) {
      step.value = nextStep;
      return step.value.messages;
    } else {
      step.value = null;
      return null;
    }
  }

  return { script, step, startScript, selectResponse };
});
