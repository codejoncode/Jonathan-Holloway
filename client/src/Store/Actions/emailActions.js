import { toastr } from "react-redux-toastr";
import axios from "axios";
import { EMAIL_SEND_PENDING, EMAIL_SENT_SUCCESS, EMAIL_SENT_FAILURE } from '../Reducers/Email/emailConstants'
import websiteIcon  from "../../Images/Icon.PNG"
const emailUrl = "https://jonathan-holloway.herokuapp.com/emails"


export const sendEmail = (body) => {
    /*Checks for if message, email and company and name are included in the body should be done on the component level
      Once this area is reached everything should be good so checks need to take place before this call. 
    */
   const endPoint = "/send";
   const backendUrl = emailUrl + endPoint;
   const promise = axios.post(backendUrl, body)
   return dispatch => {
       dispatch({type: EMAIL_SEND_PENDING});
       promise
         .then(response => {
             dispatch({type: EMAIL_SENT_SUCCESS, payload: response.data});
             toastr.success("Success", "You successfully sent your email");
         })
         .catch(error => {
             dispatch({type: EMAIL_SENT_FAILURE, error});
         })
   }
    
}
