require('dotenv').config()

let data = {
    nlp_gateway_url: ""
}
//Adding commeant for eveloper
//This code is under developememt
debugger;
// const public_config = require(`${process.env.PUBLIC_URL}/config.json`)

export const nlp_gateway_host ='hermesbetahr.workflo.ai'
export const nlp_gateway_port = 19002
// export const nlp_gateway_url = 'https://localhost:5010/conversation/request/v0'
// export const nlp_gateway_url = 'https://hermesbetahr.workflo.ai:19002/conversation/request/v0'

// export let nlp_gateway_url 

export const domain = 'hr_finance'
// export const domain = 'hr_pro'
 

// export const instance_type = "frontend"
export const instance_type = "backend"

// export const chatbot_api_host = 'https://localhost:5016'
export const chatbot_api_host = 'https://hermesmultimsgbeta.workflo.ai:5016' 

// export const vefification_api = 'https://localhost:5016/varifyUser'
export const vefification_api = 'https://hermesmultimsgbeta.workflo.ai:5016/varifyUser'

// export const zoom_app_host = 'localhost'
export const zoom_app_host = 'hermesbetahr.workflo.ai'
export const zoom_app_port = 8086

// export const push_server_host = 'https://localhost:5005'
export const push_server_host = 'https://pushbeta.workflo.ai:5005'

export const form_builder_host = 'https://hermesvt.workflo.ai:8085/index/index/admin'
export const video_url  = "https://hermesvt.workflo.ai:8085/uploadexcel/uploadexcel" 

export const form_builder_url_user= "https://hermesvt.workflo.ai:8085/index/index/user"
export const form_builder_url_admin= "https://hermesvt.workflo.ai:8085/index/index/admin"
export const video_transcript_url= ""
export const excel_export_url= "https://formbuilderbeta.workflo.ai:8085/uploadexcel/uploadexcel"


export const setConfig = (urls) =>{

    //TODO
     data['nlp_gateway_url'] = urls.nlp_gateway_url
//     const  chatbot_api = urls.chatbot_api
//    const   vefification_api = urls.vefification_api
//    const  zoom_app_host = urls.zoom_app_host
//    const  zoom_app_port = urls.zoom_app_port
//    const     push_server_host = urls.push_server_host
//  const form_builder_host = urls.form_builder_host  
//  const video_url  = urls.video_url 
//  const form_builder_url_user= urls.form_builder_url_user  
//  const form_builder_url_admin= urls.form_builder_url_admin  
//   const excel_export_url= urls.excel_export_url 
} 

export const getConfig=(item)=>{
    return data[item]
}