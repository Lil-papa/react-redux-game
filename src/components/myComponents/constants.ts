import type { IMapArrowCodes, IEndGameConditions } from "./types"

export const INTERVAL_TIME: number = 1500

export const MAP_ARROW_CODES: IMapArrowCodes = {
    ArrowUp: "⬆️",
    ArrowDown: "⬇️",
    ArrowRight: "➡️",
    ArrowLeft: "⬅️",
  }

  export const ARR_ARROW_CODES = Object.keys(MAP_ARROW_CODES)

  export const END_GAME_CONDITIONS: IEndGameConditions = {
    SUCCESS_COUNT: 3,
    UNSUCCESS_COUNT: 3, 
  }