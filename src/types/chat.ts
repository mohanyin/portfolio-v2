export interface Script {
  steps: Step[];
}

export interface Step {
  messages: string[];
  responses: {
    text: string;
    next?: Step;
  }[];
}
