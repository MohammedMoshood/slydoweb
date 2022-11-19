import React from 'react'
import  {CardContainer , Card , CardText , } from "../../../styles/FrontPage/SectionAElements"

const SavingsCard = ({icon , text , style}) => {
  return (
    <CardContainer>
        <Card style={style}>{icon}</Card>
        <CardText> {text} </CardText>
    </CardContainer>
  )
}

export default SavingsCard