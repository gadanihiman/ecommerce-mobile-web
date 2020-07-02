import { fromJS } from "immutable"
import {
  LOAD_HOMEPAGE_DATA,
  LOAD_HOMEPAGE_DATA_SUCCESS,
  LOAD_HOMEPAGE_DATA_ERROR,
} from "./constant"

const initialState = fromJS({
  loading: false,
  error: false,
  homepageData: {
    category: [],
    productPromo: []
  },
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOMEPAGE_DATA:
      return state.set("loading", true)

    case LOAD_HOMEPAGE_DATA_SUCCESS:
      return state
        .set("loading", false)
        .set("homepageData", fromJS(action.homepageData))

    case LOAD_HOMEPAGE_DATA_ERROR:
      return state.set("loading", false).set("error", action.error)

    default:
      return state
  }
}
