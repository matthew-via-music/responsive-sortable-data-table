import { useState } from "react"
import dataFlatId from "../data/DataFlatId"

let dataR = dataFlatId()
console.clear()

function Page2() {
  const [accentPoints, setAccentPoints] = useState("green")
  const [accentWin, setAccentWin] = useState("black")
  const [accentLose, setAccentLose] = useState("black")
  const [accentDraw, setAccentDraw] = useState("black")
  const [accentGoalsFor, setAccentGoalsFor] = useState("black")
  const [accentGoalsAgainst, setAccentGoalsAgainst] = useState("black")
  const [accentGoalDifference, setAccentGoalDifference] = useState("black")

  const [order, setOrder] = useState("ASC")
  const [data, setData] = useState(dataR.sort((x:any,y:any) => y.Points - x.Points))

  let points:any, win:any, lose:any, draw:any, goalsFor:any, goalsAgainst:any, goalDifference:any
  let highlight = "green"
  let lowlight = "black"

const sorting = (col:any) => {
  points ? setAccentPoints(highlight) : setAccentPoints(lowlight)
  win ? setAccentWin(highlight) : setAccentWin(lowlight)
  lose ? setAccentLose(highlight) : setAccentLose(lowlight)
  draw ? setAccentDraw(highlight) : setAccentDraw(lowlight)
  goalsFor ? setAccentGoalsFor(highlight) : setAccentGoalsFor(lowlight)
  goalsAgainst ? setAccentGoalsAgainst(highlight) : setAccentGoalsAgainst(lowlight)
  goalDifference ? setAccentGoalDifference(highlight) : setAccentGoalDifference(lowlight)

  if(order === "ASC"){
    const ASC = [...data].sort((a, b) => a[col] > b[col] ? 1 : -1)
    setData(ASC)
    setOrder("DSC")
  } 

  if(order === "DSC"){
    const DSC = [...data].sort((a, b) => a[col] < b[col] ? 1 : -1)
    setData(DSC)
    setOrder("ASC")
  }
}

  return (
    <>
      <h1>World Cup 2022</h1>
      
      <table>
      <thead><tr>
        <th>Country</th>
        
        <th id="1" 
        className="hideOnMobile" 
        onClick={(e)=> {(points = e.currentTarget.id), sorting("Points")}} 
        style={{background: accentPoints, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Points</th>

        <th id="2" 
        onClick={(e)=> {(win = e.currentTarget.id), sorting("Win")}}
        style={{background: accentWin, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Win</th>
        
        <th id="3"
        onClick={(e)=> {(lose = e.currentTarget.id), sorting("Lose")}} 
        style={{background: accentLose, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Lose</th>

        <th id="4"
        onClick={(e)=> {(draw = e.currentTarget.id), sorting("Draw")}} 
        style={{background: accentDraw, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Draw</th>

        <th id="5" 
        onClick={(e)=> {(goalsFor = e.currentTarget.id), sorting("GoalsFor")}} 
        style={{background: accentGoalsFor, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Goals For</th>

        <th id="6" 
        className="hideOnMobile" 
        onClick={(e)=> {(goalsAgainst = e.currentTarget.id), sorting("GoalsAgainst")}} 
        style={{background: accentGoalsAgainst, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Goals Against</th>

        <th id="7" 
        className="hideOnTablet" 
        onClick={(e)=> {(goalDifference = e.currentTarget.id), sorting("GoalDifference")}} 
        style={{background: accentGoalDifference, color: "white"}}><span>&darr;&uarr;&nbsp;</span>Goal Difference</th>

        <th className="hideOnTablet" style={{background: "black", color: "white"}}>Advance To Next Round</th>

      </tr></thead>
      <tbody>
      {data.map(x => 
        <tr key={x.id}>
          <td>{x.Country}</td>
          <td className="hideOnMobile">{x.Points}</td>
          <td>{x.Win}</td>
          <td>{x.Lose}</td>
          <td>{x.Draw}</td>
          <td>{x.GoalsFor}</td>
          <td className="hideOnMobile">{x.GoalsAgainst}</td>
          <td className="hideOnTablet">{x.GoalDifference}</td>
          <td className="hideOnTablet">{x.AdvanceToNextRound}</td>
        </tr>
      )}</tbody>
      </table>
    </>
  )
}

export default Page2
