/* eslint-disable import/prefer-default-export */
import { createSelector } from "reselect"

const selectHome = (state) => state.home

const selectExamplesData = (property = "examplesData") =>
  createSelector(selectHome, (homeState) => homeState.get(property))

export { selectExamplesData }
