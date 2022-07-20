import { useState } from 'react';
import React from 'react';
import Star from '../src/assets/Star.svg';

export default function Option(props) {
  return (
    <section className='option'>
      <div className='option__container'>
        <div className='option__image'>
          {props.status && <p className='option__mark option__txt'>{props.status}</p>}
          <img src={props.img} alt='Picture1' className='option__pic' />
        </div>

        <div className='option__desc'>
          <div className='option__top'>
            <img src={Star} className='option__star' />
            <p className='option__txt'>
              {props.starCount}{' '}
              <span className='option__txt--purple'>
                ({props.reviewCount})&bull;{props.country}
              </span>
            </p>
          </div>
          <div className='option__mid'>
            <p className='option__txt'>{props.context}</p>
          </div>
          <div className='option__bott'>
            <p className='option__txt'>
              <span className='option__txt--bold'>Start ${props.price} / </span> person
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
