import uuid from "react-uuid";
import {
  DELETE_NOTIFICATION,
  SET_BOOK_LIST,
  SET_CURRENT_PAGE,
  SET_NOTIFICATION,
  SET_UPDATE_DATA,
} from "../action/actionTypes";

const initialState = {
  books: [],
  totalPages: 0,
  pageSize: 0,
  currentPage: 0,
  totalElements: 0,
  sortDirection: "DESC",
  search: "",
  updateBook: null,
  notifications: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return updateState(state, { ...(payload || {}) });
    case SET_BOOK_LIST:
      return updateState(state, { books: payload });
    case SET_UPDATE_DATA:
      return updateState(state, { updateBook: payload });
    case SET_NOTIFICATION:
      return setNotification(state, payload);
    case DELETE_NOTIFICATION:
      return deleteNotification(state, payload);
    default:
      return state;
  }
};
export default reducer;

const updateState = (state, field) => {
  return { ...state, ...field };
};

const setNotification = (state, payload) => {
  let notificationList = [...state.notifications];
  notificationList.push({
    message: payload.message,
    type: payload.type,
    id: uuid(),
  });
  return updateState(state, { notifications: [...notificationList] });
};

const deleteNotification = (state, payload) => {
  let notificationList =
    state?.notifications?.filter((notify) => notify.id != payload) || [];
  return updateState(state, { notifications: [...notificationList] });
};
