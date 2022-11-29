import { useState, useEffect } from 'react';
import './App.css'

import GroupStats from './components/GroupStats'
import GroupMatches from './components/GroupMatches'
import Buttons from './components/Buttons'

import GroupAStatsData from "./data/groupAStats.json"
import GroupBStatsData from "./data/groupBStats.json"
import GroupCStatsData from "./data/groupCStats.json"
import GroupDStatsData from "./data/groupDStats.json"
import GroupEStatsData from "./data/groupEStats.json"
import GroupFStatsData from "./data/groupFStats.json"
import GroupGStatsData from "./data/groupGStats.json"
import GroupHStatsData from "./data/groupHStats.json"

import GroupAMatchesData from "./data/groupAMatches.json"
import GroupBMatchesData from "./data/groupBMatches.json"
import GroupCMatchesData from "./data/groupCMatches.json"
import GroupDMatchesData from "./data/groupDMatches.json"
import GroupEMatchesData from "./data/groupEMatches.json"
import GroupFMatchesData from "./data/groupFMatches.json"
import GroupGMatchesData from "./data/groupGMatches.json"
import GroupHMatchesData from "./data/groupHMatches.json"

function App() {
  
  const [superScreenView, setSuperScreenView] = useState(
    window.matchMedia("(min-width: 2336px)").matches && true
  )
  const [toggleGroups, setToggleGroups] = useState(false)
  const [toggleMatches, setToggleMatches] = useState(false)
  
  // 
  const [toggleSuperScreen, setToggleSuperScreen] = useState(false)

  function toggleSuperScreenFn(){
    setToggleSuperScreen((x: any) => !x)
    setSuperScreenView((x: any) => !x)
  }
  // 
  
  useEffect(() => {
    
    let el2:any = document.querySelector('.splashBg');
    el2.classList.add('splash');
    setTimeout(() => {
      let el:any = document.querySelector('.wrapper');
      el.classList.add('fade-in');
    }, 700);

    window
    .matchMedia("(min-width: 2336px)")
    .addEventListener('change', e => setSuperScreenView( e.matches ))
  }, [])

  return (
    <>
<div className="splashBg"></div>
<div className="wrapper">
 
     <h1>World Cup 2022</h1>

     <Buttons 
      toggleGroups={toggleGroups} setToggleGroups={setToggleGroups} 
      toggleMatches={toggleMatches} setToggleMatches={setToggleMatches} 
      toggleSuperScreen={toggleSuperScreen} toggleSuperScreenFn={toggleSuperScreenFn} 
      />

     <div className="container">
      {superScreenView && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="A" 
          GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" 
          GroupStatsData={GroupBStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" 
          GroupStatsData={GroupCStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="D" 
          GroupStatsData={GroupDStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="E" 
          GroupStatsData={GroupEStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="F" 
          GroupStatsData={GroupFStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="G" 
          GroupStatsData={GroupGStatsData}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="H" 
          GroupStatsData={GroupHStatsData}/></div>

          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" 
          GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" 
          GroupMatchesData={GroupBMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" 
          GroupMatchesData={GroupCMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="D" 
          GroupMatchesData={GroupDMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="E" 
          GroupMatchesData={GroupEMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="F" 
          GroupMatchesData={GroupFMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="G" 
          GroupMatchesData={GroupGMatchesData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="H" 
          GroupMatchesData={GroupHMatchesData} /></div>
        </>
      }
      {!superScreenView && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="A" 
          GroupStatsData={GroupAStatsData}/></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" 
          GroupMatchesData={GroupAMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" 
          GroupStatsData={GroupBStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" 
          GroupMatchesData={GroupBMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" 
          GroupStatsData={GroupCStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" 
          GroupMatchesData={GroupCMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="D" 
          GroupStatsData={GroupDStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="D" 
          GroupMatchesData={GroupDMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="E" 
          GroupStatsData={GroupEStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="E" 
          GroupMatchesData={GroupEMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="F" 
          GroupStatsData={GroupFStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="F" 
          GroupMatchesData={GroupFMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="G" 
          GroupStatsData={GroupGStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="G" 
          GroupMatchesData={GroupGMatchesData} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="H" 
          GroupStatsData={GroupHStatsData} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="H" 
          GroupMatchesData={GroupHMatchesData} /></div>
        </>
      }
      {/* \container */}
      </div>
{/* \wrapper */}
</div>
    </>
  )
}

export default App
