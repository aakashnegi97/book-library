import callApi from "../../utils/api/api";
import { config } from "../../utils/constants";
import {
  DELETE_NOTIFICATION,
  SET_ACTIVE_TAB,
  SET_BOOK_LIST,
  SET_CURRENT_PAGE,
  SET_NOTIFICATION,
  SET_UPDATE_DATA,
} from "./actionTypes";

export const setActiveTab = (data) => {
    return {
      type: SET_ACTIVE_TAB,
      payload: data,
    };
  };

const setBookList = (data) => {
  return {
    type: SET_BOOK_LIST,
    payload: data,
  };
};

export const setNotification = (data) => {
  return {
    type: SET_NOTIFICATION,
    payload: data,
  };
};

export const deleteNotification = (data) => {
  return {
    type: DELETE_NOTIFICATION,
    payload: data,
  };
};

const setCurrentPage = (data) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: data,
  };
};

export const getBooks = (request) => {
  return (dispatch, getState) => {
    const bookReducerData = getState().bookReducer;
    let endpoint = `books?page=${request?.page || 1}&DIR=${
      request?.sortDirection || bookReducerData?.sortDirection
    }`;
    if (request?.search) {
      endpoint += "&title=" + request?.search;
    }
    return callApi(endpoint, "get")
      .then((res) => {
        const { pagination, data } = res.data;
        if (
          pagination?.currentPage != bookReducerData?.currentPage ||
          pagination?.totalPages != bookReducerData?.totalPages ||
          pagination?.pageSize != bookReducerData?.pageSize ||
          pagination?.totalElements != bookReducerData?.totalElements ||
          pagination?.sortDirection != bookReducerData?.sortDirection
        ) {
          if (request?.search) {
            pagination.search = request?.search;
          }
          dispatch(
            setCurrentPage({
              ...(pagination || {}),
            })
          );
        }
        dispatch(setBookList(data));
      })
      .catch((err) => {
        dispatch(setNotification(config.notifyMessages.fetchError));
      });
  };
};

export const setUpdateBook = (data) => {
  return {
    type: SET_UPDATE_DATA,
    payload: data,
  };
};

export const updateBooks = (request) => {
  return (dispatch, getState) => {
    let endpoint = `books/${request?.id}`;
    let pagination = getState().bookReducer;
    return callApi(endpoint, "put", request)
      .then((res) => {
        const { status, message } = res.data;
        dispatch(
          getBooks({
            page: pagination?.currentPage || "",
            search: pagination?.search || "",
          })
        );
        dispatch(setUpdateBook(null));
        dispatch(setNotification(config.notifyMessages.updateSuccess));
      })
      .catch((err) => {
        dispatch(setNotification(config.notifyMessages.updateError));
      });
  };
};

export const createBook = (request) => {
  return (dispatch, getState) => {
    let endpoint = `books`;
    let pagination = getState().bookReducer;
    return callApi(endpoint, "post", request)
      .then((res) => {
        const { status, message } = res.data;
        dispatch(
          getBooks({
            page: pagination?.currentPage || "",
            search: pagination?.search || "",
          })
        );
        dispatch(setNotification(config.notifyMessages.createSuccess));
      })
      .catch((err) => {
        dispatch(setNotification(config.notifyMessages.createError));
      });
  };
};
