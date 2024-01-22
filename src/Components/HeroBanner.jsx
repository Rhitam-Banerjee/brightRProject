import { useSelector } from "react-redux";
import { heroBgBanner } from "../assets";

const HeroBanner = () => {
  const { ageArr, childArr } = useSelector((store) => store.user);
  return (
    <section className="relative h-[200px] w-full bg-no-repeat bg-cover bg-center mt-[70px]">
      <div
        className="absolute bottom-[-20px] left-0 right-0 w-full h-[95%] -z-10"
        style={{
          backgroundImage: `url(${heroBgBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="relative max-w-7xl m-auto h-full w-full flex flex-col">
        <span className="absolute top-[50px] left-0 font-semibold text-[1.2rem]">
          Browse by Age group
        </span>
        <div className="flex flex-row items-end justify-between text-[0.8rem]">
          <img src={childArr[0]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[0]}
              </p>
              <p>years</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[1]}
              </p>
              <p>years</p>
            </div>
          </div>
          <img src={childArr[1]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[2]}
              </p>
              <p>years</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[3]}
              </p>
              <p>years</p>
            </div>
          </div>
          <img src={childArr[2]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[4]}
              </p>
              <p>years</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max">
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[5]}
              </p>
              <p>years</p>
            </div>
          </div>
          <img src={childArr[3]} alt="zero-one" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
