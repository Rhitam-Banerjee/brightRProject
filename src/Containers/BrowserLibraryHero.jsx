import { Link } from "react-router-dom";
import { leftArrow } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../Features/User/userSlice";
import { setAge } from "../Features/Age/ageSlice";
const BrowserLibraryHero = () => {
  const { age } = useSelector((store) => store.age);
  const { ageArr } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <section className="mt-[100px] max-w-7xl m-auto">
      <div className="flex flex-row justify-start items-center text-[2rem] font-bold">
        <Link
          to={"/brightRProject/"}
          className="mr-4"
          onClick={() => dispatch(setActive("Home"))}
        >
          <img src={leftArrow} alt="Back Arrow" />
        </Link>
        <div>
          <span>Browse by Age Group</span>
        </div>
      </div>
      <div className="my-8 flex flex-row w-full max-w-[520px] mr-auto justify-between items-center">
        {ageArr.map((range, index) => {
          return (
            <div
              key={index}
              className={`p-4 border-[1px] border-gray-200 rounded-xl ${
                age === range ? "bg-blueLightColor text-highlight" : ""
              } cursor-pointer`}
              onClick={() => {
                dispatch(setAge(range));
              }}
            >
              {range}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowserLibraryHero;