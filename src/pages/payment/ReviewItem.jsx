/* eslint-disable react/prop-types */

import Rating from "react-rating";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, price, shipping, quantity, img, seller, stock, star } = product;
  const totalPrice = Number(quantity * price).toFixed(2);
  return (
    <main className="product-container p-5 mx-2 rounded hover:border hover:border-red-400">
      <section className="">
        <section className="mr-8">
          <figure>
            <img
              className="rounded "
              src={img}
              alt=""
              style={{ width: "100%", height: "260px" }}
            />
          </figure>
        </section>

        <section className="text-left ">
          <h5 className="text-xl py-2 text-blue-600 " title={name}>
            {name.slice(0, 30)}..
          </h5>
          <h2 className="py-1">
            <span>
              Seller by
              <span className="text-blue-600 text-md "> {seller}</span>
            </span>
          </h2>
          <h2 className="text-md py-1 text-blue-600">
            In Stock =<span className=" font-semibold ml-2"> {stock} </span>
          </h2>
          <h5 className="text-md py-2 text-blue-600" title={name}>
            Shipping Charge = <span className="font-semibold">{shipping}</span>
          </h5>
          <h5 className="text-md  text-blue-600 py-1" title={name}>
            Quantity = <span className="font-semibold">{quantity}</span>
          </h5>

          <h2 className="text-red-600 py-1 font-bold">
            <i className="fa-solid fa-bangladeshi-taka-sign"></i>
            <span> {totalPrice}</span>
          </h2>

          <Rating
            className="text-orange-400 mt-1"
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />

          <br />
          <button
            className="w-full border rounded-lg bg-gray-300 text-red-600 hover:bg-red-700 hover:text-white p-1 mt-4"
            onClick={() => handleRemove(product)}
          >
            <i className="fas fa-trash "></i> Delete
          </button>
        </section>
      </section>
    </main>
  );
};

export default ReviewItem;
