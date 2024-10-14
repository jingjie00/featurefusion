import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Aos from 'aos';
import Layout from './general/Layout';
import { SettingActions } from './reducers/settingReducer';
import Chatbot from "react-chatbot-kit";
import config1 from "./chatbot1/config1";
import MessageParser1 from "./chatbot1/MessageParser1";
import ActionProvider1 from "./chatbot1/ActionProvider1";
import Dragger from 'antd/lib/upload/Dragger';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useFetcher } from 'react-router-dom';
import axios from "axios";

const putWalletApi = () => {
  var uniqueID = crypto.randomUUID();
  return axios
    .request({
      method: "PUT",
      url: "https://service-testnet.maschain.com/api/wallet/entity/17",
      headers: {
        "Content-Type": "application/json",
        client_id:
          "0264a6a2135d0b766d212db38a1a0fcd2334c651acb32b69098c2fb0c6c98db9",
        client_secret:
          "sk_59bb96279047f2365169a00b7ced5e4d39f5ed5e7da417b3d5c1d849dd697318",
      },
      data: {
        name: "HealthMe " + uniqueID,
        external_id: null,
      },
    })
    .then((response) => console.log(response))
    .catch((error) => false);
};

function RequestPage({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    dispatch(SettingActions.setLoading(false));
    Aos.init();
    //putWalletApi();
  }, []);

  const verifyUploadProps = {
    name: 'attachments',
    multiple: true,
    // accept: 'image/jpg, .pdf',
    async onChange(e) {
if(e.fileList.length >1){

  await navigator.clipboard.writeText("I have uploaded my salary slip.");
  setShowImage1(true)
}
else{
  await navigator.clipboard.writeText("Here, I have uploaded the invoice.");
  setShowImage2(true)
}
      
    },
    onDrop(e) {
      //uploadToServer(e);
    },
  };
  
  return (
    <Layout>
      <div className='flex flex-row h-5/6'>
        <div className='w-1/3 p-4'>
          <Chatbot
          config={config1}
          messageParser={MessageParser1}
          actionProvider={ActionProvider1}
          />

          {showSuccess &&  <div className="payment-success">Request Successful!</div>}
                    
           <div className='w-full'>
                <Button onClick={() => router.reload()} className='w-full bg-black text-white rounded-lg px-5 py-3 my-5'>Done? Restart</Button>
               </div>
        </div>
        <div className='w-2/3 p-4'>
               <Dragger {...verifyUploadProps}>
                 <div className='p-3 w-full border rounded-lg flex flex-col mt-2.5'>
                   <div
                     className='items-center align-center flex justify-center h-1/5'
                     style={{
                       height: '8em',
                     }}
                   >
                     <UploadOutlined style={{ fontSize: '6em', opacity: '0.6' }} />
                   </div>
                   <div
                     className='flex justify-center align-center mb-3'
                     style={{ opacity: '0.6' }}
                   >
                    Upload File
                   </div>
                   {/* <div>
                     <Button
                       className='flex border-2 border rounded-lg h-10 w-full text-center items-center justify-center button-primary'
                     >
                       <span className='font-semibold text-sm uppercase leading-none'>
                        Choose to Upload
                       </span>
                     </Button>
                   </div> */}
                 </div>
               </Dragger>

               <div className='flex gap-4'>
                {showImage1 &&  <img src="/images/image2.jpeg" className="w-1/4" alt="" onClick={() => setShowSuccess(true)}/>}
                {showImage2 &&  <img src="/images/image1.jpeg" className="w-1/4" alt="" onClick={() => setShowSuccess(true)}/>}

               
               </div>

    

              
        </div>
      </div>
    </Layout>
  );
}

export default RequestPage;