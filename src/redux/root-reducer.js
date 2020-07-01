import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form/immutable"
import home from "./Home/reducer"

const rootReducer = {
  form: formReducer,
  home,
}

export default combineReducers(rootReducer)
