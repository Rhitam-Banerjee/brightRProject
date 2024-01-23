import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoWhite } from "../assets";
import { setActive } from "../Features/User/userSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { footer } = useSelector((store) => store.user);
  return (
    <section className="mt-[100px] h-[323px] w-full bg-highlight flex flex-col justify-between">
      <div className="h-max w-full max-w-4xl p-4 grid place-items-center m-auto grid-cols-4 md:grid-cols-2 gap-4">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h2 className="text-white font-semibold mb-2">Get Connected</h2>
          {footer.list1.map((item, index) => {
            const { title, link } = item;
            return (
              <Link key={index} to={link} target="_blank" className="py-1">
                <div className="text-gray-200">{title}</div>
              </Link>
            );
          })}
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h2 className="text-white font-semibold mb-2">Policy</h2>
          {footer.list2.map((item, index) => {
            const { title, link } = item;
            return (
              <Link key={index} to={link} target="_blank" className="py-1">
                <div className="text-gray-200">{title}</div>
              </Link>
            );
          })}
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h2 className="text-white font-semibold">Follow Us</h2>
          <ul className="flex flex-row items-center justify-between mt-2">
            {footer.list3.map((item, index) => {
              const { title, image, link } = item;
              return (
                <Link key={index} to={link} className="mr-2" target="_blank">
                  <img src={image} alt={title} />
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-full flex items-start">
          <Link
            to={"/brightRProject/"}
            onClick={() => dispatch(setActive("Home"))}
          >
            <img src={logoWhite} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="h-[63px] w-full bg-[rgba(0,0,0,0.1)] grid place-items-center font-light text-gray-300">
        <span>© 2024 BrightR.Club</span>
      </div>
    </section>
  );
};

export default Footer;
