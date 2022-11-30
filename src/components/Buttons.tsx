interface Props {
  toggleGroups?: any,
  toggleMatches?: any,
  setToggleGroups?: any,
  setToggleMatches?: any,
  togglePivotScreen?:any,
  togglePivotScreenFn?:any,
  disableBtn?: any,
  setDisableBtn?: any,
  // setToggleSuperScreen?:any
}

function Butons(props: Props) {
  const {toggleGroups, toggleMatches, setToggleGroups, setToggleMatches, togglePivotScreen, togglePivotScreenFn, disableBtn, setDisableBtn} = props
  
  function handleToggleBtn(x: any){
    setDisableBtn(!x)
    return !x 
  }

  return (
    <div className="container collapse">
       <button id="groupsBtn" className={toggleGroups ? "showBtn" : "hideBtn"} onClick={() => setToggleGroups(handleToggleBtn)}>{toggleGroups ? "Show Groups" : "Hide Groups"}</button>
       <button id="matchesBtn" className={toggleMatches ? "showBtn" : "hideBtn"} onClick={() => setToggleMatches((x: any) => !x)}>{toggleMatches ? "Show Matches" : "Hide Matches"}</button>

       <button disabled={disableBtn} style={{backgroundColor: disableBtn ? '#eee':''}} id="superScreenBtn" className={togglePivotScreen ? "showBtn" : "hideBtn"} onClick={() => togglePivotScreenFn()}>{togglePivotScreen ? "Reset" : "Pivot Screen"}</button>       
     </div>
  )
}

export default Butons
