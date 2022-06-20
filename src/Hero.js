import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            officiis doloribus enim error iure beatae, placeat, dolorem alias
            quaerat in modi, corrupti animi exercitationem repellendus quae
            possimus voluptates quod debitis saepe? Voluptate harum quaerat,
            quia, doloribus recusandae repudiandae ipsum animi quidem tenetur,
            quibusdam sapiente odit?
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img alt="phone-img" src={phoneImg} />
        </article>
      </div>
    </section>
  );
};

export default Hero;
