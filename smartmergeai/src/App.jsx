import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Componets/LandingPage.jsx';
import HomePage from './Componets/homePage.jsx';
import Signup from './Componets/Signup.jsx';
import SignIn from './Componets/SignIn.jsx';
import Demo from './Componets/demo.jsx';


function App() {


  return (
    <>
     <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/" element={<LandingPage />} />
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/login" element={<SignIn/>}/>
    
      </Routes>
    </Router>
    </>
  )
}

export default App
