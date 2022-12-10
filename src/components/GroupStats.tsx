import Stats from './Stats'

interface Props {
  Group: string,
  GroupStatsData: any[]
  // id: number,
  // Flag: string,
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

function GroupStats(props: Props) {
  let {Group, GroupStatsData} = props

  GroupStatsData = GroupStatsData.sort(function(x,y){
    return y.Points - x.Points
  })

  return (
    <>
    <h2>Group {Group}</h2>
    
    {GroupStatsData && GroupStatsData.map(({ id, Flag, Country, Played, Win, Draw, Lose, Points, GoalsFor, GoalsAgainst, GoalDifference, AdvanceToNextRound }) => 
      <Stats
        key={id}
        Flag={Flag}
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

export default GroupStats
