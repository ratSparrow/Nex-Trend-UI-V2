import { Link } from "react-router-dom";


const Machinery = () => {
    return (
      <div className="text-center ">
        <div className="bg-[#374151] py-4">
          <h2 className="text-[#F59238] my-1 text-md font-bold">
            Pro Buyer Exclusive
          </h2>
          <h2 className="text-[#F59238] my-1 text-sm font-normal">
            Get payment terms and much more
          </h2>
          <Link to="/coming-soon">
            <button className="bg-[#F59238] w-3/4 rounded-full my-1">
              Upgrade
            </button>
          </Link>
        </div>
        <div>
          <button className="bg-[#FF8C2E] mx-auto rounded-md py-1 font-semibold text-white w-full text-sm mt-2">
            <Link to="/coming-soon">Selected Machinery</Link>
          </button>
        </div>
      </div>
    );
};

export default Machinery;