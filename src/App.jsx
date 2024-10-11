import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import DiscoverPage from './components/DiscoverPage';
import DetailsPage from './components/DetailsPage';
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (  
    <Router> 
      <div className='container'>
        <Sidebar isSidebarOpen = {isSidebarOpen} toggleSidebar = {toggleSidebar}/>
        <Routes>
          <Route path = "/" element = {<DiscoverPage isSidebarOpen = {isSidebarOpen}/>} />
          <Route path = "/page/:articleId" element = {<DetailsPage  isSidebarOpen = {isSidebarOpen}/>} /> 
        </Routes>
      </div> 
    </Router>
 
  )
}

export default App
