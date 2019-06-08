import axios from "axios";

import { LOGIN_ATTEMPTED, LOGIN_FAILED, LOGIN_SUCCESSFUL } from '../Reducers/Admin/loginConstants';

const emailUrl = "https://jonathan-holloway.herokuapp.com"
export const login = (body) => {
    /*Before it gets here validation checks should have already been done */
    const endPoint = "/auth/login"
    const backendUrl = emailUrl + endPoint; 
    const promise = axios.post(backendUrl, body)
    return dispatch => {
        dispatch({type: LOGIN_ATTEMPTED})
        promise
         . then(results => {
             const { token } = results; 
             localStorage.setItem('holloway-portfolio-token', token);
         })
         .catch(err => {
             dispatch({type: LOGIN_FAILED, error: err})
         })
    }
}