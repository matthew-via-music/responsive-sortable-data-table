import data from "./groupAMatches.json"
import Matches from './Matches'

interface Props {
  Group: string,
  // id: number,
  // TeamA: string,
  // Score: string,
  // TeamB: string,
  // MatchDate: string
}

function GroupAMatches(props: Props) {
  const {Group} = props
  return (
    <>
    <h2>Group {Group} Matches</h2>

    {data && data.map(({ id, TeamA, Score, TeamB, MatchDate }) => 
      <Matches 
        key={id}
        TeamA={TeamA}
        Score={Score}
        TeamB={TeamB}
        MatchDate={MatchDate}
      />
    )}
    </>
  )
}

export default GroupAMatches
  