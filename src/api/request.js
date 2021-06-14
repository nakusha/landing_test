import axios from "axios";
import constants from "constants/constants";
import constants_api from "constants/constants_api";
import { getCookie } from "./FireBaseAuth";

const TIMEOUT = 50000;

const httpConfig = {
  baseURL: constants_api.api_url,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
    ContentType: "application/json;charset=UTF-8",
  },
  responseType: "json",
  withCredentials: true,
};

export const axiosInstance = axios.create(httpConfig);
/**
 * Returns a Axios Request Promise
 * method : get, post, put, patch, delete
 */
export default async function request({ url, method, data, _config }) {
  var idtoken = getCookie(constants.key_id_token)
    ? getCookie(constants.key_id_token)
    : false;
  const config = {
    ...(_config || {}),
    headers: {
      idToken: idtoken || "",
    },
  };

  switch (method) {
    case "post":
      console.log("=========================================================");
      console.log("post Data : ", url, data, config);
      var result = await axiosInstance.post(url, data, config);
      console.log(result);
      console.log("=========================================================");
      return result;
    case "patch":
      return axiosInstance.patch(url, data, config);
    case "put":
      return axiosInstance.put(url, data, config);
    case "delete":
      return axiosInstance.delete(url, config);
    case "file":
      return axiosInstance.post(url, data, {
        headers: {
          idToken: idtoken,
          ContentType: "multipart/form-data",
        },
      });
    case "image":
      return axiosInstance.get(url, {
        responseType: "blob",
      });
    default:
      return axiosInstance.get(url, { ...config, params: data });
  }
}
