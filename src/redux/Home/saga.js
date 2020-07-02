import { takeLatest, put, call } from "redux-saga/effects"
import { get } from "lodash"

import { LOAD_HOMEPAGE_DATA, LOAD_HOMEPAGE_DATA_ERROR } from "./constant"
import { getHomePageDataLoaded } from "./action"
import { getHomepageDataApi } from "../../services/content"

/**
 * GET HOW IT WORKS
 * return json mocks directly
 * @export
 */
export function* getHomepageData() {
  try {
    const data = yield call(getHomepageDataApi);
    console.log('data', data);
    const homepageData = get(data, 'data[0].data', null)
    yield put(getHomePageDataLoaded(homepageData));
  } catch (error) {
    yield put({
      type: LOAD_HOMEPAGE_DATA_ERROR,
    })
  }
}

/**
 * GET HOW IT WORKS DATA
 * calling function to take latest data from product API
 * @export
 */
export function* getHomepageDataWatcher() {
  yield takeLatest(LOAD_HOMEPAGE_DATA, getHomepageData)
}
