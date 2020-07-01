/* eslint-disable no-unused-vars */
import { get, post } from "@aia-digital/request-module"
import API from "../api"

jest.mock("@aia-digital/request-module")

describe("API", () => {
  let api
  const url = "mock_url"
  const subscriptionKey = "mock_key"
  beforeEach(() => {
    api = new API(url, subscriptionKey)
  })

  it("should be instance of API", () => {
    expect(api).toBeInstanceOf(API)
  })

  it("should have properties BASE_URL and subscription_key", () => {
    expect(api.BASE_URL).toBe(url)
    expect(api.subscription_key).toBe(subscriptionKey)
  })

  it("should have properties BASE_URL without parsing the BASE_URL", () => {
    api = new API(null, subscriptionKey)
    expect(api.BASE_URL).not.toBe(url)
    expect(api.subscription_key).toBe(subscriptionKey)
  })

  it("should have properties subscription_key without parsing the subscription_key", () => {
    api = new API(url, null)
    expect(api.BASE_URL).toBe(url)
    expect(api.subscription_key).not.toBe(subscriptionKey)
  })

  it("should call request post method with body", () => {
    const params = {
      method: "post",
      headers: {},
      body: {
        name: "test",
      },
    }
    api
      .post(params)
      .then(() => "good")
      .catch(() => "error")
    expect(post).toHaveBeenCalled()
  })

  it("should call request get method", () => {
    const params = {
      method: "get",
      params: {
        smoke: true,
      },
    }
    api
      .get(params)
      .then(() => "good")
      .catch(() => "error")
    expect(get).toHaveBeenCalled()
  })

  // Why Function still coverage still 90 for api?
  // Since all the integration test we do in product.service.test.js is using get
  // Need to have an api which use post service to make that 100
})
