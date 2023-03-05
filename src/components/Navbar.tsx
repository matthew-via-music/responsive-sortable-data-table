import {Link} from "react-router-dom"

interface Props {}

function Navbar(props: Props) {
  const {} = props

  return (
    <ul>
      <Link to="/responsive-sortable-data-table"><li>Groups and Matches</li></Link>
      <Link to="/responsive-sortable-data-table/page2"><li>First Round Stats</li></Link>
    </ul>
  )
}

export default Navbar
