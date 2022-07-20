import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Option from '../components/Option';

import Img1 from '../src/assets/image1.svg';
import Img2 from '../src/assets/image2.svg';
import Img3 from '../src/assets/image3.svg';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className='list'>
        <Option status='Sold Out' img={Img1} starCount='5.0' reviewCount='6' country='USA' context='Life lessons with Katie Zaferes' price='136' />
        <Option status='Online' img={Img2} starCount='5.0' reviewCount='30' country='GER' context='Learn wedding photography' price='125' />
        <Option status='In Stock' img={Img3} starCount='4.8' reviewCount='2' country='FRA' context='Group Mountain Biking' price='50' />
      </div>
    </div>
  );
}
