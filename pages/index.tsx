import type {NextPage} from "next";
import Image from "next/image";

import Item from "../components/Item";
import logo from "../public/logo.svg";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import cap from "../public/products/cap.png";
import hoodie from "../public/products/hoodie.png";
import shirt from "../public/products/shirt.png";

const Home: NextPage = () => {
  return (
    <div className="h-full flex bg-black flex-col">
      <header className="m-auto text-white text-center flex flex-col">
        <nav className="flex flex-row justify-between p-2">
          <Image alt="Basement" src={logo} />
          <button className="border-2 py-2 uppercase font-bold px-6 rounded-full">Cart</button>
        </nav>
        <Image alt={"Basement Supply"} src={header} />
        <span className="border-t border-b text-3xl font-bold py-1">
          {"- A man can't have enough basement. swag"}
        </span>
      </header>
      <section className="flex flex-row max-w-screen-xl mx-auto gap-6">
        <Item description="Black t-shirt" price={7.95} product={shirt} />
        <Item description="Black hoodie" price={13} product={hoodie} />
        <Item description="Black cap" price={23} product={cap} />
      </section>
      <footer className="mx-auto">
        <Image alt={"Wear everyday"} src={footer} />
      </footer>
    </div>
  );
};

export default Home;
