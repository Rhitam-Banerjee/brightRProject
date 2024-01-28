/* eslint-disable react/prop-types */
import { host } from "../utils/API_RouteBase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { amazon, people, stars } from "../assets";
import { FaRegHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
const BrowseBooks = () => {
  const { age } = useSelector((store) => store.age);
  const [allBooks, setAllBooks] = useState([]);
  const getBooks = async () => {
    const responses = await axios
      .get(`${host}/browseLibrary?age=${age}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    responses.splice(-1);
    setAllBooks(responses);
  };
  useEffect(() => {
    getBooks();
  }, [age]);
  return (
    <section className="mt-[100px]">
      {[...allBooks].reverse().map((bookDetails, index) => {
        const { catagory } = bookDetails;
        return (
          <div key={index} className="mt-[50px]">
            <h1 className="mt-[-40px] pl-2 w-full max-w-7xl m-auto font-bold text-[2rem] xs:text-[1.2rem]">
              {catagory}
            </h1>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              grabCursor={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper pt-[50px] flex justify-between"
            >
              {Object.keys(bookDetails).map((keys, index) => {
                const { name, image, rating, review_count } = bookDetails[keys];
                const isValidImageUrl = /\.(jpeg|jpg|gif|png)$/i.test(image);
                if (name !== "" && image?.length > 10 && isValidImageUrl) {
                  let newName = name?.split(/:|\?/)[0];
                  return (
                    <SwiperSlide
                      datatype={`slide${index}`}
                      key={index}
                      className="startCarouselSlideMulti h-auto !w-[200px] group"
                    >
                      <div
                        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto
                  w-[50%] h-[50%] bg-blueLightColor rounded-[32px] opacity-0 transition-all duration-300
                  group-hover:opacity-100 group-hover:h-[100%] group-hover:w-[200px] -z-10"
                      />
                      <div
                        className="h-full p-4 z-[-50px] transition-all duration-300
                    flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className="h-[190px] aspect-7/8 rounded-[32px]"
                            style={{
                              background:
                                "linear-gradient(rgba(0,0,0,1), rgba(255,255,255,1)) !important",
                              backgroundPosition: "center",
                              backgroundImage: `url(${image})`,
                            }}
                          ></div>
                          <h2 className="mt-4 text-left font-semibold text-[1rem]">
                            {newName}
                          </h2>
                        </div>
                        <div className="flex-1 text-left font-semibold text-[1rem] w-full flex flex-col justify-end">
                          <div className="flex flex-row items-center justify-start text-[0.8rem] w-full">
                            <Link
                              to={"https://www.amazon.in/"}
                              target="_blank"
                              className="mr-3"
                            >
                              <img src={amazon} alt="Amazon" />
                            </Link>
                            <div className="flex flex-row justify-start items-center">
                              <img src={stars} alt="Rating" />
                              <p className="ml-1">{rating}</p>
                            </div>
                            <div className="ml-4 flex flex-row items-center justify-start">
                              <img
                                src={people}
                                alt="Read By"
                                className="border-l-[1px] border-black pl-4"
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
      })}
    </section>
  );
};

export default BrowseBooks;
