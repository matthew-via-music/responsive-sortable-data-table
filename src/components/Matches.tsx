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
      <table>
        <thead>
        <tr>
          <td className="country"></td>
          <td>Score</td>
          <td className="country"></td>
          <td className="hideOnTiny">Match Date</td>
        </tr>
        </thead>      

        <tbody>
        <tr>
          <td>{TeamA}</td>
          <td>{Score}</td>
          <td>{TeamB}</td>
          <td className="hideOnTiny">{MatchDate}</td>
        </tr>
      </tbody>
      </table>
    </>
  )
}

export default Matches
