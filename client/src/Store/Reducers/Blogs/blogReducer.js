import { createReducer } from '../../reducerUtil'
import {
  FETCH_BLOGS_ATTEMPT,
  FETCH_BLOGS_FAILED,
  FETCH_BLOGS_SUCCESS,
  EDIT_BLOG_ATTEMPT,
  EDIT_BLOG_FAILED,
  EDIT_BLOG_SUCCESS,
  DELETE_BLOG_ATTEMPT,
  DELETE_BLOG_FAILED,
  DELETE_BLOG_SUCCESS,
  POST_BLOG_ATTEMPT,
  POST_BLOG_FAILED,
  POST_BLOG_SUCCESS
} from "./blogConstants";

const initialState = []; 

/*No matter if I edit post or delete I will always be returning the blogs from the backend */
export const getBlogs = (state, payload) => {
    return payload; 
}

export default createReducer(initialState, {
    [FETCH_BLOGS_SUCCESS] : getBlogs,
    [EDIT_BLOG_SUCCESS] : getBlogs,
    [DELETE_BLOG_SUCCESS] : getBlogs, 
    [POST_BLOG_SUCCESS] : getBlogs,
})