import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create.tsx'
import Search from './Search.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='*' element={<h1>Page not found</h1>}></Route>
    </Routes>
    </BrowserRouter>
  <ToastContainer />
  </StrictMode>,
)
