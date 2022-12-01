import {Link} from "react-router-dom"

interface Props {}

function Navbar(props: Props) {
  const {} = props

  return (
    <ul>
      <Link to="/"><a><li>Home</li></a></Link>
      <Link to="/page2"><a><li>Page2</li></a></Link>
    </ul>
  )
}

export default Navbar
