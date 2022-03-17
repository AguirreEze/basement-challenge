import type {NextApiRequest, NextApiResponse} from "next";

const initialData = [
  {
    name: "Black t-shirt",
    price: 7.95,
  },
  {
    name: "Black hoodie",
    price: 13,
  },
  {
    name: "Black cap",
    price: 23,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(initialData);
}
