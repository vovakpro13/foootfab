import { Product } from "@/types/product.type";
import { Brand, Size, SType } from "@/constants/enums";

export const Products: Product[] = [
  {
    code: "D014",
    title: "D- Connect White Premium⭐️",
    description: "",
    images: ["/D014/1.jpg", "/D014/2.jpg", "/D014/3.jpg"],
    price: 3600,
    sizes: [Size.Size36, Size.Size39, Size.Size40],
    brand: Brand.Dior,
    type: SType.Sneakers,
  },
  {
    code: "",
    title: "",
    description: "",
    images: [],
    price: 0,
    sizes: [],
    brand: Brand.Dior,
    type: SType.Sneakers,
  },
];
