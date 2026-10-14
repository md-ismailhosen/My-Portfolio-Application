import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../context/AuthContext/AuthContext';

const Root = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='mt-16 '>
            <div className='bg-slate-700 min-h-screen'>
                <Navbar></Navbar>
                <div className='mt-16 h-full'>
                    <Outlet></Outlet>
                </div>

            </div>
            {
                user && <Footer></Footer>
            }
        </div>
        

    );
};

export default Root;