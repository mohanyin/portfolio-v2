import { Chat } from '@/types';

const START = {
  messages: ['Hello!', 'My name is Mohan.'],
  responses: [{ text: 'Hi!' }],
};

export const script: Chat.Script = {
  steps: [START],
};
