import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './Sidebar'
import Dashboard from './Components/Dashboard'
import Edit from './Components/Edit'
import Create from './Components/Create'
import NestedExample from './Components/NestedRoutes/Index'
import Accounts from './Components/NestedRoutes/Accounts'
import Products from './Components/NestedRoutes/Products'
import Receipt from './Components/NestedRoutes/Receipt'
import Staff from './Components/NestedRoutes/Staff'
import UseRef from './Hooks/UseRef'
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

            <Route path='/dashboard' element={<Dashboard data={data} setData={setData} />} />
            <Route path='edit/:id' element={<Edit data={data} setData={setData}/>} />
            <Route path='/create' element={<Create data={data} setData={setData}/>} />
            <Route path='nested-example' element={<NestedExample/>}>
              {/* This is one way to acheive index routing */}
              <Route index element={<Accounts/>}/>
              <Route path=':accounts' element={<Accounts/>}></Route>
              <Route path=':products' element={<Products/>}></Route>
              <Route path=':receipt' element={<Receipt/>}></Route>
              <Route path=':staff' element={<Staff/>}></Route>
            </Route>
            <Route path='*' element={<Navigate to={'dashboard'}/>}/>

            <Route path='useref' element={<UseRef/>}/>


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
