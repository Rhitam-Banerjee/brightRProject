import { host } from "../utils/API_RouteBase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSeries,
  setShowPopularBooks,
  setTitles,
} from "../Features/Books/bookSlice";
import { useEffect, useState } from "react";
import axios from "axios";
const PopularSeries = () => {
  const { showPopularBooks, bookTitle, seriesSelected } = useSelector(
    (store) => store.books
  );
  const { age } = useSelector((store) => store.age);
  const [objKeys, setObjKeys] = useState([]);
  const dispatch = useDispatch();
  const getBooks = async () => {
    const responses = await axios
      .get(`${host}/popularBooks?age=${age}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    delete responses["Best Seller - Most Popular"];
    delete responses["Most Popular Series"];
    delete responses["New York Times Bestseller"];
    delete responses["Global Bestseller"];
    delete responses["Teacher Pick"];
    setObjKeys(Object.keys(responses));
    dispatch(setTitles(responses));
  };
  useEffect(() => {
    getBooks();
  }, [age]);
  return (
    <div className="max-w-7xl w-full px-2 m-auto">
      <h1 className="text-white font-semibold text-[1.2rem] pt-[75px]">
        PopularSeries
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
        className="mySwiper pt-[50px] flex justify-between "
      >
        {objKeys.map((title, index) => {
          const { image } =
            bookTitle[`${title}`][bookTitle[`${title}`].length - 1];
          const length = bookTitle[`${title}`].length;
          const isValidImageUrl = /\.(jpeg|jpg|gif|png)$/i.test(image);
          if (isValidImageUrl && image.length > 10) {
            return (
              <SwiperSlide
                datatype={`slide${index}`}
                key={index}
                className="h-[400px] !w-[200px] group !bg-transparent pl-[20px]"
              >
                <div
                  className={`relative w-[200px] h-full p-4 -z-[50px] transition-all duration-300
                flex flex-col justify-start items-start bg-transparent
                 ${
                   seriesSelected === title && showPopularBooks
                     ? "scale-[1.2] !translate-y-[40px] opacity-100"
                     : "opacity-50 group-hover:scale-[1.2] group-hover:translate-y-[40px] group-hover:opacity-100"
                 }`}
                  onClick={() => {
                    console.log(title);
                    dispatch(changeSeries(title));
                    dispatch(setShowPopularBooks());
                  }}
                >
                  <div
                    className="h-[190px] w-[170px] bg-cover bg-top bg-no-repeat rounded-[32px] mb-4"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                  <div className="flex flex-col justify-start items-start text-[0.8rem] font-semibold text-white">
                    <span className="my-2 text-left">{title}</span>
                    <span>{length} Books</span>
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

export default PopularSeries;
