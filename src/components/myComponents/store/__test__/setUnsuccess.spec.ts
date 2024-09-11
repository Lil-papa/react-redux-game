import myComponentReducer, {
    initialState,
    setUnsuccess,
    setSteps,
    setCurrentStep,
  } from "../slices"
  
  describe("reducer setUnsuccess", () => {
    it("check totalUnsuccessful and success", () => {
      const setCurrentStepReducerState = myComponentReducer(
        initialState,
        setCurrentStep(),
      )
  
      const setStepsReducerState = myComponentReducer(
        setCurrentStepReducerState,
        setSteps(),
      )
  
      const setUnsuccessReducerState = myComponentReducer(
        setStepsReducerState,
        setUnsuccess(),
      )
  
      expect(setUnsuccessReducerState.totalUnsuccessful).toBe(1)
      expect(setUnsuccessReducerState.steps[0].success).toBe(false)
    })
  })