import {Link} from "react-router-dom"

interface Props {}

function Navbar(props: Props) {
  const {} = props

  return (
    <ul>
      <Link to="/"><li>Groups and Matches</li></Link>
      <Link to="/page2"><li>All Data</li></Link>
    </ul>
  )
}

export default Navbar
