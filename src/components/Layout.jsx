import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';
import ContactUs from './Contact';
import Copyright from './CopyRight';


const Layout = ({setCurrentService}) => {
    const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='w-full'>
      <Hero scrollToContact={scrollToContact} setCurrentService={setCurrentService}/>
      <main>
        <Outlet /> {/* This will render the specific page's content */}
      </main>
      <ContactUs ref={contactRef}/>
      <Copyright />
    </div>
  );
};

export default Layout;
