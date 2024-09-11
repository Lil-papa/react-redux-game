import type { Action, ThunkAction } from "@reduxjs/toolkit"

import { configureStore } from "@reduxjs/toolkit"

import myComponentReducer from "../components/myComponents/store/slices"

  export const store = configureStore({
    reducer: {
      myComponent: myComponentReducer,
    },
  })



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action<string>
>
