import Image from "next/image";

import {ProductType} from "../../product/types";

export default function Item({image, name, price}: ProductType) {
  return (
    <article className="cursor-pointer">
      <section className="border-b-2 bg-gradient-to-b from-black to-dark">
        <Image alt={name} height={1156} src={image} width={880} />
      </section>
      <section className="flex justify-between py-3 text-lg">
        <span className="font-semibold">{name}</span>
        <span className="font-semibold">${price}</span>
      </section>
    </article>
  );
}
