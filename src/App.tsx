import { useState, useEffect } from 'react';
import './App.css'

import GroupStats from './components/GroupStats'
import GroupMatches from './components/GroupMatches'
import Buttons from './components/Buttons'

import GroupAStatsData from "./data/groupAStats.json"
import GroupAMatchesData from "./data/groupAMatches.json"

function App() {
  
  const [UILayoutFormat, setUILayoutFormat] = useState(
    window.matchMedia("(min-width: 2336px)").matches
  )
  const [toggleGroups, setToggleGroups] = useState(false)
  const [toggleMatches, setToggleMatches] = useState(false)

  useEffect(() => {
    window
    .matchMedia("(min-width: 2336px)")
    .addEventListener('change', e => setUILayoutFormat( e.matches ))
  }, [])

  return (
    <>
     <h1>World Cup 2022</h1>
    
     <Buttons toggleGroups={toggleGroups} toggleMatches={toggleMatches} setToggleGroups={setToggleGroups} setToggleMatches={setToggleMatches} />

     <div className="container">
      {UILayoutFormat && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="A" GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" GroupMatchesData={GroupAMatchesData} /></div>
        </>
      }
      {!UILayoutFormat && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="A" GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" GroupStatsData={GroupAStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" GroupStatsData={GroupAStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" GroupMatchesData={GroupAMatchesData} /></div>
        </>
      }
      {/* \container */}
      </div>
    </>
  )
}

export default App
