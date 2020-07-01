import { takeLatest, put, call } from "redux-saga/effects"
import { LOAD_EXAMPLES_DATA, LOAD_EXAMPLES_DATA_ERROR } from "./constant"
import { getExampleLoaded } from "./action"

import { getExampleDataApi } from "../../services/content"

/**
 * GET HOW IT WORKS
 * return json mocks directly
 * @export
 */
export function* getExampleData() {
  try {
    const { data } = yield call(getExampleDataApi)
    yield put(getExampleLoaded(data))
  } catch (error) {
    yield put({
      type: LOAD_EXAMPLES_DATA_ERROR,
    })
  }
}

/**
 * GET HOW IT WORKS DATA
 * calling function to take latest data from product API
 * @export
 */
export function* getExampleDataWatcher() {
  yield takeLatest(LOAD_EXAMPLES_DATA, getExampleData)
}
