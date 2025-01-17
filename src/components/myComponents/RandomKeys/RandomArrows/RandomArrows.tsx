import cn from "classnames"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMyComponentStepsState } from "../../store/types"
import type { IMapArrowCodes } from "../../types"

import stylesCommon from "../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.myComponent)

  const getStylesRandomKeys = (element: IMyComponentStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span className={getStylesRandomKeys(element)} key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows