import Footer from '@/components/footer/Footer';
import Navigation from '@/components/navbar/Navigation';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const layout = ({children}) => {
    return (

     <>

     <Navigation></Navigation>
    <ToastContainer position="top-center" autoClose={2000} />
     {children}
     <Footer></Footer>
     </>
    );
};

export default layout;