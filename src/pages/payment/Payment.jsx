import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/payment/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw18DIOKhAAMFhLmXYrvTFY5MFl9URuUp9DkcNUE2ORgIBRMWoDgzhZ8fub6B4zdc5s1RPsGyYxWyVz0oNdOwiP00woXJJaTX"
);

const Payment = () => {
  const { total } = useSelector((state) => state.cart);
  let totalAmount;
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  totalAmount = total + shipping + tax;

  return (
    <div className=" max-w-[1200px] min-h-screen">
      <p className="text-xl text-center my-2">
        Please pay <strong>${totalAmount.toFixed(2)}</strong> for your product.
      </p>
      <div className="w-96 my-9 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm totalAmount={totalAmount} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
