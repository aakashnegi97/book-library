import callApi from "../../utils/api/api";
import { SET_BOOK_LIST, SET_CURRENT_PAGE } from "./actionTypes";

const setBookList = (data) => {
  return {
    type: SET_BOOK_LIST,
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
    callApi(endpoint, "get")
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
        console.log(err);
      });
  };
};
