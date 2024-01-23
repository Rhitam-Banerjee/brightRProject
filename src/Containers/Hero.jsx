import {
  Carousel,
  HeroBanner,
  MultiCarousel,
  SimpleCarousel,
} from "../Components";

const Hero = () => {
  return (
    <section className="mt-[100px]">
      <Carousel />
      <HeroBanner />
      <MultiCarousel />
      <SimpleCarousel text={"Best Sellers"} />
      <SimpleCarousel text={"New Arrival"} />
      <SimpleCarousel text={"Peppa Pig"} />
    </section>
  );
};

export default Hero;
