import Matches from './Matches'

interface Props {
  Group: string,
}

function GroupAMatches(props: Props) {
  const {Group} = props
  return (
    <>
    <h2>Group {Group} Matches</h2>
      <Matches 
        TeamA="Qatar"
        Score="0:2"
        TeamB="Ecuador"
        MatchDate="20.11.22"
      />
      <Matches 
        TeamA="Senegal"
        Score="0:2"
        TeamB="Netherlands"
        MatchDate="21.11.22"
      />
      <Matches 
        TeamA="Qatar"
        Score="1:3"
        TeamB="Senegal"
        MatchDate="25.11.22"
      />
      <Matches 
        TeamA="Netherlands"
        Score="1:1"
        TeamB="Ecuador"
        MatchDate="25.11.22"
      />
      <Matches 
        TeamA="Netherlands"
        Score="-:-"
        TeamB="Qatar"
        MatchDate="29.11.22"
      />
      <Matches 
        TeamA="Ecuador"
        Score="-:-"
        TeamB="Senegal"
        MatchDate="29.11.22"
      />
    </>
  )
}

export default GroupAMatches
  