import './App.css'
import GroupAStats from './components/GroupAStats'
import GroupAMatches from './components/GroupAMatches'
function App() {

  return (
    <>
     <h1>World Cup 2022</h1>

     <div className="container">

      <div>
        <h2>Group A</h2>
        <GroupAStats />
      </div>
      <div>
        <h2>Group B</h2>
        <GroupAStats />
      </div>
      <div>
        <h2>Group C</h2>
        <GroupAStats />
      </div>
          
      <div>
        <h2>Group A Matches</h2>
        <GroupAMatches />
      </div>
      <div>
        <h2>Group B Matches</h2>
        <GroupAMatches />
      </div>
      <div>
        <h2>Group C Matches</h2>
        <GroupAMatches />
      </div>

      {/* \container */}
      </div>
    </>
  )
}

export default App
