import { useState } from 'react';
import React from 'react';
import Grid from '../src/assets/HeroGrid.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__grid'>
        <img src={Grid} alt='Picture' className='hero__pic' />
      </div>

      <div className='hero__text'>
        <h1 className='hero__title'>Online Experiences</h1>
        <p className='hero__para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}
