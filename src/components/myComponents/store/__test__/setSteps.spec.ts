import myComponentReducer, { initialState, setCurrentStep, setSteps } from "../slices";

describe("reducer setSteps", () => {
    it("check steps", () => {
      const setCurrentStepReducerState = myComponentReducer(
        initialState,
        setCurrentStep(),
      )
  
      const setStepsReducerState = myComponentReducer(
        setCurrentStepReducerState,
        setSteps(),
      )
  
      const firstStep = {
        step: 1,
        currentValue: setStepsReducerState.steps[0].currentValue,
        enteredValue: null,
        success: null,
      }
  
      expect(initialState.steps.length).toBe(0)
      expect(setStepsReducerState.steps.length).toBe(1)
      expect(setStepsReducerState.steps[0]).toEqual(firstStep)
    })
})
