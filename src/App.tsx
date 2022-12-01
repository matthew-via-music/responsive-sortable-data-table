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
  
  const [pivotScreenView, setPivotScreenView] = useState(
    window.matchMedia("(min-width: 2338px)").matches && true
  )
  const [disableMatchBtn, setDisableMatchBtn] = useState(false)
  const [disableGroupBtn, setDisableGroupBtn] = useState(false)
  const [toggleGroups, setToggleGroups] = useState(false)
  const [toggleMatches, setToggleMatches] = useState(false)
  // 
  const [togglePivotScreen, setTogglePivotScreen] = useState(false)
  const [uses__disableMatchBtn, setDisablePivotBtn] = useState(false)

  function togglePivotScreenFn(){
    setTogglePivotScreen((x: any) => !x)
    setDisablePivotBtn((x: any) => !x)
    setPivotScreenView((x: any) => !x)
  }
  //   
  useEffect(() => {
    // splash
    let el2:any = document.querySelector('.splashBg');
    el2.classList.add('splash');
    setTimeout(() => {
      let el:any = document.querySelector('.wrapper');
      el.classList.add('fade-in');
    }, 700);
    // detect size and pivot screen UI layout
    window
    .matchMedia("(min-width: 2338px)")
    .addEventListener('change', e => setPivotScreenView( e.matches ))

    // Reset if user resizes browser on smaller screen with matches hidden
    const handleResize = () => {
      if(window.innerWidth > 2338){
        setDisableGroupBtn(false)
        setDisableMatchBtn(false)
        setToggleGroups(false)
        setToggleMatches(false)
        setTogglePivotScreen(false)
        setPivotScreenView(true)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // 
}, [])

  return (
    <>
<div className="splashBg"></div>
<div className="wrapper">
 
     <h1>World Cup 2022</h1>

     <Buttons 
      toggleGroups={toggleGroups} setToggleGroups={setToggleGroups} 
      disableMatchBtn={disableMatchBtn} setDisableMatchBtn={setDisableMatchBtn}
      toggleMatches={toggleMatches} setToggleMatches={setToggleMatches} 
      disableGroupBtn={disableGroupBtn} setDisableGroupBtn={setDisableGroupBtn}
      togglePivotScreen={togglePivotScreen} togglePivotScreenFn={togglePivotScreenFn} 
      setDisablePivotBtn={setDisablePivotBtn}
      />

     <div className="container">
      {pivotScreenView && 
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
      {!pivotScreenView && 
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
