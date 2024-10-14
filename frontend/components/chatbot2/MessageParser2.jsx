class MessageParser1 {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("no")) {
      this.actionProvider.handlePayment();
    }else if (lowercase.includes("invoice") || lowercase.includes("hospital")) {
      this.actionProvider.handleQuestion();
    } 
    else if (lowercase.includes("salary slip")) {
      this.actionProvider.handleQuestion2();
    }else if (lowercase.includes("thanks") || lowercase.includes("thank you")|| lowercase.includes("proceed")) {
      this.actionProvider.handleEnd();
    }
  }
}

export default MessageParser1;