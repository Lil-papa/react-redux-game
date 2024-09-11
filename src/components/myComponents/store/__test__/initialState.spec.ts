import myComponentReducer, { initialState } from "../slices";

describe("initial state", () => {
    it("check initial state", () => {
        const setInitialState = myComponentReducer(undefined, {type: "unknown"})

        expect(setInitialState).toEqual(initialState)
    })
})

