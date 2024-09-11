import { TypographyHeader, TypographyText } from "../../UI"

const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader><span>↑↓→← Arrow-game description</span></TypographyHeader>

      <TypographyText>
        <span>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.</span>
      </TypographyText>

      <TypographyText>
      <span>After three consecutive successful hits - game won, after three errors -
        lost.</span>
      </TypographyText>
    </div>
  )
}

export default Description