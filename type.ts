import { StaticImageData } from "next/image";

export interface ProductProps {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  price: number;
  rowprice: number;
  title: string;
  position: string;
  ratings: number;
  description: string;
  brand: string;
  // quantity: number;

  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: [
    {
      _key: string;
      _ref: string;
      _type: string;
    },
  ];
  isnew: boolean;
  body: any;
  quantity: number;
}

export interface StateProps {
  orebi: {
    productData: ProductProps[];
  };
}


export interface ProductIdProps {
  _id: number;
  links: string;
  img: StaticImageData;
  title: string;
  prevPrice: number;
  price: number;
  brand: string;
  new: boolean;
  rating: number;
  description: string;
} 