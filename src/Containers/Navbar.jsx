import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo, userImg } from "../assets";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { PiHamburgerDuotone } from "react-icons/pi";
import {
  changeDelivery,
  loginout,
  setActive,
} from "../Features/User/userSlice";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Navbar = () => {
  const { delivery, activePage, menuItems, isLoggedin } = useSelector(
    (store) => store.user
  );
  const [deliveryDate, setDeliveryDate] = useState(new Date(delivery));
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
  const [changeDeliveryDetails, setchangeDeliveryDetails] = useState(false);
  const date = `${new Date(delivery).toLocaleDateString("default", {
    weekday: "short",
  })}, ${new Date(delivery).getDate()} ${new Date(delivery).toLocaleDateString(
    "default",
    { month: "short" }
  )}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeDelivery({
        date: new Date(deliveryDate).toISOString(true),
      })
    );
  }, [deliveryDate]);
  return (
    <section className="fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white z-50">
      <div className=" max-w-7xl m-auto py-4 px-2 flex flex-row items-center justify-between gap-8 lg:gap-2 xs:gap-0 text-[12px]">
        <div className="flex-1 custom:!flex-none flex flex-row items-center justify-start xs:w-max">
          <div className="mr-4 xs:mr-2">
            <img src={logo} alt="Logo" className="xs:w-[70px]" />
          </div>
          <form className="custom:hidden flex-1 flex flex-row bg-blueLightColor p-2 rounded-xl max-w-[380px]">
            <button type="submit" className="">
              <CiSearch className="text-[#9DABCE] font-black text-[1.2rem]" />
            </button>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search by author, title, age, genre..."
              className="ml-2 bg-transparent w-full outline-none"
            />
          </form>
        </div>
        <div className="flex-1 flex flex-row justify-around items-center">
          <ul className="w-full max-w-[200px] flex flex-row justify-between items-center xs:justify-start xs:gap-4">
            {menuItems.map((items, index) => {
              const { title, link } = items;
              return (
                <li
                  key={index}
                  className={`${
                    activePage === title
                      ? "text-blue-400"
                      : "hover:text-gray-400"
                  }`}
                  onClick={() => dispatch(setActive(`${title}`))}
                >
                  <Link to={`${link}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
          {isLoggedin === true ? (
            <div className="custom:hidden gap-2 flex-1 flex justify-around items-center">
              <span
                className={`ml-2 pl-4 border-l-[1px] border-l-gray-400  ${
                  activePage === "My Books"
                    ? "text-blue-400"
                    : "hover:text-gray-400"
                } `}
                onClick={() => dispatch(setActive("My Books"))}
              >
                <Link to={"/brightRProject/myBooks"}>My Books</Link>
              </span>
              <div className="flex flex-row">
                <div className="flex flex-row justify-center items-center mr-4">
                  <div className="flex flex-col justify-end items-end">
                    <p>Next Delivery</p>
                    <p>{date}</p>
                  </div>
                  <div className="ml-2 relative">
                    {showDeliveryDetails === false ? (
                      <IoMdArrowDropdownCircle
                        className="text-[1.2rem]"
                        onClick={() => {
                          setShowDeliveryDetails(true);
                          setShowProfileDetails(false);
                        }}
                      />
                    ) : (
                      <IoMdArrowDropdownCircle
                        className="text-[1.2rem] rotate-180"
                        onClick={() => {
                          setShowDeliveryDetails(false);
                          setchangeDeliveryDetails(false);
                        }}
                      />
                    )}
                    {showDeliveryDetails && changeDeliveryDetails === false && (
                      <div
                        className="absolute top-[150%] right-0 w-max p-2 border-[1px] border-gray-300 rounded-lg shadow-md cursor-pointer bg-white"
                        onClick={() => setchangeDeliveryDetails(true)}
                      >
                        Change Next Delivery Date
                      </div>
                    )}
                    {changeDeliveryDetails && (
                      <div className="absolute top-[150%] w-max right-0">
                        <Calendar
                          value={deliveryDate}
                          onChange={setDeliveryDate}
                          minDate={new Date()}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <img
                      src={userImg}
                      alt="Profile Image"
                      onClick={() => {
                        setShowProfileDetails(!showProfileDetails);
                        setchangeDeliveryDetails(false);
                        setShowDeliveryDetails(false);
                      }}
                    />
                  </div>
                  {showProfileDetails && (
                    <div className="absolute top-[150%] right-0 w-max text-[0.8rem] shadow-md border-[1px] border-gray-300 rounded-lg bg-white">
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-start items-center p-4">
                          <img
                            src={userImg}
                            alt="Profile Image"
                            className="mr-3"
                          />
                          <div>
                            <p>Rhitam Banerjee</p>
                            <small>banerjeerhitam1@gmail.com</small>
                          </div>
                        </div>
                        <span className="p-4 cursor-pointer">Edit</span>
                      </div>
                      <div
                        className="border-t-[1px] border-gray-300 p-4 cursor-pointer"
                        onClick={() => dispatch(loginout())}
                      >
                        <span>Sign-Out</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="custom:hidden max-w-[200px] w-full flex justify-between items-center">
              <span
                className={`pl-4 border-l-[1px] border-l-gray-400 cursor-pointer`}
                onClick={() => dispatch(loginout())}
              >
                Sign In
              </span>
              <Link
                to={"/brightRProject/blogs"}
                onClick={() => dispatch(setActive("Blogs"))}
              >
                <div className="px-4 py-2 lg:px-2 lg:py-1 rounded-lg bg-highlight text-white font-bold cursor-pointer">
                  Get Started
                </div>
              </Link>
            </div>
          )}
        </div>
        <PiHamburgerDuotone className="hidden custom:block" />
      </div>
    </section>
  );
};

export default Navbar;
