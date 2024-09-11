
export interface IMyComponentStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IMyComponentState {
    currentStep: number
    steps: IMyComponentStepsState[]
    totalSuccessful: number
    totalUnsuccessful: number
  }