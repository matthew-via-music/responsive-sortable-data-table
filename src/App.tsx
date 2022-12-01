import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

interface Props {}

function App(props: Props) {
  const {} = props

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App








