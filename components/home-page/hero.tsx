import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/jinho.png" alt="진호" width="500" height="500" />
      </div>
      <h1>안녕하세요. 저는 염진호입니다.</h1>
      <p>다양한 기술과 사용자 경험에 대해 관심이 많습니다.</p>
    </section>
  );
};

export default Hero;
