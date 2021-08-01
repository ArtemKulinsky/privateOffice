import React, { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import { Sidebar } from './components/Sidebar/Sidebar';
import './styles.scss'

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );
  
  return (
    <div className="App__personal-account-container">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
      <Content/>
    </div>
  );
}

export default App;
