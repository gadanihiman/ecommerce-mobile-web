/* eslint-disable import/prefer-default-export */
import APIRequest from "../lib/request"

export const getExampleDataApi = () => {
  console.log("api getExampleDataApi")
  return APIRequest("/pokemon")
};

// export const getProductApi = async productId => {
//   const api = new API();
//   const body = {
//     path: 'api/',
//     method: 'get',
//     url: `products/${productId}`,
//   };
//   return api.get(body);
// };

// export const getTermsOfUseApi = async () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(TermsOfUseData), 1);
//   });
// };
