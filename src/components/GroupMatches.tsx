import Matches from './Matches'

interface Props {
  Group: string,
  GroupMatchesData: any[]
  // id: number,
  // TeamA: string,
  // Score: string,
  // TeamB: string,
  // MatchDate: string
}

function GroupMatches(props: Props) {
  const {Group, GroupMatchesData} = props
  return (
    <>
    <h2>Group {Group} Matches</h2>

    {GroupMatchesData && GroupMatchesData.map(({ id, TeamA, Score, TeamB, MatchDate }) => 
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

export default GroupMatches
  