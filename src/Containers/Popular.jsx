import { PopularSeries, PopularSeriesBooks } from "../Components";
import { bg } from "../assets";
const Popular = () => {
  return (
    <section
      className="my-[50px] h-max min-h-[830px] w-full bg-[#172957] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <PopularSeries />
      <PopularSeriesBooks />
    </section>
  );
};

export default Popular;
