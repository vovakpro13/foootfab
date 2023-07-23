"use client";

import Filters from "@/components/Filters";
import Card from "@/components/Card";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { Brand, Price, Size, SType } from "@/constants/enums";
import { Products } from "@/constants/products";
import { useRouter, useSearchParams } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState<Brand>(Brand.All);
  const [price, setPrice] = useState<Price>(Price.All);
  const [size, setSize] = useState<Size>(Size.All);
  const [type, setType] = useState<SType>(SType.All);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setSearch((searchParams.get("search") as string) || "");
  }, [searchParams.get("search")]);

  const filteredProducts = Products.filter(
    (product) =>
      (brand === Brand.All || product.brand === brand) &&
      (price === Price.All || +product.price >= +price) &&
      (size === Size.All || product.sizes.includes(size)) &&
      (type === SType.All || product.type === type) &&
      (!search || product.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container flex flex-col md:flex-row mx-auto p-4 gap-4">
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

      <div className="w-full flex flex-col md:flex-row gap-10 p-4 ">
        {filteredProducts.map((product: Product) => (
          <Card key={product.code} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
