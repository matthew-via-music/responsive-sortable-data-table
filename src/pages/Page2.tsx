import { useState } from "react"

interface Lemon{
  id: number,
  user: string
}
interface Props {
  foo: string,
  bar: number,
  getData?: () => string,
  user?: Lemon
}

function Page2(props:Props){

  const [data, setData] = useState("")
  // const {} = props

  const name:string = "Betty"

  const getName = (n: number): string => {
    if(n >= 27){
      return name
    } else {
      return "Not Betty"
    }
  }

  const handleClick = () => {
    const data = props.getData?.()
    setData(data || "")
  }
  return (
    <>
      <h1>{props.foo} {props.bar}</h1> 
      {getName(2)}
      <button onClick={handleClick}>Click here</button>
      <p>{data}</p>

      {props.user?.user}
    </>
  )
}

export default Page2