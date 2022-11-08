import { postConstants } from "../constant";

const initState = {
  posts: [],
  postDetails: {},
  search: [],
  total: 0,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case postConstants.GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload.data.result,
        total: action.payload.data.total,
        loading: false,
      };
    case postConstants.GET_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case postConstants.GET_POST_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.GET_POST_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        postDetails: action.payload.postDetails,
      };
    case postConstants.GET_POST_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case postConstants.DELETE_POST_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.DELETE_POST_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case postConstants.DELETE_POST_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case postConstants.ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case postConstants.ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case postConstants.UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case postConstants.UPDATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case postConstants.GET_SEARCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.GET_SEARCH_POST_SUCCESS:
      return {
        ...state,
        search: action.payload.data.result,
        total: action.payload.data.total,
        loading: false,
      };
    case postConstants.GET_SEARCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
