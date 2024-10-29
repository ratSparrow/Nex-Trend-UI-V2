import Shop from "../shop/Shop";
import Hero from "./Hero";
import Marketing from "./Marketing";
import Testimonials from "./Testimonials";
import { useState } from "react"


const extras = [
  {
    id: 1,
    svg: <i className="fa-solid fa-car"></i>,
    title: "FREE SHIPPING & RETURN",
    description: "Free shipping on orders",
  },
  {
    id: 2,
    svg: <i className="fa-solid fa-bangladeshi-taka-sign"></i>,
    title: "MONEY BACK GUARANTEE",
    description: "100% money back guarantee",
  },
  {
    id: 3,
    svg: <i className="fa-solid fa-circle-check"></i>,
    title: "ONLINE SUPPORT 24/7",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    svg: <i className="fa-solid fa-credit-card"></i>,
    title: "SECURE PAYMENT",
    description: "Lorem ipsum dolor sit amet.",
  },
];

const Homepage = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (payload) => {
    setSearchText(payload);
  };
  return (
    <section>
      <div className="max-w-xl mx-auto text-center my-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow  w-full "
            placeholder="Search Product"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>

      </div>


      <Hero />
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto my-10">
        {extras.map((extra) => (
          <div
            className="flex items-center shadow-2xl m-4 p-4  rounded-md"
            key={extra.id}
          >
            <div className="text-[#F66A05] mr-8 text-2xl">{extra.svg}</div>
            <div className="py-1">
              <h2 className="text-sm font-semibold my-1">{extra.title}</h2>
              <h2 className="text-sm  ">{extra.description}</h2>
            </div>
          </div>
        ))}
      </section>
      <Shop searchText={searchText} />
      <Marketing />
      <Testimonials />
    </section>
  );
};

export default Homepage;
