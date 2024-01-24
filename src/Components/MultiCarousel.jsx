import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, HashNavigation } from "swiper/modules";
import { amazon, people, stars } from "../assets";
import { FaRegHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
const MultiCarousel = () => {
  const { topTen } = useSelector((store) => store.books);
  return (
    <section className="relative mt-[100px]">
      <span className="absolute top-0 left-1/2 -translate-x-1/2 pl-2 w-full max-w-7xl m-auto font-semibold text-[1.2rem]">
        Top 10 Books
      </span>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Navigation, HashNavigation]}
        className="mySwiper pt-[50px] flex justify-between"
      >
        {topTen.map((book, index) => {
          const { title, image, rating, peopleRead, link } = book;
          return (
            <SwiperSlide
              datatype={`slide${index}`}
              key={index}
              className="relative startCarouselSlideMulti h-full !w-[250px] group"
            >
              <div className="absolute top-[15%] left-0 w-max z-10">
                <p
                  className="w-max font-Jua font-outline-4 font-bold text-highlight translate-x-0 text-[8rem] 
                  group-hover:scale-0 group-hover:opacity-0 group-hover:translate-x-[50px] transition-all duration-500"
                >
                  {index + 1}
                </p>
              </div>
              <div
                className="relative w-[190px] h-full p-4 translate-x-[30px] -z-[50px] transition-all duration-500
                  group-hover:translate-x-0 group-hover:z-10
                  flex flex-col items-center justify-center
                  "
              >
                <div
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto
                  w-[50%] h-[50%] bg-blueLightColor rounded-[32px] opacity-0 transition-all duration-500
                  group-hover:opacity-100 group-hover:h-[100%] group-hover:w-[200px] -z-10"
                />
                <div
                  className="h-[190px] w-[170px] bg-cover bg-top bg-no-repeat rounded-[32px] mb-4"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="mt-2 text-left font-semibold text-[1rem] w-full flex flex-col justify-end h-[100px]">
                  <h2 className="mb-auto">{title}</h2>
                  <div className="flex flex-row items-center justify-between text-[0.8rem] w-full">
                    <Link to={link} target="_blank" className="mr-1">
                      <img src={amazon} alt="Amazon" />
                    </Link>
                    <div className="flex flex-row justify-start items-center">
                      <img src={stars} alt="Rating" />
                      <p className="ml-1">{rating}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <img
                        src={people}
                        alt="Read By"
                        className="border-l-[1px] border-black pl-4"
                      />
                      <p>{peopleRead}</p>
                    </div>
                  </div>
                  <div
                    className="opacity-0 mt-4 px-2 py-1 transition-all duration-300 group-hover:opacity-100 flex flex-row items-center
                 text-[#3B72FF] border-[2px] border-[#3B72FF] rounded-md w-max cursor-pointer"
                  >
                    <FaRegHeart className="mr-2 !font-bold" />
                    Add to Wishlist
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MultiCarousel;
