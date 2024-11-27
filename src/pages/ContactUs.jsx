import { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactUs=()=>{
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return <div>
        <Contact/>
    </div>
}
export default ContactUs