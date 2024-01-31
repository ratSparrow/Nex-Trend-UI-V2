/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import useVendor from "../hooks/useVendor";
import auth from "../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";

const VendorRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isVendor, vendorLoading] = useVendor(user?.email);
  const location = useLocation();
  if (loading || vendorLoading) {
    return <Loading />;
  }
  if (user && isVendor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default VendorRoute;
