import { useDispatch, useSelector } from "react-redux";
import { setAge } from "../Features/Age/ageSlice";
import { setActive } from "../Features/User/userSlice";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  const { ageArr, childArr } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <section className="relative h-[200px] w-full bg-no-repeat bg-cover bg-center mt-[70px]">
      <div className="absolute bottom-[-20px] left-0 right-0 w-full h-[95%] -z-10 bg-gradient-to-r from-gradientStop1 via-gradientStop2 to-gradientStop3 bg-no-repeat bg-cover bg-center" />
      <div className="relative max-w-7xl m-auto h-full w-full flex flex-col">
        <span className="absolute top-[50px] left-0 pl-2 font-semibold text-[1.2rem]">
          Browse by Age group
        </span>
        <div className="flex flex-row items-end justify-between text-[0.8rem]">
          <img src={childArr[0]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[0]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[0]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[1]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[1]}
              </p>
              <p>years</p>
            </Link>
          </div>
          <img src={childArr[1]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[2]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[2]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[3]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[3]}
              </p>
              <p>years</p>
            </Link>
          </div>
          <img src={childArr[2]} alt="zero-one" />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] w-full max-w-[150px]">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[4]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[4]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 bg-white rounded-md text-[0.8rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[5]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] font-semibold">
                {ageArr[5]}
              </p>
              <p>years</p>
            </Link>
          </div>
          <img src={childArr[3]} alt="zero-one" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
