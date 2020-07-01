/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from "redux-saga/effects"
import {
  LOAD_HOW_IT_WORKS,
  LOAD_HOW_IT_WORKS_ERROR,
  LOAD_HOW_IT_WORKS_PA100,
  LOAD_HOW_IT_WORKS_PA100_ERROR,
  LOAD_WHY_CHOOSE_US,
  LOAD_WHY_CHOOSE_US_ERROR,
  LOAD_COMMENT,
  LOAD_COMMENT_ERROR,
  LOAD_CONTACT_US,
  LOAD_CONTACT_US_ERROR,
  LOAD_PLAN_SUMMARY,
  LOAD_PLAN_SUMMARY_ERROR,
} from "../constant"
import {
  getHowItWorksLoaded,
  getHowItWorksPA100Loaded,
  getWhyChooseUsLoaded,
  getCommentLoaded,
  getContactUsLoaded,
  getPlanSummaryLoaded,
} from "../action"
import {
  getHowItWorks,
  getHowItWorksData,
  getHowItWorksPA100,
  getHowItWorksPA100Data,
  getWhyChooseUs,
  getWhyChooseUsData,
  getComment,
  getCommentData,
  getContactUs,
  getContactUsData,
  getPlanSummary,
  getPlanSummaryData,
} from "../saga"

import {
  getHowItWorksApi,
  getHowItWorksPA100Api,
  getWhyChooseUsApi,
  getCommentApi,
  getContactUsApi,
  getPlanSummaryApi,
} from "../../../services/content"

describe("Home Saga", () => {
  describe("Get How It Works", () => {
    let getHowItWorksGenerator
    beforeEach(() => {
      getHowItWorksGenerator = getHowItWorks()
    })
    it("should call getHowItWorksLoaded action if it request data successfully", () => {
      expect(getHowItWorksGenerator.next().value).toEqual(
        call(getHowItWorksApi)
      )
      expect(getHowItWorksGenerator.next().value).toEqual(
        put(getHowItWorksLoaded())
      )
    })
    it("should call put with error action if it request data fail", () => {
      getHowItWorksGenerator.next()
      expect(
        getHowItWorksGenerator.throw(new Error("Some error")).value
      ).toEqual(
        put({
          type: LOAD_HOW_IT_WORKS_ERROR,
        })
      )
    })
    it("should start task to watch for getHowItWorks action", () => {
      const getHowItWorksSaga = getHowItWorksData()
      const takeLatestDescriptor = getHowItWorksSaga.next().value
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_HOW_IT_WORKS, getHowItWorks)
      )
    })
  })
  describe("Get How It Works PA100", () => {
    let getHowItWorkPA100sGenerator
    beforeEach(() => {
      getHowItWorkPA100sGenerator = getHowItWorksPA100()
    })
    it("should call getHowItWorksPA100Loaded action if it request data successfully", () => {
      expect(getHowItWorkPA100sGenerator.next().value).toEqual(
        call(getHowItWorksPA100Api)
      )
      expect(getHowItWorkPA100sGenerator.next().value).toEqual(
        put(getHowItWorksPA100Loaded())
      )
    })
    it("should call put with error action if it request data fail", () => {
      getHowItWorkPA100sGenerator.next()
      expect(
        getHowItWorkPA100sGenerator.throw(new Error("Some error")).value
      ).toEqual(
        put({
          type: LOAD_HOW_IT_WORKS_PA100_ERROR,
        })
      )
    })
    it("should start task to watch for getHowItWorksPA100 action", () => {
      const getHowItWorksPA100Saga = getHowItWorksPA100Data()
      const takeLatestDescriptor = getHowItWorksPA100Saga.next().value
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_HOW_IT_WORKS_PA100, getHowItWorksPA100)
      )
    })
  })
  describe("Get Why Choose Us", () => {
    let getWhyChooseUsGenerator
    beforeEach(() => {
      getWhyChooseUsGenerator = getWhyChooseUs()
    })
    it("should call getWhyChooseUsLoaded action if it request data successfully", () => {
      expect(getWhyChooseUsGenerator.next().value).toEqual(
        call(getWhyChooseUsApi)
      )
      expect(getWhyChooseUsGenerator.next().value).toEqual(
        put(getWhyChooseUsLoaded())
      )
    })
    it("should call put with error action if it request data fail", () => {
      getWhyChooseUsGenerator.next()
      expect(
        getWhyChooseUsGenerator.throw(new Error("Some error")).value
      ).toEqual(
        put({
          type: LOAD_WHY_CHOOSE_US_ERROR,
        })
      )
    })
    it("should start task to watch for getWhyChooseUs action", () => {
      const getWhyChooseUsSaga = getWhyChooseUsData()
      const takeLatestDescriptor = getWhyChooseUsSaga.next().value
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_WHY_CHOOSE_US, getWhyChooseUs)
      )
    })
  })

  describe("Get Comment", () => {
    let getCommentGenerator
    beforeEach(() => {
      getCommentGenerator = getComment()
    })
    it("should call getCommentLoaded action if it request data successfully", () => {
      expect(getCommentGenerator.next().value).toEqual(call(getCommentApi))
      expect(getCommentGenerator.next().value).toEqual(put(getCommentLoaded()))
    })
    it("should call put with error action if it request data fail", () => {
      getCommentGenerator.next()
      expect(getCommentGenerator.throw(new Error("Some error")).value).toEqual(
        put({
          type: LOAD_COMMENT_ERROR,
        })
      )
    })
    it("should start task to watch for getComment action", () => {
      const getCommentSaga = getCommentData()
      const takeLatestDescriptor = getCommentSaga.next().value
      expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_COMMENT, getComment))
    })
  })
  describe("Get ContactUs", () => {
    let getContactUsGenerator
    beforeEach(() => {
      getContactUsGenerator = getContactUs()
    })
    it("should call getContactUsLoaded action if it request data successfully", () => {
      expect(getContactUsGenerator.next().value).toEqual(call(getContactUsApi))
      expect(getContactUsGenerator.next().value).toEqual(
        put(getContactUsLoaded())
      )
    })
    it("should call put with error action if it request data fail", () => {
      getContactUsGenerator.next()
      expect(
        getContactUsGenerator.throw(new Error("Some error")).value
      ).toEqual(
        put({
          type: LOAD_CONTACT_US_ERROR,
        })
      )
    })
    it("should start task to watch for getContactUs action", () => {
      const getContactSaga = getContactUsData()
      const takeLatestDescriptor = getContactSaga.next().value
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_CONTACT_US, getContactUs)
      )
    })
  })
  describe("Get getPlanSummary", () => {
    let getPlanSummaryGenerator
    beforeEach(() => {
      getPlanSummaryGenerator = getPlanSummary()
    })
    it("should call getPlanSummaryLoaded action if it request data successfully", () => {
      expect(getPlanSummaryGenerator.next().value).toEqual(
        call(getPlanSummaryApi)
      )
      expect(getPlanSummaryGenerator.next().value).toEqual(
        put(getPlanSummaryLoaded())
      )
    })
    it("should call put with error action if it request data fail", () => {
      getPlanSummaryGenerator.next()
      expect(
        getPlanSummaryGenerator.throw(new Error("Some error")).value
      ).toEqual(
        put({
          type: LOAD_PLAN_SUMMARY_ERROR,
        })
      )
    })
    it("should start task to watch for getPlanSummary action", () => {
      const getPlanData = getPlanSummaryData()
      const takeLatestDescriptor = getPlanData.next().value
      expect(takeLatestDescriptor).toEqual(
        takeLatest(LOAD_PLAN_SUMMARY, getPlanSummary)
      )
    })
  })
})
