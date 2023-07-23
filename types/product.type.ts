import { Brand, Size, SType } from "@/constants/enums";

export type Product = {
  code: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  sizes: Size[];

  brand: Brand;
  type: SType;
  discount?: number;
};
