import { host } from "../utils/API_RouteBase";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { amazon, people, stars } from "../assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Carousel = () => {
  const { bgColorArray } = useSelector((store) => store.user);
  const { age } = useSelector((store) => store.age);
  const [topBooks, setTopBooks] = useState([]);
  const getBooks = async () => {
    const response = await axios
      .get(`${host}/getTopBooksByReviewCount?age=${age}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    if (response.success) {
      setTopBooks(response.book_set[0].books);
    }
  };
  useEffect(() => {
    getBooks();
  }, [age]);
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      navigation={true}
      className="mySwiper h-[300px] lg:mb-[200px] xs:mb-[100px]"
    >
      {topBooks.map((book, index) => {
        const { name, image, rating, review_count, description } = book;
        const newName = name.split(":")[0];
        if (name !== "" && description && image.length > 10) {
          const newDescription = description.substring(0, 100) + "...";
          const imageExtension = "jpg";
          const includesExtension = image.includes(imageExtension);
          const newImage = !includesExtension ? image + ".jpg" : image;
          return (
            <SwiperSlide key={index}>
              <div
                className={`relative p-2 lg:pt-4 flex flex-row lg:flex-col items-center justify-end w-[92%] md:w-full xs:max-w-[300px] m-auto h-[400px] lg:h-[700px] gap-8 group 
                `}
              >
                <div
                  className="absolute top-1/2 right-0 -translate-y-1/2 h-[80%] w-[80%] ml-auto bg-[${bgColor}] rounded-[32px] -z-10 transition-all duration-300 
                group-hover:h-[90%] lg:h-full lg:w-full lg:group-hover:h-full group-hover:w-full"
                  style={{
                    background: bgColorArray[index % 4],
                  }}
                />
                <div
                  className={`h-[90%] w-[340px] lg:h-[300px] xs:w-full m-auto aspect-7/8 lg:aspect-auto rounded-[32px] 
                -rotate-[5deg] group-hover:rotate-0 transition-all duration-300`}
                  style={{
                    background:
                      "linear-gradient(rgba(255,255,255,1),rgba(0,0,0,1))",
                    backgroundImage: `url(${newImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "content-box",
                  }}
                />
                <div className="ml-auto text-left flex flex-col text-[0.9rem] p-8 pl-4">
                  <div className="flex flex-row items-center text-[0.6rem] text-[#3B72FF]">
                    <div className="px-2 py-1 border-[1px] border-[#3B72FF1F] rounded-md">
                      New Arrival
                    </div>
                  </div>
                  <h2 className="text-[24px] font-[600] mt-2">{newName}</h2>
                  <div className="flex flex-row items-center justify-start my-4">
                    <Link
                      to={"https://www.amazon.in/"}
                      target="_blank"
                      className="mr-4"
                    >
                      <img src={amazon} alt="Amazon" />
                    </Link>
                    <img src={stars} alt="Rating" className="pr-2" />
                    <p className="mr-4">{rating}</p>
                    <img
                      src={people}
                      alt="Read By"
                      className="border-l-[1px] border-black pl-4 pr-2"
                    />
                    <p>{review_count}</p>
                  </div>
                  <p>{newDescription}</p>
                  <Link to={"https://www.amazon.in/"} target="_blank">
                    <p className="font-semibold text-[1rem]">Read Mode</p>
                  </Link>
                  <div
                    className="opacity-0 scale-50 mt-4 transition-all duration-300 px-4 py-2 flex flex-row items-center
                 text-[#3B72FF] border-[2px] border-[#3B72FF] rounded-md w-max cursor-pointer group-hover:opacity-100 group-hover:scale-100"
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
  );
};

export default Carousel;
