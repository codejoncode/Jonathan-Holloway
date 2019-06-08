import { createReducer } from "../../reducerUtil";
import {  LOGIN_ATTEMPTED, LOGIN_FAILED, LOGIN_SUCCESSFUL} from './loginConstants';

const initialState = [];

const loginAdmin = (state, payload) => {
    return [...state, Object.assign({}, )]
}

export default createReducer(initialState, {
    [LOGIN_ATTEMPTED] : loginAdmin,
})