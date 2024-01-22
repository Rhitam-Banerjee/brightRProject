import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { amazon, people, stars } from "../assets";
const Carousel = () => {
  const { heroCarousel } = useSelector((store) => store.user);
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper h-[300px]"
    >
      {heroCarousel.map((item, index) => {
        const {
          title,
          image,
          desc,
          rating,
          peopleRead,
          age,
          isNewArrival,
          link,
        } = item;
        return (
          <SwiperSlide key={index}>
            <div
              className="relative p-2 flex flex-row lg:flex-col items-center justify-between w-[92%] md:w-full h-[400px] gap-8 group 
                after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[80%] after:w-[80%] after:ml-auto after:bg-blueLightColor after:rounded-[32px] after:-z-10 after:transition-all duration-300 
                hover:after:h-[90%] hover:after:w-full"
            >
              <div
                className={`h-[90%] w-[340px] m-auto aspect-7/8 rounded-[32px] -rotate-[5deg] group-hover:rotate-0 transition-all duration-300`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundClip: "content-box",
                }}
              />
              <div className="ml-auto text-left flex flex-col text-[0.9rem] p-8 pl-4">
                <div className="flex flex-row items-center text-[0.6rem] text-[#3B72FF]">
                  {isNewArrival && (
                    <div className="px-2 py-1 bg-[#3B72FF1F] rounded-md mr-2">
                      New Arrival
                    </div>
                  )}
                  <div className="px-2 py-1 border-[1px] border-[#3B72FF1F] rounded-md">
                    {age} years
                  </div>
                </div>
                <h2 className="text-[24px] font-[600] mt-2">{title}</h2>
                <div className="flex flex-row items-center justify-start my-4">
                  <Link to={link} target="_blank" className="mr-4">
                    <img src={amazon} alt="Amazon" />
                  </Link>
                  <img src={stars} alt="Rating" className="pr-2" />
                  <p className="mr-4">{rating}</p>
                  <img
                    src={people}
                    alt="Read By"
                    className="border-l-[1px] border-black pl-4 pr-2"
                  />
                  <p>{peopleRead}</p>
                </div>
                <p>{desc}</p>
                <Link to={link} target="_blank">
                  <p className="font-semibold text-[1rem]">Read Mode</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
