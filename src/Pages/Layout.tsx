import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/elements/Button/Button';



const Layout = () => {
return (
    <>  
        <main>
            <Outlet/>
        </main>
    </>
)
}

export default Layout
