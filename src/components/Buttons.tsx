interface Props {
  toggleGroups?: any,
  toggleMatches?: any,
  setToggleGroups?: any,
  setToggleMatches?: any,
  togglePivotScreen?:any,
  togglePivotScreenFn?:any,
  disableMatchBtn?: any,
  setDisableMatchBtn?: any,
  disableGroupBtn?: any,
  setDisableGroupBtn?: any,
  setDisablePivotBtn?:any
}

function Butons(props: Props) {
  const {toggleGroups, toggleMatches, setToggleGroups, setToggleMatches, togglePivotScreen, togglePivotScreenFn, disableMatchBtn, setDisableMatchBtn, disableGroupBtn, setDisableGroupBtn, setDisablePivotBtn} = props

  const handleToggleGroupBtn = ((x:any) => { setDisableMatchBtn(!x) && setDisablePivotBtn(!x); return !x })
  const handleToggleMatchBtn = ((x:any) => { setDisableGroupBtn(!x); return !x })

  return (
    <div className="container collapse">
       
       <button 
          disabled={disableGroupBtn} 
          style={{backgroundColor: disableGroupBtn ? '#eee':''}} 
          id="groupsBtn" 
          className={toggleGroups ? "showBtn" : "hideBtn"} 
          onClick={() => setToggleGroups(handleToggleGroupBtn)}>{toggleGroups ? "Show Groups" : "Hide Groups"}
        </button>

       <button 
          disabled={disableMatchBtn} 
          style={{backgroundColor: disableMatchBtn ? '#eee':''}} 
          id="matchesBtn" 
          className={toggleMatches ? "showBtn" : "hideBtn"} 
          onClick={() => setToggleMatches(handleToggleMatchBtn)}>{toggleMatches ? "Show Matches" : "Hide Matches"}
       </button>

       <button 
          disabled={disableMatchBtn} 
          style={{backgroundColor: disableMatchBtn ? '#eee':''}} 
          id="pivotScreenBtn" 
          className={togglePivotScreen ? "showBtn" : "hideBtn"} 
          onClick={() => togglePivotScreenFn()}>{togglePivotScreen ? "Reset" : "Pivot Screen"}
       </button>

     </div>
  )
}

export default Butons
