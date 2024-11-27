import React, {  useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Solutions from './components/Solutions';
import Technologies from './components/Techonologies';
import ServicesCards from './components/ServicesCards';
import Careers from './pages/Careers';
import Services from './pages/Services';
import ExpertTechnologies from './pages/ExpertTechnologies';
import './index.css'; // Ensure correct path
import ContactUs from './pages/ContactUs';
import Contact from './components/Contact';


const Home = () => {
  
return (
  <div>
    <ServicesCards/>
    <Technologies />
    
    <Solutions />
    <Contact/>
  </div>
);
}

const App = () => {
  const [currentService,setCurrentService]=useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout  currentService={currentService} setCurrentService={setCurrentService}/>}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services currentService={currentService} />}/>
          <Route path="expertise" element={<ExpertTechnologies currentService={currentService} />}/>
          <Route path="contactus" element={<ContactUs />}/>
        <Route path="careers" element={<Careers/>}/>
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
