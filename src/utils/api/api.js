import axios from "axios";

let API_URL = process.env.REACT_APP_API_LINK;

export default function callApi(
  endpoint,
  method = "get",
  body = {},
  contentType = "application/json",
) {
  let headers = {};
  headers["content-type"] = contentType;
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
}
