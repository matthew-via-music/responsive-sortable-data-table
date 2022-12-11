import { useState } from "react"
import dataFlatId from "../data/DataFlatId"

let dataR = dataFlatId()

console.clear()
// console.dir(data)

// console.clear()
function Page2() {
  const [isActive, setIsActive] = useState(false)
  const [data, setData] = useState(dataR.sort((x:any,y:any) => y.GoalsFor - x.GoalsFor))

  // const sortArray = (type:any) => {
  //   const types = {
  //     Points: "Points",
  //     Win: "Win",
  //     Lose: "Lose",
  //     Draw: "Draw",
  //     GoalsFor: "GoalsFor",
  //     GoalsAgainst: "GoalsAgainst",
  //     GoalDifference: "GoalsDifference",
  //   }
  //   const sortProperty = types[type]
  //   const sorted = [...dataR].sort((a, b) => b[sortProperty] - a[sortProperty])
  //   setData(sorted)
  // }

function Points(){
  setData([...dataR].sort((x:any,y:any) => y.Points - x.Points))
  setIsActive(true)
}
function Win(){
  setData([...dataR].sort((x:any,y:any) => y.Win - x.Win))
}
function Lose(){
  setData([...dataR].sort((x:any,y:any) => y.Lose - x.GoalsFor))
}
function Draw(){
  setData([...dataR].sort((x:any,y:any) => y.Draw - x.Draw))
}
function GoalsFor(){
  setData([...dataR].sort((x:any,y:any) => y.GoalsFor - x.GoalsFor))
}
function GoalsAgainst(){
  setData([...dataR].sort((x:any,y:any) => y.GoalsAgainst - x.GoalsAgainst))
}
function GoalDifference(){
  setData([...dataR].sort((x:any,y:any) => y.GoalDifference - x.GoalDifference))
}

  return (
    <>
      <h1>World Cup 2022</h1>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      
      {/* <select onChange={(e) => sortArray(e.target.value)}>
        <option value="Points">Points</option>
        <option value="Win">Win</option>
        <option value="Lose">Lose</option>
        <option value="Draw">Draw</option>
        <option value="GoalsFor">Goals For</option>
        <option value="GoalsAgainst">Goals Against</option>
        <option value="GoalDifference">Goal Difference</option>
      </select> */}

      <table>
      <thead><tr>
        <th>Country</th>
        <th onClick={()=> Points()} style={{color: (isActive ? "red" : "black")}}>&uarr;&nbsp;Points</th>
        <th onClick={()=> Win()}>&uarr;&nbsp;Win</th>
        <th onClick={()=> Draw()}>&uarr;&nbsp;Draw</th>
        <th onClick={()=> Lose()} className="hideOnTablet">&uarr;&nbsp;Lose</th>
        <th onClick={()=> GoalsFor()}>&uarr;&nbsp;Goals For</th>
        <th onClick={()=> GoalsAgainst()} className="hideOnMobile">&uarr;&nbsp;Goals Against</th>
        <th onClick={()=> GoalDifference()} className="hideOnTablet">&uarr;&nbsp;Goal Difference</th>
        <th className="hideOnTablet">Advance To Next Round</th>
      </tr></thead>
      <tbody>
      {data.map(x => 
        <tr key={x.id}>
          <td>{x.Country}</td>
          <td>{x.Points}</td>
          <td>{x.Win}</td>
          <td>{x.Draw}</td>
          <td className="hideOnTablet">{x.Lose}</td>
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
