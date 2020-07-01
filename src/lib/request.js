import Axios from "axios"
import { requestTimeout, baseURL } from "./constants"

const AxiosInstance = Axios.create({
  baseURL,
  timeout: requestTimeout,
})

/**
 * APIRequest (format header axios)
 * @param {String} url endpoint api
 * @param {String} method method request
 * @param {Object} data
 * @returns {Promise}
 */
const APIRequest = (
  url,
  method = "get",
  data,
  headers = {
    "Content-Type": "application/json",
  }
) => {
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data"
  return AxiosInstance.request({
    url,
    method,
    [dataOrParams]: data,
    headers,
  })
}

export default APIRequest
