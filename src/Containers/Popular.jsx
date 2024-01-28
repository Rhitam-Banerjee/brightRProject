import { useSelector } from "react-redux";
import { PopularSeriesTitle, PopularSeriesBooks } from "../Components";
import { bg } from "../assets";
const Popular = () => {
  const { showPopularBooks } = useSelector((store) => store.books);
  return (
    <section
      className="my-[50px] h-max w-full bg-[#172957] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <PopularSeriesTitle />
      {showPopularBooks && <PopularSeriesBooks />}
    </section>
  );
};

export default Popular;
