import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/insapporo.jpg"
          alt="An image showing myself (Kim Jin Young)."
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jin Young Kim</h1>
      <p>
        I blog about web development - espicially frontend frameworks and
        libraries like React or Next.
      </p>
    </section>
  );
};

export default Hero;
