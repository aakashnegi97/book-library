import { SET_BOOK_LIST, SET_CURRENT_PAGE } from "../action/actionTypes";

const initialState = {
  books: [],
  totalPages: 0,
  pageSize: 0,
  currentPage: 0,
  totalElements: 0,
  sortDirection: "DESC",
  search: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return updateState(state, { ...(payload || {}) });
    case SET_BOOK_LIST:
      return updateState(state, { books: payload });
    default:
      return state;
  }
};
export default reducer;

const updateState = (state, field) => {
  return { ...state, ...field };
};
