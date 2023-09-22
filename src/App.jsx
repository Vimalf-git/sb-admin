import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './Sidebar'
import Dashboard from './Components/Dashboard'
import Edit from './Components/Edit'
import Create from './Components/Create'
function App() {
  const [data, setData] = useState([
    {
      name: "vimal",
      userName: "vimal97",
      email: "vima@gmail.com",
      mobile: "8765",
      batch: "100"
    },
    {
      name: "arul",
      userName: "arul2k",
      email: "arul@gmail.com",
      mobile: "6455",
      batch: "1001"
    }
  ])
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />

          <Routes>

            <Route path='dashboard' element={<Dashboard data={data} setData={setData} />} />
            <Route path='edit' element={<Edit />} />
            <Route path='create' element={<Create data={data} setData={setData}/>} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
