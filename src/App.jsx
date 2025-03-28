import React from 'react'
import './index.css';
import Page_1 from './Pages/Page1/Page_1';
import Nav from './Components/Navbar/Nav'
import Page_2 from './Pages/Page2/Page_2';
//import Question from './Components/Question/Question';
import TextEffect from './Components/3dEffects/textEffect';

const App = () => {
  return (
    <div className=''>
      <Nav/>
      <Page_1/>
      <Page_2/>
      <TextEffect/>
    </div>
  )
}

export default App