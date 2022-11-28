import { useEffect, useState } from "react"

interface Props {
  TeamA: string,
  TeamB: string,
  Score: string,
  MatchDate: string
}

function Matches(props: Props) {
  const [mobile, setMobile] = useState(false)
  
  useEffect(() => {
    window.innerWidth <= 767 ? setMobile(true) : setMobile(false)
  }, [])

  const {TeamA, TeamB, Score, MatchDate} = props

  return (
    <>
      <table>
        <thead>
        <tr>
          <td className="countryRowMatches"></td>
          <td className="score">{!mobile && "Score"}</td>
          <td></td>
          <td className="hideOnMobile">Match Date</td>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td className="countryRowMatches">{TeamA}</td>
          <td className="score">{Score}</td>
          <td>{TeamB}</td>
          <td className="hideOnMobile">{MatchDate}</td>
        </tr>
      </tbody>
      </table>
    </>
  )
}

export default Matches
