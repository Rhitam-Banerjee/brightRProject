import { Carousel, HeroBanner, TopBooks } from "../Components";

const Hero = () => {
  return (
    <section className="mt-[100px]">
      <Carousel />
      <HeroBanner />
      <TopBooks />
    </section>
  );
};

export default Hero;
