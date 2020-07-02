import {
  LOAD_HOMEPAGE_DATA,
  LOAD_HOMEPAGE_DATA_SUCCESS
} from "./constant"

export const getHomePageData = () => ({
  type: LOAD_HOMEPAGE_DATA,
})

export const getHomePageDataLoaded = data => ({
  type: LOAD_HOMEPAGE_DATA_SUCCESS,
  homepageData: data,
})
