import {CheckoutElementType} from "../../product/types";
import CartProduct from "../CartProduct";

interface Iprops {
  close: Function;
  cart: CheckoutElementType[];
  updateCheckoutElement: Function;
}

export default function Cart({close, cart, updateCheckoutElement}: Iprops) {
  const total = 0.0;

  return (
    <section className="absolute z-10 top-0 right-0 bg-black flex flex-col p-4 border-b w-full min-h-full">
      <button className="ml-auto text-3xl uppercase font-bold" onClick={() => close(false)}>
        → close
      </button>
      <h2 className="text-9xl uppercase font-bold text-center select-none">cart</h2>
      <ul className="flex flex-col gap-2 my-4">
        {cart.map((elem) => (
          <CartProduct
            key={elem.product.name}
            checkoutElement={elem}
            updateCheckoutElement={updateCheckoutElement}
          />
        ))}
      </ul>
      <article className="flex justify-between text-bold text-3xl uppercase mt-auto">
        <span>total</span>
        <span>${total}</span>
      </article>
      <button className="text-6xl uppercase font-bold border-t p-2">checkout</button>
    </section>
  );
}
