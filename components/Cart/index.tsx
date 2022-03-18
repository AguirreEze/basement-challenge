interface Iprops {
  close: Function;
}

export default function Cart({close}: Iprops) {
  const total = 0.0;

  return (
    <section className="fixed z-10 inset-0 bg-black flex flex-col p-4">
      <button className="ml-auto text-3xl uppercase font-bold" onClick={() => close(false)}>
        → close
      </button>
      <h2 className="text-9xl uppercase font-bold text-center select-none">cart</h2>
      <article className="flex justify-between text-bold text-3xl uppercase mt-auto">
        <span>total</span>
        <span>${total}</span>
      </article>
      <button className="text-6xl uppercase font-bold border-t p-2">checkout</button>
    </section>
  );
}
