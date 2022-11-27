import { useState, useEffect } from 'react';
import './App.css'
import GroupAStats from './components/GroupAStats'
import GroupAMatches from './components/GroupAMatches'
function App() {
  
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 2336px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 2336px)")
    .addEventListener('change', e => setMatches( e.matches ))
  }, [])

  return (
    <>
     <h1>World Cup 2022</h1>
     <div className="container">

      {matches && 
        <>
          <div><h2>Group A</h2><GroupAStats /></div>
          <div><h2>Group B</h2><GroupAStats /></div>
          <div><h2>Group C</h2><GroupAStats /></div>
          <div><h2>Group A Matches</h2><GroupAMatches /></div>
          <div><h2>Group B Matches</h2><GroupAMatches /></div>
          <div><h2>Group C Matches</h2><GroupAMatches /></div>
        </>
      }
      {!matches && 
        <>
          <div><h2>Group A</h2><GroupAStats /></div>
          <div><h2>Group A Matches</h2><GroupAMatches /></div>
          <div><h2>Group B</h2><GroupAStats /></div>
          <div><h2>Group B Matches</h2><GroupAMatches /></div>
          <div><h2>Group C</h2><GroupAStats /></div>
          <div><h2>Group C Matches</h2><GroupAMatches /></div>
        </>
      }
          

     
      {/* \container */}
      </div>
    </>
  )
}

export default App
