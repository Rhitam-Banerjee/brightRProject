import { useDispatch, useSelector } from "react-redux";
import { setAge } from "../Features/Age/ageSlice";
import { setActive } from "../Features/User/userSlice";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  const { childArr } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <section className="relative min-h-[200px] w-full bg-no-repeat bg-cover bg-center mt-[70px]">
      <div className="absolute bottom-[25px] left-0 right-0 w-full h-[90%] lg:h-[110%] -z-10 bg-gradient-to-r from-gradientStop1 via-gradientStop2 to-gradientStop3 bg-no-repeat bg-cover bg-center" />
      <div className="relative max-w-7xl m-auto h-full w-full flex flex-col">
        <span className="absolute top-[50px] lg:top-0 left-0 pl-2 font-semibold text-[1.2rem]">
          Browse by Age group
        </span>
        <div className="mt-[50px] place-items-end custom:place-items-center gridHeroBanner">
          <img
            src={childArr[0]}
            alt="child infant"
            className="childAgeZeroFour"
          />
          <div className="grid grid-cols-2 gap-2 bannerAgeRange ageZeroFour">
            {[...Array(4)].map((i, age) => {
              return (
                <Link
                  to={"/brightRProject/browseLibrary"}
                  key={age}
                  className="p-2 text-[0.8rem] bg-white rounded-md"
                  onClick={() => {
                    dispatch(setAge(age));
                    dispatch(setActive("Browse Library"));
                  }}
                >
                  {age} - {age + 1}
                </Link>
              );
            })}
          </div>
          <img
            src={childArr[1]}
            alt="child infant"
            className="childAgeFourEight"
          />
          <div className="grid grid-cols-2 gap-2 bannerAgeRange ageFourEight">
            {[...Array(4)].map((i, age) => {
              return (
                <Link
                  to={"/brightRProject/browseLibrary"}
                  key={age + 4}
                  className="p-2 text-[0.8rem] bg-white rounded-md"
                  onClick={() => {
                    dispatch(setAge(age + 4));
                    dispatch(setActive("Browse Library"));
                  }}
                >
                  {age + 4} - {age + 5}
                </Link>
              );
            })}
          </div>
          <img
            src={childArr[2]}
            alt="child infant"
            className="childAgeEightTwelve"
          />
          <div className="grid grid-cols-2 gap-2 bannerAgeRange ageEightTwelve">
            {[...Array(4)].map((i, age) => {
              return (
                <Link
                  to={"/brightRProject/browseLibrary"}
                  key={age + 8}
                  className="p-2 text-[0.8rem] bg-white rounded-md"
                  onClick={() => {
                    dispatch(setAge(age + 8));
                    dispatch(setActive("Browse Library"));
                  }}
                >
                  {age + 8} - {age + 9}
                </Link>
              );
            })}
          </div>
          <img src={childArr[3]} alt="child infant" className="childAgeGrown" />
        </div>
        {/* <div className="lg:mt-[80px] lg:w-full lg:max-w-3xl lg:m-auto flex flex-row lg:grid lg:grid-cols-3 lg:place-items-center items-end justify-between text-[0.8rem]">
          <img src={childArr[0]} alt="zero-one" className="xs:w-[90px] " />
          <div className="flex flex-row items-start justify-between -translate-y-[60px] lg:translate-y-0 w-full max-w-[150px] xs:scale-75">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[0]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[0]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[1]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[1]}
              </p>
              <p>years</p>
            </Link>
          </div>
          <img
            src={childArr[1]}
            alt="zero-one"
            className="xs:w-[90px] lg:translate-y-[70px]"
          />
          {isMobile && (
            <img
              src={childArr[2]}
              alt="zero-one"
              className="xs:w-[90px] lg:translate-y-[100px]"
            />
          )}
          <div className="flex flex-row items-start justify-between -translate-y-[60px] lg:translate-y-0 w-full max-w-[150px] xs:scale-75">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[2]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[2]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[3]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[3]}
              </p>
              <p>years</p>
            </Link>
          </div>
          {!isMobile && <img src={childArr[2]} alt="zero-one" />}
          {isMobile && <div></div>}
          {isMobile && <div></div>}
          <div className="flex flex-row items-center justify-between -translate-y-[60px] lg:translate-y-0 w-full max-w-[150px] xs:scale-75">
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[4]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[4]}
              </p>
              <p>years</p>
            </Link>
            <Link
              to={"/brightRProject/browseLibrary"}
              className="px-4 py-2 xs:px-3 xs:py-[6px] bg-white rounded-md text-[0.8rem] md:text-[0.6rem] flex flex-col justify-center items-center w-max cursor-pointer"
              onClick={() => {
                dispatch(setAge(ageArr[5]));
                dispatch(setActive("Browse Library"));
              }}
            >
              <p className="w-max m-auto text-[1.2rem] md:text-[0.8rem] font-semibold">
                {ageArr[5]}
              </p>
              <p>years</p>
            </Link>
          </div>
          <img src={childArr[3]} alt="zero-one" className="" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroBanner;
