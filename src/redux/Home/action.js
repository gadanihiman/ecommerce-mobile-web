import {
  LOAD_HOMEPAGE_DATA,
  LOAD_HOMEPAGE_DATA_SUCCESS,
  CHANGE_SEARCH_TEXT,
  LOAD_SEARCH_DATA,
  LOAD_SEARCH_DATA_SUCCESS,
  PURCHASE_PRODUCT,
  WISHLIST_PRODUCT,
} from "./constant"

export const getHomePageData = () => ({
  type: LOAD_HOMEPAGE_DATA,
})

export const getHomePageDataLoaded = data => ({
  type: LOAD_HOMEPAGE_DATA_SUCCESS,
  homepageData: data,
})

export const changeSearchText = payload => ({
  type: CHANGE_SEARCH_TEXT,
  payload
})

export const getSearchData = payload => ({
  type: LOAD_SEARCH_DATA,
  payload
})

export const getSearchDataSuccess = payload => ({
  type: LOAD_SEARCH_DATA_SUCCESS,
  payload,
})

export const purchaseProduct = payload => ({
  type: PURCHASE_PRODUCT,
  payload,
})

export const wishlistProduct = payload => ({
  type: WISHLIST_PRODUCT,
  payload,
})
