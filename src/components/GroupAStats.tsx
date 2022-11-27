import Stats from './Stats'

function GroupAStats() {
  return (
    <>
     <Stats 
        Country="Netherlands"
        Played={2}
        Win={1}
        Draw={1}
        Lose={0}
        Points={4}
        GoalsFor={3}
        GoalsAgainst={1}
        GoalDifference={2}
        AdvanceToNextRound="Yes"
      />
     <Stats 
        Country="Ecuador"
        Played={2}
        Win={1}
        Draw={1}
        Lose={0}
        Points={4}
        GoalsFor={3}
        GoalsAgainst={1}
        GoalDifference={2}
        AdvanceToNextRound="Yes"
      />
     <Stats 
        Country="Senegal"
        Played={2}
        Win={1}
        Draw={0}
        Lose={1}
        Points={3}
        GoalsFor={3}
        GoalsAgainst={3}
        GoalDifference={0}
        AdvanceToNextRound="No"
      />
     <Stats 
        Country="Qatar"
        Played={2}
        Win={0}
        Draw={0}
        Lose={2}
        Points={0}
        GoalsFor={1}
        GoalsAgainst={5}
        GoalDifference={-4}
        AdvanceToNextRound="No"
      />
    </>
  )
}

export default GroupAStats
