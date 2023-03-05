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
        <Route path="/responsive-sortable-data-table" element={<Page1 />} />
        <Route path="/responsive-sortable-data-table/page2" element={<Page2 />} />
        <Route path="/responsive-sortable-data-table/*" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App








