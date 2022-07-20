import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Option from '../components/Option';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className='list'>
        <Option status='Sold Out' img='../src/assets/image1.svg' starCount='5.0' reviewCount='6' country='USA' context='Life lessons with Katie Zaferes' price='136' />
        <Option status='Online' img='../src/assets/image2.svg' starCount='5.0' reviewCount='30' country='GER' context='Learn wedding photography' price='125' />
        <Option status='In Stock' img='../src/assets/image3.svg' starCount='4.8' reviewCount='2' country='FRA' context='Group Mountain Biking' price='50' />
      </div>
    </div>
  );
}
