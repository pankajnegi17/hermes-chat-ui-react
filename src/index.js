import React from 'react';
import ReactDOM from 'react-dom';
import { initializeUrls } from './helpers/custom_hooks';
import HermesBot   from './HermesBot'

const get_hermes_data=(data)=>{
    return `You said ${data}`
}


const renderHermesBot = (element, options)=>{
    initializeUrls(options.urls)
    
    ReactDOM.render( 
        <HermesBot options={options}/> ,
      document.getElementById(element)
    );
}


export {HermesBot as ChatBot, get_hermes_data, renderHermesBot}