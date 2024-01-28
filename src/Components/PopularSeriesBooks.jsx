/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, HashNavigation } from "swiper/modules";
import { amazon, people, stars } from "../assets";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { setHidePopularBooks } from "../Features/Books/bookSlice";
const PopularSeriesBooks = () => {
  const { seriesSelected, bookTitle } = useSelector((store) => store.books);
  const booksCount = bookTitle[`${seriesSelected}`].length;
  const dispatch = useDispatch();
  return (
    <div className="relative max-w-7xl px-2 w-full m-auto pb-[50px] border-t-[1px] border-white pt-[50px] border-opacity-50 flex flex-col">
      <p className="text-white font-semibold text-[1.2rem]">
        {seriesSelected}
        <small className="ml-2 opacity-50"> {booksCount} books</small>
      </p>
      <IoClose
        className="absolute top-[50px] right-2 text-white text-[2rem] cursor-pointer"
        onClick={() => {
          dispatch(setHidePopularBooks());
        }}
      />
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
        {bookTitle[`${seriesSelected}`].map((book, index) => {
          const { name, image, rating, review_count } = book;
          const isValidImageUrl = /\.(jpeg|jpg|gif|png)$/i.test(image);
          if (name !== "" && image?.length > 10 && isValidImageUrl) {
            let newName = name?.split(/:|\?/)[0];
            return (
              <SwiperSlide
                datatype={`slide${index}`}
                key={index}
                className="relative startCarouselSlideMulti h-auto !w-[200px] group !bg-transparent"
              >
                <div
                  className="relative w-[190px] h-full p-4 -z-[50px] transition-all duration-300
                  group-hover:z-10
                  flex flex-col items-center justify-between
                  "
                >
                  <div
                    className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto
                  w-[50%] h-[50%] bg-[#13345F] rounded-[32px] opacity-0 transition-all duration-300
                  group-hover:opacity-100 group-hover:h-[100%] group-hover:w-[200px] -z-10"
                  />
                  <div>
                    <div
                      className="h-[190px] w-[170px] bg-cover bg-top bg-no-repeat rounded-[32px] mb-4"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    ></div>
                    <h2 className="mt-4 text-left font-semibold text-[1rem] text-white">
                      {newName}
                    </h2>
                  </div>
                  <div className="mt-8 text-left font-semibold text-[1rem] w-full flex flex-col justify-end text-white">
                    <div className="flex flex-row items-center justify-between text-[0.8rem] w-full">
                      <Link
                        to={"https://www.amazon.in/"}
                        target="_blank"
                        className="mr-1"
                      >
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
                          className="border-l-[1px] border-white pl-4"
                        />
                        <p>{review_count}</p>
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
          }
        })}
      </Swiper>
    </div>
  );
};

export default PopularSeriesBooks;
