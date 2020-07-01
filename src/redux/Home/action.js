import { LOAD_EXAMPLES_DATA, LOAD_EXAMPLES_DATA_SUCCESS } from "./constant"

export const getExamplesData = () => ({
  type: LOAD_EXAMPLES_DATA,
})

export const getExampleLoaded = (data) => ({
  type: LOAD_EXAMPLES_DATA_SUCCESS,
  examplesData: data,
})
