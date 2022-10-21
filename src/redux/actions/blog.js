import axios from "axios";
import { GET_BLOG_POSTS, GET_BLOG_POSTS_LOADING, CREATE_BLOG_POST, DELETE_BLOG_POST, UPDATE_BLOG_POST } from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const getBlogPosts = () => async (dispatch) => {
  dispatch({type: GET_BLOG_POSTS_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/social/posts/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from blog posts api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const blogPosts = response.data.results.map((ob) => ({
        // orderNumber: ob?.id,
        // name: ob?.merchant,
        id: ob?.id,
        tags: ob?.tags,
        author_name: ob?.author_name,
        amount: ob?.total_price,
        status: ob?.status,
        image: ob?.image,
        title: ob?.title,
        text: ob?.text,
        authorAvatar: ob?.author_avatar,
        publishedDate: ob?.published_date,
        readTime: ob?.read_time
      }));
      dispatch({
        type: GET_BLOG_POSTS,
        payload: blogPosts,
      });
      
      // toast.success("Blog posts retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_BLOG_POSTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_BLOG_POSTS,
      payload: [],
    });
  }
};

export const createBlogPost = (blogPost) => async (dispatch) => {
  dispatch({type: GET_BLOG_POSTS_LOADING})
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/social/posts/`, blogPost, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
    },
  });
  console.log( response.data)

  if(response.status === 401){
    redirect("/");    
  }

  if (response.data) {
    dispatch({
      type: CREATE_BLOG_POST,
      payload: response.data,
    });
      } else {
        toast.error("Error creating blog post", {
          type: toast.TYPE.PRIMARY,
          style: {
            backgroundColor: "#e4fbf5",
            borderColor: "#aef4e1",
            border: "1px solid #aef4e1",
            borderRadius: "4px",
            fontColor: '#19bc90',
            marginLeft: "-130px"
          },
          bodyClassName: "text-sm text-success "
        })
      }
  } catch(error) {
    toast.error("Error creating blog post", {
      type: toast.TYPE.PRIMARY,
      style: {
        backgroundColor: "#e4fbf5",
        borderColor: "#aef4e1",
        border: "1px solid #aef4e1",
        borderRadius: "4px",
        fontColor: '#19bc90',
        marginLeft: "-130px"
      },
      bodyClassName: "text-sm text-success "
    })
  }
}

export const deleteBlogPost = (data) => async (dispatch) => {
  dispatch({type: GET_BLOG_POSTS_LOADING})
  console.log(data, "data from blog api >>>>>>");
  try{
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/social/posts/${data.id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    })

    console.log( response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if( response.data?.results.length === 200 ){
      const blogpost = {
        id: response.data.id
      }
      dispatch({
        type: DELETE_BLOG_POST,
        payload: blogpost,
      })
    } else {
      dispatch({
        type: DELETE_BLOG_POST,
        payload: [],
        loading: false,
      })
    }
  } catch(error){
    dispatch({
      type: DELETE_BLOG_POST
    })  
  }
}

export const updateBlogPost = (data) => async (dispatch) => {
  dispatch({type: GET_BLOG_POSTS_LOADING})
  console.log(data, "data from blog api >>>>>>");
  try{
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/social/posts/${data.id}/`, data.formData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    })

    console.log( response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if( response.data?.results.length === 200 ){
      const blogpost = {
        id: response.data.id
      }
      dispatch({
        type: UPDATE_BLOG_POST,
        payload: blogpost,
      })
    } else {
      dispatch({
        type: UPDATE_BLOG_POST,
        payload: [],
        loading: false,
      })
    }
  } catch(error){
    dispatch({
      type: UPDATE_BLOG_POST
    })  
  }
}