import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Componets/LandingPage.jsx';
import HomePage from './Componets/homePage.jsx';
import Signup from './Componets/Signup.jsx';
import SignIn from './Componets/SignIn.jsx';
import About from './Componets/About.jsx';
import PrivacyPolicy from './Componets/PrivacyPolicy.jsx';
import TermsOfService from './Componets/TermsOfService.jsx';
import Guidelines from './Componets/Guidelines.jsx';
import PRResultPage from './Componets/PRResultDemo.jsx';




function App() {


  return ( 
    <>  
     <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/login" element={<SignIn/>}/>
      <Route path = "/TermsOfService" element={<TermsOfService />}/>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path = "/Guidelines" element={<Guidelines />}/>
      <Route path="/About" element={<About />} />
      <Route path="result" element={<PRResultPage/>} />     
    
      </Routes>
    </Router>
    </>
  )
}

export default App
