interface Props {
  TeamA: string,
  TeamB: string,
  Score: string,
  MatchDate: string
}

function Matches(props: Props) {

  const {TeamA, TeamB, Score, MatchDate} = props

  return (
    <>
      <table className="matches">
        <thead>
        <tr>
          <td className="hideOnMobile blank"></td>
          <td className="hideOnTablet">Score</td>
          <td className="hideOnMobile blank"></td>
          <td className="hideOnTablet">Match Date</td>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td className="teamA countryRowMatches">{TeamA}</td>
          <td className="score">{Score}</td>
          <td className="teamB countryRowMatches">{TeamB}</td>
          <td className="hideOnTablet">{MatchDate}</td>
        </tr>
      </tbody>
      </table>
    </>
  )
}

export default Matches
