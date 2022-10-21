import {GET_BLOG, GET_BLOG_POSTS, GET_BLOG_POSTS_LOADING, CREATE_BLOG_POST, DELETE_BLOG_POST, UPDATE_BLOG_POST } from "../constants/index"

const initialState = {
      blog: [],
      blogPosts: [],
      loading: true,
      error: false
}

export default function blogReducer(state = initialState, action) {
      switch (action.type) {
        case GET_BLOG:{
          return {
            ...state,
            blog: action.payload,
            loading: false
          };
        }
        case GET_BLOG_POSTS_LOADING:{
          return {
            ...state,
            loading: true
          };
        }
        case GET_BLOG_POSTS:
          return {
            ...state,
            blogPosts: action.payload,
            loading: false
          };
        case CREATE_BLOG_POST:
          return {
            ...state,
            loading: false,
            blogPosts: [action.payload, ...state.blogPosts]
          }

          case DELETE_BLOG_POST: {
            const duplicateBlogPost= state.teamMembers
            const deleteIndex = duplicateBlogPost.findIndex(item => item.id === action.payload.id)
            duplicateBlogPost.splice(deleteIndex, 1)
            return {
              ...state,
              blogPosts: [...duplicateBlogPost],
              loading: false
            }
          }

          case UPDATE_BLOG_POST: {
            const duplicateBlogPost= state.teamMembers
            const updateIndex = duplicateBlogPost.findIndex(item => item.id === action.payload.id)
            duplicateBlogPost[updateIndex] = action.payload
            return {
              ...state,
              blogPosts: [...duplicateBlogPost],
              loading: false
            }
          }
        
        default:
          return state;
      }
    }