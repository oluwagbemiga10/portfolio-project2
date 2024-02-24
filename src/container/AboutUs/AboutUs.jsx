import React from 'react';
import {images} from "../../constants"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'></p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt='knife image' />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'></p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      </div>
  </div>
);

export default AboutUs;
