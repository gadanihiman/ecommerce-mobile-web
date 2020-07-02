import { all } from "redux-saga/effects"

import { getHomepageDataWatcher } from "./Home/saga"

export default function* rootSaga() {
  yield all([getHomepageDataWatcher()])
}
