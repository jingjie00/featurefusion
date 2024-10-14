/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
// import Link from 'next/link';
import _ from "lodash";
import Aos from "aos";
import { Button, message, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Layout from "./general/Layout";
import { setLoading, SettingActions } from "./reducers/settingReducer";
import { logoIcon } from "../images";
import { routes } from "../route";
import axios from "axios";

const postCreateWalletApi = () => {
  var uniqueID = crypto.randomUUID();
  return axios
    .request({
      method: "POST",
      url: "https://service-testnet.maschain.com/api/wallet/create-user",
      headers: {
        "Content-Type": "application/json",
        client_id:
          "0264a6a2135d0b766d212db38a1a0fcd2334c651acb32b69098c2fb0c6c98db9",
        client_secret:
          "sk_59bb96279047f2365169a00b7ced5e4d39f5ed5e7da417b3d5c1d849dd697318",
      },
      data: {
        name: "HealthMe User " + uniqueID,
        email: uniqueID + "@healthme.com",
        ic: "HealthMe ic",
        phone: "HealthMe ic",
        entity_id: 12,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => false);
};

function LoginPage({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [activeTab, setActiveTab] = useState("login");
  const [allowLogin, setAllowLogin] = useState(false);
  useEffect(() => {
    dispatch(SettingActions.setLoading(false));
    Aos.init();
    //postCreateWalletApi();
  }, []);

  useEffect(() => {
    dispatch(SettingActions.setLoading(false));
    Aos.init();
  }, [dispatch]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className="text-xl flex flex-col justify-center items-center my-24">
        <div className="flex mb-4">
          <button
            onClick={() => handleTabChange("login")}
            className={`px-6 py-2 font-bold text-2xl ${
              activeTab === "login"
                ? "border-b-2 border-red-500"
                : "text-gray-700"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => handleTabChange("signup")}
            className={`px-6 py-2 font-bold text-2xl ${
              activeTab === "signup"
                ? "border-b-2 border-red-500"
                : "text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>
        {activeTab === "signup" && (
          <div className="border border-gray-300 p-8 shadow-lg w-1/2 rounded-3xl">
            <div className="mb-4 flex align-center justify-center items-center flex-col">
              <img
                src="./images/logoCircle.png"
                alt="logo"
                className="w-16 flex content-center align-center justify-center items-center"
              />
              <h1 className="text-blue-700 font-bold text-base">
                KYC Submission
              </h1>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Legal name (as it appears to MyKad/Passport)*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">
                  Username*
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number*
                </label>
                <div className="flex">
                  <select className="w-1/4 px-3 py-2 border border-gray-300 rounded-l">
                    <option value="+60">+60 (MY)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+62">+62 (ID)</option>
                    <option value="+63">+63 (PH)</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    className="w-3/4 px-3 py-2 border border-gray-300 rounded-r"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your password"
                />
                <p className="block text-gray-700 text-opacity-60">
                  Password must have at least 8 characters, at least 1
                  Uppercase, at least 1 Lowercase , at least 1 Number and at
                  least 1 Special Character(@, $, !, *, %, ?, #, &, _)
                </p>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Re-enter your Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your password again"
                />
              </div>
              <div className="w-full py-2 flex align-center justify-center items-center">
                <input type="checkbox" id="agree" name="agree" />
                <label for="agree">
                  I agree to the{" "}
                  <a className="cursor-pointer text-blue-700">Privacy Policy</a>{" "}
                  and{" "}
                  <a className="cursor-pointer text-blue-700">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button
                type="button" // Change to 'button' to prevent form submission
                className="w-full bg-red-500 text-white py-2 px-4 rounded font-bold"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
        {activeTab === "login" && (
          <div className="border border-gray-300 p-8 shadow-lg w-full max-w-sm rounded-3xl">
            <div className="mb-4 flex align-center justify-center items-center flex-col">
              <img
                onClick={() => {
                  setAllowLogin(true);
                }}
                src="./images/logoCircle.png"
                alt="logo"
                className="w-16 content-center"
              />
              <h1 className="text-blue-700 font-bold text-base">Welcome</h1>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="signup-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="signup-password"
                  className="block text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="signup-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="button" // Change to 'button' to prevent form submission
                className="w-full bg-red-500 text-white py-2 px-4 rounded font-bold"
                onClick={() => {
                  if (allowLogin) {
                    dispatch(SettingActions.setIsLogin(true));
                    dispatch(SettingActions.setUsername("Jason"));
                    router.push("/dashboard");
                  } else {
                    dispatch(SettingActions.setLoading(true));

                    setTimeout(() => {
                      dispatch(SettingActions.setLoading(false));
                      message.error("Wrong login credentials");
                    }, 1000);
                  }
                }}
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default LoginPage;
