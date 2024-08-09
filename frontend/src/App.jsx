import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreateDocs from './pages/createDocs';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login"/>} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createDocs/:docsId' element={isLoggedIn ? <CreateDocs /> : <Navigate to="/login"/>} />
            <Route path="*" element={isLoggedIn ? <NoPage /> : <Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App