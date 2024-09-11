import { useAppSelector } from "../../../app/hooks"
import RandomArrows from "./RandomArrows"
import WelcomeText from "./WelcomeText"

import { TypographyHeader } from "../../UI"

export interface IRandomKeysProps{
  isTimerActive: boolean
}
  
  const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
    const { isTimerActive } = props

    const state = useAppSelector((state) => state.myComponent)
  
    return (
      <>
        <TypographyHeader>Random keys</TypographyHeader>
        
        {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
      </>
    )
  }
  
  export default RandomKeys
  