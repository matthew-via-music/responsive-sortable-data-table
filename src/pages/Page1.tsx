import { useState, useEffect } from 'react';
import '../App.css'

import {GroupStatsDataA, GroupStatsDataB, GroupStatsDataC, GroupStatsDataD, GroupStatsDataE, GroupStatsDataF, GroupStatsDataG, GroupStatsDataH, GroupMatchesDataA, GroupMatchesDataB, GroupMatchesDataC, GroupMatchesDataD, GroupMatchesDataE, GroupMatchesDataF, GroupMatchesDataG, GroupMatchesDataH } from "../data/Data"
import GroupStats from '../components/GroupStats'
import GroupMatches from '../components/GroupMatches'
import Buttons from '../components/Buttons'

function Page1() {
  
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
    let timeoutId:any = null // debounce
    const handleResize = () => {
      clearTimeout(timeoutId)
      setTimeout(() => {
        if(window.innerWidth > 2338){
          setDisableGroupBtn(false)
          setDisableMatchBtn(false)
          setToggleGroups(false)
          setToggleMatches(false)
          setTogglePivotScreen(false)
          setPivotScreenView(true)
        } 
      }, 150);
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
          GroupStatsData={GroupStatsDataA}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" 
          GroupStatsData={GroupStatsDataB}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" 
          GroupStatsData={GroupStatsDataC}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="D" 
          GroupStatsData={GroupStatsDataD}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="E" 
          GroupStatsData={GroupStatsDataE}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="F" 
          GroupStatsData={GroupStatsDataF}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="G" 
          GroupStatsData={GroupStatsDataG}/></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="H" 
          GroupStatsData={GroupStatsDataH}/></div>

          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" 
          GroupMatchesData={GroupMatchesDataA} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" 
          GroupMatchesData={GroupMatchesDataB} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" 
          GroupMatchesData={GroupMatchesDataC} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="D" 
          GroupMatchesData={GroupMatchesDataD} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="E" 
          GroupMatchesData={GroupMatchesDataE} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="F" 
          GroupMatchesData={GroupMatchesDataF} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="G" 
          GroupMatchesData={GroupMatchesDataG} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="H" 
          GroupMatchesData={GroupMatchesDataH} /></div>
        </>
      }
      {!pivotScreenView && 
        <>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="A" 
          GroupStatsData={GroupStatsDataA}/></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="A" 
          GroupMatchesData={GroupMatchesDataA} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="B" 
          GroupStatsData={GroupStatsDataB} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="B" 
          GroupMatchesData={GroupMatchesDataB} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="C" 
          GroupStatsData={GroupStatsDataC} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="C" 
          GroupMatchesData={GroupMatchesDataC} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="D" 
          GroupStatsData={GroupStatsDataD} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="D" 
          GroupMatchesData={GroupMatchesDataD} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="E" 
          GroupStatsData={GroupStatsDataE} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="E" 
          GroupMatchesData={GroupMatchesDataE} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="F" 
          GroupStatsData={GroupStatsDataF} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="F" 
          GroupMatchesData={GroupMatchesDataF} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="G" 
          GroupStatsData={GroupStatsDataG} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="G" 
          GroupMatchesData={GroupMatchesDataG} /></div>
          <div className={`${toggleGroups ? "toggleHideGroups" : ""}`}><GroupStats Group="H" 
          GroupStatsData={GroupStatsDataH} /></div>
          <div className={`${toggleMatches ? "toggleHideMatches" : ""}`}><GroupMatches Group="H" 
          GroupMatchesData={GroupMatchesDataH} /></div>
        </>
      }
      {/* \container */}
      </div>
{/* \wrapper */}
</div>
    </>
  )
}

export default Page1
