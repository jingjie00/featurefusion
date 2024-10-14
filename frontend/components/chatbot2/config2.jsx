import { createChatBotMessage } from "react-chatbot-kit";
import PaymentButton2 from "./PaymentButton2";

const config2 = {
  botName: "HealthMe",
  initialMessages: [
    createChatBotMessage(
      `Good Morning, Jason`),
    createChatBotMessage(
      `I noticed that you want to make a donation to John Doe.`),
    createChatBotMessage(
      `The total amount is RM 25,000.00, with RM 5,000.00 already donated. By default, the system will allocate the remaining RM 20,000.00 for donation.`),
    createChatBotMessage(
      `Anything you want to change?`),
      
  ],
  widgets: [
    {
      widgetName: "paymentButton",
      widgetFunc: (props) => <PaymentButton2 {...props} />,
    },
  ],
}

export default config2;