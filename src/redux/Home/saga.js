import { takeLatest, put, call } from "redux-saga/effects"
import { get } from "lodash"

import {
  LOAD_HOMEPAGE_DATA,
  LOAD_HOMEPAGE_DATA_ERROR,
  LOAD_SEARCH_DATA,
} from "./constant"
import { getHomePageDataLoaded, getSearchDataSuccess } from "./action"
import { getHomepageDataApi } from "../../services/content"

/**
 * GET Homepage Data
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
 * GET Homepage Data Watcher
 * calling function to take latest data from product API
 * @export
 */
export function* getHomepageDataWatcher() {
  yield takeLatest(LOAD_HOMEPAGE_DATA, getHomepageData)
}

/**
 * GET Search Data
 * @export
 */
export function* findData({ payload: { searchText, allData }}) {
  console.log('allData saga', allData);
  console.log('searchText saga', searchText);
  const dataMatched = allData.filter(item => {
    const title = get(item, 'title', '');
    return title.search(searchText) >= 0;
  });
  console.log('dataMatched', dataMatched);
  yield put(getSearchDataSuccess(dataMatched));
}

/**
 * GET Search Data Watcher
 * @export
 */
export function* findDataWatcher() {
  yield takeLatest(LOAD_SEARCH_DATA, findData)
}