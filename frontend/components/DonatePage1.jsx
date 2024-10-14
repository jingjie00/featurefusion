import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Aos from "aos";
import Layout from "./general/Layout";
import { SettingActions } from "./reducers/settingReducer";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import DonationForm from "./DonationForm";
import axios from "axios";

const postApi = () => {
  var uniqueID = crypto.randomUUID();
  return axios
    .request({
      method: "POST",
      url: "https://service-testnet.maschain.com/api/wallet/entity",
      headers: {
        "Content-Type": "application/json",
        client_id:
          "0264a6a2135d0b766d212db38a1a0fcd2334c651acb32b69098c2fb0c6c98db9",
        client_secret:
          "sk_59bb96279047f2365169a00b7ced5e4d39f5ed5e7da417b3d5c1d849dd697318",
      },
      data: {
        name: "HealthMe Entity " + uniqueID,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => false);
};

function DonatePage1({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SettingActions.setLoading(false));
    Aos.init();
    //postApi();
  }, []);

  return (
    <Layout>
      <div className="flex flex-row h-screen">
        <div className="w-1/3 p-4"></div>
        <DonationForm />
      </div>
    </Layout>
  );
}

export default DonatePage1;
