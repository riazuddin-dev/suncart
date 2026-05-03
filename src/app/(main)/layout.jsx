import Footer from '@/components/footer/Footer';
import Navigation from '@/components/navbar/Navigation';

import React from 'react';

const layout = ({children}) => {
    return (

     <>

     <Navigation></Navigation>
     {children}
     <Footer></Footer>
     </>
    );
};

export default layout;