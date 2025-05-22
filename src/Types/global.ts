import { ReactNode } from "react";


export type TRoutes = {
  index?: boolean;
  path?: string;
  element?: ReactNode;
  children?: TRoutes[];
  name?: string;
};

export interface TransactionDetails {
  user: { email: string };
  _id: string;
  status: string;
  totalPrice: number;
  createdAt: Date;
  transaction?: {
    id: string;
    method: string;
    transactionStatus: string;
  };
}
export interface User {
  id: string;
  activity: string;
  createdAt: string;
  name: string;
  email: string;
  role: string;
  _id: string;
}
export interface UserToken {
  id: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
  token: string;
}
export interface ICartModal {
  title: string;
  quantity: number;
  totalPrice: number;
}

export interface IBook {
  author: string;
  title: string;
  price: number;
  _id: string;
  image:string;
}

export interface IResponseBook {
  _id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  quantity: number;
  inStock: boolean;
  image:string;
}
