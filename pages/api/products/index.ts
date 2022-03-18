import type {NextApiRequest, NextApiResponse} from "next";

import {ProductType} from "../../../product/types";

const initialData: ProductType[] = [
  {
    name: "Black t-shirt",
    price: 7.95,
    image: "/products/shirt.png",
    description: "unisex basic softstyle t-shirt",
  },
  {
    name: "Black hoodie",
    price: 13,
    image: "/products/hoodie.png",
    description: "unisex basic softstyle hoodie",
  },
  {
    name: "Black cap",
    price: 23,
    image: "/products/cap.png",
    description: "unisex basic softstyle cap",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductType[]>) {
  res.status(200).json(initialData);
}
