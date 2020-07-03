import { all } from "redux-saga/effects"

import { getHomepageDataWatcher, findDataWatcher } from "./Home/saga"

export default function* rootSaga() {
  yield all([
    getHomepageDataWatcher(),
    findDataWatcher(),
  ])
}
