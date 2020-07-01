import { all } from "redux-saga/effects"

import { getExampleDataWatcher } from "./Home/saga"

export default function* rootSaga() {
  yield all([getExampleDataWatcher()])
}
