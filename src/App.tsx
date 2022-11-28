import { useState, useEffect } from 'react';
import './App.css'
import GroupAStats from './components/GroupAStats'
import GroupAMatches from './components/GroupAMatches'
function App() {
  
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 2336px)").matches
  )
  const [toggleGroups, setToggleGroups] = useState(false)
  const [toggleMatches, setToggleMatches] = useState(false)

  useEffect(() => {
    window
    .matchMedia("(min-width: 2336px)")
    .addEventListener('change', e => setMatches( e.matches ))
  }, [])

  return (
    <>
     <h1>World Cup 2022</h1>
    
     <div className="container collapse">
       <button className={toggleGroups ? "showBtn" : "hideBtn"} onClick={() => setToggleGroups(x => !x)}>{toggleGroups ? "Show Groups" : "Hide Groups"}</button>
       <button className={toggleMatches ? "showBtn" : "hideBtn"} onClick={() => setToggleMatches(x => !x)}>{toggleMatches ? "Show Matches" : "Hide Matches"}</button>
     </div>

     <div className="container">
      {matches && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="A" /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="B" /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="C" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="A" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="B" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="C" /></div>
        </>
      }
      {!matches && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="A" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="A" /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="B" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="B" /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupAStats Group="C" /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupAMatches Group="C" /></div>
        </>
      }
          

     
      {/* \container */}
      </div>
    </>
  )
}

export default App
