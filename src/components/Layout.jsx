import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import ContactUs from './Contact';
import Copyright from './CopyRight';


const Layout = ({setCurrentService}) => {
    
  return (
    <div className='w-full'>
      <Hero  setCurrentService={setCurrentService}/>
      <main>
        <Outlet /> {/* This will render the specific page's content */}
      </main>
      <ContactUs />
      <Copyright />
    </div>
  );
};

export default Layout;
