import { createReducer } from '../../reducerUtil';

import {  EMAIL_SENT_SUCCESS, } from './emailConstants'

const initialState = []

export const sendEmail = (state, payload) => {
    return [...state, Object.assign({}, )]
}

export default createReducer(initialState, {
    [EMAIL_SENT_SUCCESS] : sendEmail,
})