import type {NextPage} from "next";
import Image from "next/image";
import {useEffect, useState} from "react";

import Item from "../components/Item";
import logo from "../public/logo.svg";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import {CheckoutElementType, ProductType} from "../product/types";
import {getProducts} from "../services/products";
import Cart from "../components/Cart";

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CheckoutElementType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    getProducts<ProductType[]>().then(setProducts);
  }, []);

  const addItemToCart = (product: ProductType) => {
    return cart.find((elem) => elem.product.name === product.name)
      ? null
      : setCart([...cart, {product, cant: 1}]);
  };

  return (
    <div className="h-full flex bg-black flex-col">
      {showCart && <Cart cart={cart} close={setShowCart} />}
      <header className="m-auto text-white text-center flex flex-col p-4">
        <nav className="flex flex-row justify-between p-2 items-center">
          <div className="sm:block hidden">
            <Image alt="Basement" src={logo} />
          </div>
          <div className="block sm:hidden">
            <span className="text-4xl font-black">b.</span>
          </div>
          <button
            className="border-2 py-2 uppercase font-bold px-6 rounded-full"
            onClick={() => setShowCart(true)}
          >
            Cart
          </button>
        </nav>
        <Image alt={"Basement Supply"} src={header} />
      </header>
      <section className="flex my-4">
        <span className="border-t border-b text-3xl font-bold py-1 w-full text-center">
          {"- A man can't have enough basement. swag"}
        </span>
      </section>
      <section className="w-full flex  sm:flex-row  gap-6 flex-col px-4">
        {products.map((product) => (
          <Item key={product.name} addItemToCart={addItemToCart} productData={product} />
        ))}
      </section>
      <footer className="mx-auto">
        <Image alt={"Wear everyday"} src={footer} />
      </footer>
    </div>
  );
};

export default Home;
