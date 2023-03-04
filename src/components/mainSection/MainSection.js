import React from 'react';
import FlashDeal from '../flashDeal/FlashDeal';
import FurnitureAdvert from '../furnitureAdvert/FurnitureAdvert';
import HeroCarousel from '../heroCarousel/HeroCarousel';
import TopCategory from '../topCategory/TopCategory';
import HomeNavbar from '../homeNavbar/HomeNavbar';
import MobileSearchBar from '../mobileSearchBar/MobileSearchBar';

const MainSection = () => {
  return (
    <div className='pr-10 md:pr-0'>
        {/* <Navbar /> */}
        <MobileSearchBar />
        <HeroCarousel />
        <FlashDeal />
        <TopCategory />
        <FurnitureAdvert />
    </div>
  );
}

export default MainSection;
