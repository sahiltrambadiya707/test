import { postConstants } from "../constant";
import Axios from "../../helpers/axios";
import { toast } from "react-toastify";

export const getPost = (page, countPerPage) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.GET_POST_REQUEST });
      await Axios.get(`post?page=${page}&limit=${countPerPage}`)
        .then((res) => {
          dispatch({
            type: postConstants.GET_POST_SUCCESS,
            payload: { data: res.data.payload },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.GET_POST_FAILURE,
            payload: { error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.GET_POST_FAILURE,
        payload: { error },
      });
    }
  };
};

export const getPostDetailsById = (postId) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.GET_POST_DETAILS_BY_ID_REQUEST });
    try {
      await Axios.get(`/post/getById/${postId}`)
        .then((res) => {
          dispatch({
            type: postConstants.GET_POST_DETAILS_BY_ID_SUCCESS,
            payload: { postDetails: res.data.payload.result },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.GET_POST_DETAILS_BY_ID_FAILURE,
            payload: { error: error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.GET_POST_DETAILS_BY_ID_FAILURE,
        payload: { error: error },
      });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.DELETE_POST_BY_ID_REQUEST });
      await Axios.delete(`post/delete/` + id)
        .then((res) => {
          dispatch({
            type: postConstants.DELETE_POST_BY_ID_SUCCESS,
            payload: { data: res.data.payload },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.DELETE_POST_BY_ID_FAILURE,
            payload: { error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.DELETE_POST_BY_ID_FAILURE,
        payload: { error },
      });
    }
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.ADD_POST_REQUEST });
    try {
      await Axios.post(`post/create`, data)
        .then((res) => {
          dispatch({
            type: postConstants.ADD_POST_SUCCESS,
            payload: { data: res.data.payload },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.ADD_POST_FAILURE,
            payload: { error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.ADD_POST_FAILURE,
        payload: { error },
      });
    }
  };
};

export const updatePost = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.UPDATE_POST_REQUEST });
    try {
      await Axios.put(`post/update/${id}`, data)
        .then((res) => {
          dispatch({
            type: postConstants.UPDATE_POST_SUCCESS,
            payload: { data: res.data.payload },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.UPDATE_POST_FAILURE,
            payload: { error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.ADD_POST_FAILURE,
        payload: { error },
      });
    }
  };
};

export const searchPost = (page, countPerPage, search) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.GET_SEARCH_POST_REQUEST });
      await Axios.get(`post/search?page=${page}&limit=${countPerPage}&search=${search}`)
        .then((res) => {
          dispatch({
            type: postConstants.GET_SEARCH_POST_SUCCESS,
            payload: { data: res.data.payload },
          });
        })
        .catch((error) => {
          toast.error("something went worng...!");
          dispatch({
            type: postConstants.GET_SEARCH_POST_FAILURE,
            payload: { error },
          });
        });
    } catch (error) {
      toast.error("something went worng...!");
      dispatch({
        type: postConstants.GET_SEARCH_POST_FAILURE,
        payload: { error },
      });
    }
  };
};
