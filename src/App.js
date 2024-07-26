import React from 'react'
import './App.css'
import './index.css'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './SearchPage'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className="app_page">
          <Sidebar />
          <Routes>
            <Route path='/search/:searchTerm' element={<SearchPage />} />
            <Route path='/' element={<RecommendedVideos />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
