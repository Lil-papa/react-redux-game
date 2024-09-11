import myComponentReducer, { initialState, setCurrentStep } from "../slices";

describe("reducer setCurrentStep", () => {
    it("check setCurrentStep", () => {
        const setCurrentStepState = myComponentReducer(initialState, setCurrentStep())

        expect(initialState.currentStep).toBe(0)
        expect(setCurrentStepState.currentStep).toEqual(1)
    })
})
