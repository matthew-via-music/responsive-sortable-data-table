interface Props {
  Flag?: string,
  Country?: string,
  Played: number,
  Win: number,
  Draw: number,
  Lose: number,
  Points: number,
  GoalsFor: number,
  GoalsAgainst: number,
  GoalDifference: number,
  AdvanceToNextRound: string
}

function Stats(props: Props) {
  const {Flag, Country, Played, Win, Draw, Lose, Points, GoalsFor, GoalsAgainst, GoalDifference, AdvanceToNextRound} = props
  return (
    <>
      <table>
        <thead>
        <tr>
          <td style={{backgroundImage: `url(${Flag})`}} className="flag">{/* Country Flag */}</td>
          <td className="hideOnMobile">Played</td>
          <td>Win</td>
          <td>Draw</td>
          <td className="hideOnMobile">Lose</td>
          <td>Points</td>
          <td className="hideOnMobile">Goals For</td>
          <td className="hideOnMobile">Goals Against</td>
          <td className="hideOnMobile">Goal Difference</td>
          <td className="hideOnMobile">Advance To Next Round</td>
        </tr>
        </thead>      
{/*  */}
{/*  */}
        <tbody>
        <tr>
          <td className="countryRowStats">{Country}</td>
          <td className="hideOnMobile">{Played}</td>
          <td>{Win}</td>
          <td>{Draw}</td>
          <td className="hideOnMobile">{Lose}</td>
          <td>{Points}</td>
          <td className="hideOnMobile">{GoalsFor}</td>
          <td className="hideOnMobile">{GoalsAgainst}</td>
          <td className="hideOnMobile">{GoalDifference}</td>
          <td className="hideOnMobile">{AdvanceToNextRound}</td>
        </tr>
      </tbody>
      </table>
    </>
  )
}

export default Stats
