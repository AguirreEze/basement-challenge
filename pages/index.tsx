import type {NextPage} from "next";
import Image from "next/image";
import {useEffect, useState} from "react";

import Item from "../components/Item";
import logo from "../public/logo.svg";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import {ProductType} from "../product/types";
import {getProducts} from "../services/products";

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts<ProductType[]>().then(setProducts);
  }, []);

  return (
    <div className="h-full flex bg-black flex-col">
      <header className="m-auto text-white text-center flex flex-col p-4">
        <nav className="flex flex-row justify-between p-2 items-center">
          <div className="sm:block hidden">
            <Image alt="Basement" src={logo} />
          </div>
          <div className="block sm:hidden">
            <span className="text-4xl font-black">b.</span>
          </div>
          <button className="border-2 py-2 uppercase font-bold px-6 rounded-full">Cart</button>
        </nav>
        <Image alt={"Basement Supply"} src={header} />
      </header>
      <section className="flex my-4">
        <span className="border-t border-b text-3xl font-bold py-1 w-full text-center">
          {"- A man can't have enough basement. swag"}
        </span>
      </section>
      <section className="sm:w-full flex justify-center content-center sm:flex-row max-w-screen-xl  gap-6 flex-col px-4">
        {products.map((product) => (
          <Item
            key={product.name}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
      <footer className="mx-auto">
        <Image alt={"Wear everyday"} src={footer} />
      </footer>
    </div>
  );
};

export default Home;
