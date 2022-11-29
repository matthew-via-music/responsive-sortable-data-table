interface Props {
  toggleGroups?: any,
  toggleMatches?: any,
  setToggleGroups?: any,
  setToggleMatches?: any,
  toggleSuperScreen?:any,
  toggleSuperScreenFn?:any,
  // setToggleSuperScreen?:any
}

function Butons(props: Props) {
  const {toggleGroups, toggleMatches, setToggleGroups, setToggleMatches, toggleSuperScreen, toggleSuperScreenFn} = props

  return (
    <div className="container collapse">
       <button className={toggleGroups ? "showBtn" : "hideBtn"} onClick={() => setToggleGroups((x: any) => !x)}>{toggleGroups ? "Show Groups" : "Hide Groups"}</button>
       <button className={toggleMatches ? "showBtn" : "hideBtn"} onClick={() => setToggleMatches((x: any) => !x)}>{toggleMatches ? "Show Matches" : "Hide Matches"}</button>

       <button id="superScreenBtn" className={toggleSuperScreen ? "showBtn" : "hideBtn"} onClick={() => toggleSuperScreenFn()}>{toggleSuperScreen ? "Super Screen" : "Pivot Screen"}</button>       
     </div>
  )
}

export default Butons
