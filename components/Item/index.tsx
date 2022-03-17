import Image from "next/image";

interface Iprops {
  product: StaticImageData;
  description: string;
  price: number;
}

export default function Item({product, description, price}: Iprops) {
  return (
    <article className="cursor-pointer">
      <section className="border-b-2 bg-gradient-to-b from-black to-dark">
        <Image alt={description} src={product} />
      </section>
      <section className="flex justify-between py-3 text-lg">
        <span className="font-semibold">{description}</span>
        <span className="font-semibold">${price}</span>
      </section>
    </article>
  );
}
