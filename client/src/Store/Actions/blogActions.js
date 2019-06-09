import axios from "axios";
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
  } from "../Reducers/Blogs/blogConstants";

const url = "https://jonathan-holloway.herokuapp.com/blogs"

export const fetchBlogs = (token) => {
    const headers = { headers: { Authorization: token }};
    const promise = axios.get(url);
    return dispatch => {
        dispatch({type: FETCH_BLOGS_ATTEMPT})
        promise
        .then(results => {
            dispatch({type: FETCH_BLOGS_SUCCESS, payload: results.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: FETCH_BLOGS_FAILED, error: `Unable to fetch blogs ${err}`})
        })
    }
}

