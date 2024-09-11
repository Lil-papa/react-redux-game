import myComponentReducer, {
    initialState,
    setCurrentStep,
    resetStore,
  } from "../slices"
  
  describe("reducer resetStore", () => {
    it("check resetStore", () => {
      const setCurrentStepReducerState = myComponentReducer(
        initialState,
        setCurrentStep(),
      )
  
      const resetStoreReducerState = myComponentReducer(
        setCurrentStepReducerState,
        resetStore(),
      )
  
      expect(resetStoreReducerState).toEqual(initialState)
    })
  })