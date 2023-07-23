import Filter from "@/components/Filter";
import { Brand, Price, Size, SType } from "@/constants/enums";

interface FiltersProps {
  brand: Brand;
  setBrand: React.Dispatch<React.SetStateAction<Brand>>;

  price: Price;
  setPrice: React.Dispatch<React.SetStateAction<Price>>;

  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;

  type: SType;
  setType: React.Dispatch<React.SetStateAction<SType>>;
}

const Filters: React.FC<FiltersProps> = ({
  brand,
  setBrand,
  price,
  setPrice,
  size,
  setSize,
  type,
  setType,
}) => {
  const brands = Object.values(Brand);
  const prices = Object.values(Price);
  const sizes = Object.values(Size);
  const types = Object.values(SType);

  return (
    <div className="w-full md:w-1/4 p-4 md:border-r-2 border-gray-200">
      <Filter
        label="Бренд"
        options={brands}
        value={brand}
        onChange={(e) => setBrand(e.target.value as Brand)}
      />
      <Filter
        label="Ціна від"
        options={prices}
        value={price}
        onChange={(e) => setPrice(e.target.value as Price)}
      />
      <Filter
        label="Розмір"
        options={sizes}
        value={size}
        onChange={(e) => setSize(e.target.value as Size)}
      />
      <Filter
        label="Тип"
        options={types}
        value={type}
        onChange={(e) => setType(e.target.value as SType)}
      />
    </div>
  );
};

export default Filters;
