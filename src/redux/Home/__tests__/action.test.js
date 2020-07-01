import { getHowItWorks, getHowItWorksLoaded } from "../action"

describe("Action", () => {
  it("should return object getHowItWorks", () => {
    const result = getHowItWorks()
    expect(result).toEqual({ type: "LOAD_HOW_IT_WORKS" })
  })

  it("should return object getHowItWorksLoaded", () => {
    const result = getHowItWorksLoaded({})
    expect(result).toEqual({
      type: "LOAD_HOW_IT_WORKS_SUCCESS",
      how_it_works: {},
    })
  })
})
