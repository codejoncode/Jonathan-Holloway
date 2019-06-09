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
    POST_BLOG_SUCCESS,
    FETCH_ONE_BLOG_ATTEMPT, 
    FETCH_ONE_BLOG_FAILED, 
    FETCH_ONE_BLOG_SUCCESS,
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

export const fetchOneBlog = (id) => {
    const newUrl = url + `/${id}`
    const promise = axios.get(newUrl);
    return dispatch => {
        dispatch({type : FETCH_ONE_BLOG_ATTEMPT})
        promise
        .then(results => {
            dispatch({type: FETCH_ONE_BLOG_SUCCESS, payload: results.data})
        })
        .catch(err => {
            dispatch({type: FETCH_ONE_BLOG_FAILED, error: `Unable to fetch blog with id ${id}, ${err}`})
        })
    }
}

