import React from 'react';
import FixedCartBox from '../../components/fixedCartBox/FixedCartBox';
import MainSection from '../../components/mainSection/MainSection';
import HomeNavbar from '../../components/homeNavbar/HomeNavbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='bg-blue-25'>
        <HomeNavbar />
        <FixedCartBox />
        <div className='flex space-x-[6.3rem] '>
            <Sidebar />
            <MainSection />
        </div>
    </div>
  );
}

export default Home;
