import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Loading from "../../components/common/Loading";
import CartModal from "../../components/cart/CartModal";
import { Link } from "react-router-dom";
import Product from "./Product";

const Shop = ({searchText}) => {
  const [displayProduct, loading] = useProducts("shop");


  if (loading === true) {
    return <Loading />;
  }
  return (
    <main className="py-5">
      <section className=" p-2 max-w-[1200px] mx-auto">

        <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
          <span className="border-b-2 border-orange-600 ">
            {" "}
            Our Featured Items{" "}
          </span>
        </h2>
        {loading === true ? (
          <Loading />
        ) : (
          <div className="grid ">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {displayProduct
                .filter((item) => {
                  return searchText.toLocaleLowerCase() === ""
                    ? item
                    : item.name.toLocaleLowerCase().includes(searchText);
                })
                .map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))
                .reverse()}
            </div>

            <div className="cart-container border-l-2 border-accent ">
              <CartModal>
                <Link to="/orders">
                  <button className="btn-regular">Review Order</button>
                </Link>
              </CartModal>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Shop;
