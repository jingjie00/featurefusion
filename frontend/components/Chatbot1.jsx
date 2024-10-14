import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbotConfig";
import MessageParser1 from "./chatbot1/MessageParser1";
import ActionProvider1 from "./chatbot1/ActionProvider1";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser1}
        actionProvider={ActionProvider1}
      />
    </div>
  );
}

export default App;