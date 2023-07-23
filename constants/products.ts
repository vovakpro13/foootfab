import { Product } from "@/types/product.type";
import { Brand, Size, SType } from "@/constants/enums";

export const Products: Product[] = [
  {
    code: "D014",
    title: "D- Connect White Premium⭐️",
    description: "",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    price: 3600,
    sizes: [Size.Size36, Size.Size39, Size.Size40],
    brand: Brand.Dior,
    type: SType.Sneakers,
  },
  {
    code: "L005",
    title: "LV Rubber Slippers White",
    description:
      "Базові сліпи - комфорт на усе літо 😍\n" +
      "\n" +
      "Поєднання натуральної шкіри та гуми.\n" +
      "- у чорному та білому кольорі",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    price: 2050,
    sizes: [Size.Size36, Size.Size37, Size.Size38, Size.Size39, Size.Size40],
    brand: Brand.LouisVuitton,
    type: SType.Slippers,
    discount: 5,
  },
  {
    code: "D024",
    title: "Cr. Dior Sandal Black/White",
    description: "",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 2600,
    sizes: [Size.Size36, Size.Size37, Size.Size38, Size.Size39],
    brand: Brand.Dior,
    type: SType.Slippers,
  },
  {
    code: "D012",
    title: "Dior Sandals “Leopard Black”",
    description: "Леопарду багато не буває😍",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 2190,
    sizes: [Size.Size36, Size.Size37, Size.Size38, Size.Size39],
    brand: Brand.Dior,
    type: SType.Sandals,
  },
  {
    code: "D015",
    title: "Dior Slides Leopard Black",
    description: "",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 1950,
    sizes: [Size.Size39],
    brand: Brand.Dior,
    type: SType.Slides,
  },
  {
    code: "S013",
    title: "Yeezy Slide Orange",
    description:
      "🧡Додай яскравих фарб у повсякденні образи.\n" +
      "\n" +
      "Слайди із високоякісного каучуку.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    price: 1850,
    sizes: [
      Size.Size37,
      Size.Size38,
      Size.Size40,
      Size.Size41,
      Size.Size42,
      Size.Size43,
    ],
    brand: Brand.Adidas,
    type: SType.Slides,
    discount: 5,
  },
  {
    code: "2106",
    title: "530 White/Silver 2 Premium",
    description: "Кросівки Nb - краса і зручність.",
    images: ["2.jpg", "1.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 2350,
    sizes: [Size.Size36, Size.Size37, Size.Size40],
    brand: Brand.NewBalance,
    type: SType.Sneakers,
    discount: 5,
  },
  {
    code: "В001",
    title: "Vans Old School Platform Premium",
    description: "Венси - взуття, яке ніколи не вийде з моди.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    price: 2150,
    sizes: [Size.Size36, Size.Size37, Size.Size38, Size.Size39, Size.Size40],
    brand: Brand.Vans,
    type: SType.Sneakers,
  },
  {
    code: "L001",
    title: "LV Platform monogram",
    description: "",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    price: 2050,
    sizes: [Size.Size38, Size.Size39],
    brand: Brand.LouisVuitton,
    type: SType.Sandals,
  },
  {
    code: "S012",
    title: "Adilette Slide Mocco",
    description:
      "Стильні шльопанці для спекотного літа.\n" +
      "\n" +
      "З високоякісного каучуку, тому дуже легкі.\n" +
      "- ще є у білому, бежевому та чорному кольорі.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 1850,
    sizes: [Size.Size37, Size.Size38, Size.Size40],
    brand: Brand.Adidas,
    type: SType.Slides,
  },
  {
    code: "S011",
    title: "Adilette Slide White",
    description:
      "Шльопки для твого максимального комфорту: легенькі та еластичні.\n" +
      "\n" +
      "- є у білому, бежевому та чорному кольорі.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 1850,
    sizes: [Size.Size37, Size.Size40, Size.Size43, Size.Size44],
    brand: Brand.Adidas,
    type: SType.Slides,
  },
  {
    code: "CS029",
    title: "Comme Des Garçons Play White",
    description:
      "Оригінальний дизайн. Якість, стиль та зручність.\n" +
      "Ось чому конверси популярні серед молоді впродовж 100 років.",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 1400,
    sizes: [Size.Size36, Size.Size37, Size.Size38, Size.Size40],
    brand: Brand.Converse,
    type: SType.Sneakers,
  },
  {
    code: "",
    title: "",
    description: "",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    price: 0,
    sizes: [],
    brand: Brand.Dior,
    type: SType.Sneakers,
  },
];
