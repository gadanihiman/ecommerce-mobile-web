/* eslint-disable no-unused-vars */
import { fromJS } from "immutable"
import homeReducer from "../reducer"
import { LOAD_HOW_IT_WORKS_ERROR } from "../constant"
import { getHowItWorks, getHowItWorksLoaded } from "../action"

describe("homeReducer", () => {
  let state

  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      how_it_works: {},
    })
  })

  it("should return the initial state", () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })

  describe("How It Works", () => {
    it("should handle getHowItWorks action correctly", () => {
      const expectedResult = state.set("loading", true)
      expect(homeReducer(state, getHowItWorks())).toEqual(expectedResult)
    })

    it("should handle get getHowItWorkstLoaded action correctly", () => {
      const howItWorks = { foo: "foo" }
      const expectedResult = state
        .set("loading", false)
        .set("how_it_works", fromJS(howItWorks))
      expect(homeReducer(state, getHowItWorksLoaded(howItWorks))).toEqual(
        expectedResult
      )
    })

    it("should handle error action correctly", () => {
      const error = "Something wrong"
      const expectedResult = state.set("loading", false).set("error", error)
      expect(
        homeReducer(state, { type: LOAD_HOW_IT_WORKS_ERROR, error })
      ).toEqual(expectedResult)
    })
  })
})
