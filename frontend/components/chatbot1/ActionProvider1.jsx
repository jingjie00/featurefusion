import emailjs from "emailjs-com"

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
    const messages = [
      'Analysing...',
      `Age: 43 & Disabled (Verified)`,
      ` There is a donation available for your case.`,
    `Please submit your current salary slip as required. If valid, the funds will then be released to the hospital according to the donation contract.`,

    ];
  
    const delays = [500, 900, 1000, 1400];
  
    messages.forEach((message, index) => {
      setTimeout(() => {
        this.updateChatbotState(this.createChatBotMessage(message));
      }, delays[index]);
    });

    
  }
  
  

  handleQuestion2() {
    const messages = [
      { text: 'Analysing...', options: {} },
      { text: '\nAnalysis Completed!', options: {} },
      { text: '\nYou are verified as B40. You are eligible!', options: { widget: "Complete" } },
      { text: 'Processing...', options: {} },
      { text: '\nThe donation details have been sent to all parties involved!', options: {} },
    ];
  
    const delays = [500, 700, 900, 1400, 4000]; 
  
    messages.forEach((message, index) => {
      setTimeout(() => {
        this.updateChatbotState(this.createChatBotMessage(message.text, message.options));
      }, delays[index]);
    });

    emailjs.init("nEOa7brxpEkuoZvpM");
  
  
    emailjs.send("service_dfxu0dm","template_v81ybnd")
    .then(() => console.log("Done"))
    .catch(err => console.error('Failed to send email:', err));
  }
  
  


  handleEnd() {
    this.updateChatbotState(this.createChatBotMessage(
      'Processing completed',
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
