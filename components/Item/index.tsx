import Image from "next/image";

import {ProductType} from "../../product/types";

interface Iprops {
  productData: ProductType;
  addItemToCart: Function;
}

export default function Item({productData, addItemToCart}: Iprops) {
  const handleClick = () => {
    addItemToCart(productData);
  };

  return (
    <article className="relative">
      <section className="border-b-2 bg-gradient-to-b from-black to-dark">
        <Image alt={productData.name} height={1156} src={productData.image} width={880} />
      </section>
      <section className="flex justify-between py-3 text-lg">
        <span className="font-semibold">{productData.name}</span>
        <span className="font-semibold">${productData.price}</span>
      </section>
      <div
        className="absolute inset-0 flex justify-center items-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity bg-opdark"
        onClick={handleClick}
      >
        <span className="text-4xl font-bold uppercase">add to cart</span>
      </div>
    </article>
  );
}
