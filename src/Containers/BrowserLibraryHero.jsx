import { Link } from "react-router-dom";
import { leftArrow } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../Features/User/userSlice";
import { setAge } from "../Features/Age/ageSlice";
const BrowserLibraryHero = ({ text }) => {
  const { age, maxAge } = useSelector((store) => store.age);
  const dispatch = useDispatch();
  return (
    <section className="mt-[100px] max-w-7xl m-auto">
      <div className="flex flex-row justify-start items-center font-bold">
        <Link
          to={"/brightRProject/"}
          className="mr-4 scale-90 xs:mr-0"
          onClick={() => dispatch(setActive("Home"))}
        >
          <img src={leftArrow} alt="Back Arrow" />
        </Link>
        <div>
          <span className="text-[2rem] xs:text-[1.5rem]">Browse by {text}</span>
        </div>
      </div>
      <div className="my-8 px-4 gap-3 xs:grid xs:grid-cols-3 flex flex-wrap flex-row w-full mr-auto justify-start items-center">
        {[...Array(maxAge)].map((range, index) => {
          return (
            <div
              key={index}
              className={`py-4 px-2 w-[80px] text-center border-[1px] border-gray-200 rounded-xl ${
                age === index ? "bg-blueLightColor text-highlight" : ""
              } cursor-pointer`}
              onClick={() => {
                dispatch(setAge(index));
              }}
            >
              {index} - {index + 1}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowserLibraryHero;
