import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";
import useVendor from "../hooks/useVendor";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/favicon.jpg";

const DashboardLayout = () => {
  const [user] = useAuthState(auth);
  const [isUserAdmin] = useAdmin(user?.email);
  const [isVendor] = useVendor(user?.email);
  return (
    <section className="mx-auto">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu px-4 w-70  text-base-content bg-orange-500">
            <Link to="/">
              <img src={logo} className="w-16 mx-auto" alt="" />
              <hr className="mt-1" />
            </Link>

            <h1 className="text-2xl mb-3 text-center text-white font-semibold">
              DASHBOARD
            </h1>

            <li className="text-white text-xl flex">
              <Link to="/dashboard">
                <i className="fa-solid fa-folder"></i> <span>Order</span>
              </Link>
            </li>
            {isUserAdmin ? (
              <>
                <li className="text-white text-xl flex">
                  <Link to="/dashboard/user">
                    {" "}
                    <i className="fa-solid fa-users"></i>
                    <span>All User</span>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {isVendor && (
              <li className="text-white text-xl flex">
                <Link to="/dashboard/addproduct">
                  <i className="fa-solid fa-square-plus"></i>
                  <span>Add Product</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
