import { createChatBotMessage } from "react-chatbot-kit";

const config1 = {
  botName: "HealthMe",
  initialMessages: [
    createChatBotMessage(
      `Hi, how may I help you today? To perform claims, please upload your invoice.`),
  ]
}

export default config1;