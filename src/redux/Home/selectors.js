/* eslint-disable import/prefer-default-export */
import { createSelector } from "reselect"

const selectHome = (state) => state.home

const selectHomePageData = (property = "homepageData") =>
  createSelector(selectHome, homeState => homeState.get(property))

export { selectHomePageData }
