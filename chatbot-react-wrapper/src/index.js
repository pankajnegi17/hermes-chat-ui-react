import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { renderHermesBot } from 'hermes-chat-ui-react';

 
// const options = {}
// ReactDOM.render( 
//     <ChatBot options={options}/> ,
//   document.getElementById('chatbot-root')
// );


const urls = {nlp_gateway_url: 'https://hermesbetahr.workflo.ai:19002/conversation/request/v0'}
const inatance = {domain:'finance', instance_type:'frontend'}
const uiType = 'widget'
const modals = {zoom:'chatbot-zoom-modal', 'file':'image-modal'}

export const renderChatbot = (ele)=>{
    renderHermesBot(ele,{urls,inatance, uiType, modals})
 }

window['renderChatbot'] = renderChatbot;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


