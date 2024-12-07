import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Copyright from './CopyRight';
import Footer from './Footer';


const Layout = ({setCurrentService}) => {
    
  return (
    <div className='w-full bg-zinc-100'>
      <Hero  setCurrentService={setCurrentService}/>
      <main>
        <Outlet /> {/* This will render the specific page's content */}
      </main>
      <Footer />
      
      <Copyright />
    </div>
  );
};

export default Layout;
