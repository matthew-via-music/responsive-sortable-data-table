import { useEffect, useState } from "react"

interface Props {
  id?:string | number,
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
  const [largeScreen, setLargeScreen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  const {Flag, Country, Played, Win, Draw, Lose, Points, GoalsFor, GoalsAgainst, GoalDifference, AdvanceToNextRound} = props

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setLargeScreen( e.matches ))
  },[])

  return (
    <>
{ !largeScreen ? (
      <table className="tabletStatsUi">
        <thead>
        <tr>
          <td style={{backgroundImage: `url(${Flag})`}} className="flag">{/* Country Flag */}</td>
          <td>{Points}</td>
          <td className="hideOnTiny">{Win}</td>
          <td className="hideOnTiny">{Draw}</td>
          <td className="hideOnMobile">{Lose}</td>
          <td className="hideOnMobile">{Played}</td>
        </tr>
        </thead>      

        <tbody>
        <tr>
          <td className="countryRowStats">{Country}</td>
          <td>Points</td>
          <td className="hideOnTiny">Win</td>
          <td className="hideOnTiny">Draw</td>
          <td className="hideOnMobile">Lose</td>
          <td className="hideOnMobile">Played</td>
        </tr>
        </tbody>
      </table>
  ) : 
      <table>
        <thead>
        <tr>
          <td style={{backgroundImage: `url(${Flag})`}} className="flag">{/* Country Flag */}</td>
          <td>Points</td>
          <td>Win</td>
          <td>Draw</td>
          <td className="hideOnMobile">Lose</td>
          <td className="hideOnTablet">Goals For</td>
          <td className="hideOnTablet">Goals Against</td>
          <td className="hideOnTablet">Goal Difference</td>
          <td className="hideOnTablet">Advance To Next Round</td>
          <td className="hideOnMobile">Played</td>
        </tr>
        </thead>      

        <tbody>
        <tr>
          <td className="countryRowStats">{Country}</td>
          <td>{Points}</td>
          <td>{Win}</td>
          <td>{Draw}</td>
          <td className="hideOnMobile">{Lose}</td>
          <td className="hideOnTablet">{GoalsFor}</td>
          <td className="hideOnTablet">{GoalsAgainst}</td>
          <td className="hideOnTablet">{GoalDifference}</td>
          <td className="hideOnTablet">{AdvanceToNextRound}</td>
          <td className="hideOnMobile">{Played}</td>
        </tr>
      </tbody>
      </table>
  }
    </>
  )
}

export default Stats
