import { useEffect, useState } from "react";

const useProducts = (page) => {
  let [products, setProducts] = useState([]);
  let [displayProduct, setDisplayProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const size = 15;

  useEffect(() => {
    setLoading(true);
    fetch(`https://e-server-eta.vercel.app/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
        setLoading(false);
      });
  }, []);

  return [products, loading, displayProduct, setDisplayProduct];
};

export default useProducts;
