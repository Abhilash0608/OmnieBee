import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import Copyright from './CopyRight';


const Layout = ({setCurrentService}) => {
    
  return (
    <div className='w-full bg-zinc-100'>
      <Hero  setCurrentService={setCurrentService}/>
      <main>
        <Outlet /> {/* This will render the specific page's content */}
      </main>
      <Copyright />
    </div>
  );
};

export default Layout;
