import { createReducer } from '../../reducerUtil';

import { EMAIL_SEND_PENDING, EMAIL_SENT_SUCCESS, EMAIL_SENT_FAILURE } from './emailConstants'

const initialState = []

export const sendEmail = (state, payload) => {
    return [...state, Object.assign({}, )]
}

export default createReducer(initialState, {
    [EMAIL_SEND_PENDING] : sendEmail,
})