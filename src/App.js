import React from 'react'
import LoginPage from './components/Login/LoginPage'
import Product from './components/page/createProduct'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App