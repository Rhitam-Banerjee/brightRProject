import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { changeSeries } from "../Features/Books/bookSlice";
const PopularSeries = () => {
  const { bookTitle, allBooks, seriesSelected } = useSelector(
    (store) => store.books
  );
  const dispatch = useDispatch();
  return (
    <div className="max-w-7xl w-full px-2 m-auto">
      <h1 className="text-white font-semibold text-[1.2rem] pt-[75px]">
        PopularSeries
      </h1>
      <Swiper
        slidesPerView={5}
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
        className="mySwiper pt-[50px] flex justify-between "
      >
        {bookTitle.map((book, index) => {
          const { title, image } = book;
          const bookIndexCount = [
            ...allBooks.filter((abook) => {
              return abook.series === title;
            }),
          ];
          return (
            <SwiperSlide
              datatype={`slide${index}`}
              key={index}
              className="h-[400px] group !bg-transparent pl-[20px]"
            >
              <div
                className={`relative w-[200px] h-full p-4 -z-[50px] transition-all duration-300
                flex flex-col justify-start items-start bg-transparent 
                 ${
                   seriesSelected === title
                     ? "scale-[1.2] !translate-y-[40px] opacity-100"
                     : "opacity-50 group-hover:scale-[1.2] group-hover:translate-y-[40px] group-hover:opacity-100"
                 }`}
                onClick={() => dispatch(changeSeries(title))}
              >
                <div
                  className="h-[190px] w-[170px] bg-cover bg-top bg-no-repeat rounded-[32px] mb-4"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="flex flex-col justify-start items-start text-[0.8rem] font-semibold text-white">
                  <span className="my-2">{title}</span>
                  <span>{bookIndexCount.length} Books</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularSeries;
