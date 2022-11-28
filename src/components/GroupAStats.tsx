import data from "./groupAStats.json"
import Stats from './Stats'

interface Props {
  Group: string,
  // id: number,
  // Country: string,
  // Played: number, 
  // Win: number, 
  // Draw: number, 
  // Lose: number, 
  // Points: number, 
  // GoalsFor: number, 
  // GoalsAgainst: number, 
  // GoalDifference: number, 
  // AdvanceToNextRound: string,
}

function GroupAStats(props: Props) {
  const {Group} = props
  return (
    <>
    <h2>Group {Group}</h2>

    {data && data.map(({ id, Country, Played, Win, Draw, Lose, Points, GoalsFor, GoalsAgainst, GoalDifference, AdvanceToNextRound }) => 
      <Stats
        key={id}
        Country={Country}
        Played={Played}
        Win={Win}
        Draw={Draw}
        Lose={Lose}
        Points={Points}
        GoalsFor={GoalsFor}
        GoalsAgainst={GoalsAgainst}
        GoalDifference={GoalDifference}
        AdvanceToNextRound={AdvanceToNextRound}
      />
    )}
    </>
  )
}

export default GroupAStats
