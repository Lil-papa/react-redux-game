import { TypographyText } from "../../../UI"

import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
           <TypographyText className={styles.text}>
              <span>Congratulations! <br /> You win!</span>
            </TypographyText>
        
      ) : (
        
          <TypographyText className={styles.text}>
            <span>My regrets. <br /> You have lost this game</span>
          </TypographyText>
      )
      }
    </div>
  )
}

export default ResultMessage