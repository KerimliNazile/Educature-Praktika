import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import Wishlist from './Pages/WishlistPage'
import Detail from './Pages/DetailPage'
import Basket from './Pages/BasketPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
