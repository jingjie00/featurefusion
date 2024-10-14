import React from "react";
import PaymentButton2 from "./PaymentButton2";

class ActionProvider1 {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleQuestion() {
    this.updateChatbotState(this.createChatBotMessage(
      'Analysing...',
    ));
    this.updateChatbotState(this.createChatBotMessage(
      `
Age: 43 & Disabled(verified)`,
    ));
    this.updateChatbotState(this.createChatBotMessage(
      `
There is a donation available for your case. Please submit your current salary slip.`,
    ));
  
  }

  handleQuestion2() {
    this.updateChatbotState(this.createChatBotMessage(
      'Analysing...',
    ));
    this.updateChatbotState(this.createChatBotMessage(
      `
Analysis Completed!`,
    ));
    this.updateChatbotState(this.createChatBotMessage(
      `
You are eligible, would you like to proceed. [The contract stated the payment will be directly pay to the hospital]`,  {
  widget: "Complete",
}
    ));
  }


  handleEnd() {
    this.updateChatbotState(this.createChatBotMessage(
      'Processing completed',
    ));
  }

  handlePayment = () => {
    this.updateChatbotState(this.createChatBotMessage(
      'Press the button below to proceed with payment.',
      {
        widget: "paymentButton",
      }
    ));
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider1;
