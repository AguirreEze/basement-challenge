import Image from "next/image";

import {CheckoutElementType} from "../../product/types";

interface Iprops {
  checkoutElement: CheckoutElementType;
  updateCheckoutElement: Function;
}

export default function CartProduct({checkoutElement, updateCheckoutElement}: Iprops) {
  const handleMoreClick = () => {
    const updatedElement = {
      ...checkoutElement,
      cant: checkoutElement.cant + 1,
    };

    updateCheckoutElement(updatedElement);
  };
  const handleLessClick = () => {
    if (checkoutElement.cant === 1) return;
    const updatedElement = {
      ...checkoutElement,
      cant: checkoutElement.cant - 1,
    };

    updateCheckoutElement(updatedElement);
  };

  return (
    <article className="border flex flex-row h-full">
      <section className="h-full w-1/4">
        <Image
          alt={checkoutElement.product.description}
          height={1156}
          src={checkoutElement.product.image}
          width={880}
        />
      </section>
      <section>
        <h3>{checkoutElement.product.name}</h3>
        <section className="flex items-center">
          <h2 className="uppercase mr-2">cant:</h2>
          <div className="border-2 rounded-full w-20 flex justify-around px-1">
            <button className="text-xl" onClick={handleMoreClick}>
              +
            </button>
            <span className="text-xl">{checkoutElement.cant}</span>
            <button className="text-xl" onClick={handleLessClick}>
              -
            </button>
          </div>
        </section>
      </section>
    </article>
  );
}
