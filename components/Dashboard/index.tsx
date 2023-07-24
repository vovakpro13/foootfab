"use client";

import Filters from "@/components/Filters";
import Card from "@/components/Card";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { Brand, Price, Size, SType } from "@/constants/enums";
import { Products } from "@/constants/products";
import { useSearchParams } from "next/navigation";

const Dashboard: React.FC = () => {
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState<Brand>(Brand.All);
  const [price, setPrice] = useState<Price>(Price.All);
  const [size, setSize] = useState<Size>(Size.All);
  const [type, setType] = useState<SType>(SType.All);
  const [search, setSearch] = useState<string>("");

  const searchp = searchParams.get("search");

  useEffect(() => {
    setSearch((searchParams.get("search") as string) || "");
  }, [searchParams, searchp]);

  const filteredProducts = Products.filter(
    (product) =>
      (brand === Brand.All || product.brand === brand) &&
      (price === Price.All ||
        (product.discount
          ? +(+product.price * (1 - product.discount / 100)).toFixed(0)
          : +product.price) >= +price) &&
      (size === Size.All || product.sizes.includes(size)) &&
      (type === SType.All || product.type === type) &&
      (!search || product.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container flex flex-col md:flex-row mx-auto py-4 gap-4">
      <Filters
        brand={brand}
        setBrand={setBrand}
        price={price}
        setPrice={setPrice}
        size={size}
        setSize={setSize}
        type={type}
        setType={setType}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-10 py-4 md:p-4">
        {filteredProducts.map((product: Product) => (
          // @ts-ignore
          <Card key={product.code.toString()} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
