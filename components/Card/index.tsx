import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Brand, SType } from "@/constants/enums";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
interface IProductCardProps {
  code: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  brand: Brand;
  type: SType;
  discount?: number;
}

const ProductCard: React.FC<IProductCardProps> = ({
  code,
  title,
  description,
  price,
  images,
  sizes,
  brand,
  type,
  discount,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(images[0]);

  const discountedPrice = discount
    ? (price * (1 - discount / 100)).toFixed(0)
    : null;

  return (
    <>
      <div className="flex-1 flex-grow basis-1 md:basis-1/2 lg:basis-1/3   flex flex-col bg-white shadow-lg rounded-lg">
        <div className="h-64 w-full overflow-hidden rounded-t-lg  mb-4 cursor-pointer">
          <div
            className="w-full h-full bg-orange-300 relative cursor-pointerrounded-t-lg hover:scale-125 overflow-hidden transition"
            style={{
              backgroundImage: `url(/${code}/${activeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="px-4 pb-4 flex flex-col flex-grow">
          <h2 className="text-2xl mb-2">{title}</h2>
          <p className="text-gray-700 mb-2">{description}</p>
          {discountedPrice ? (
            <p className="text-xl font-semibold line-through mb-2">
              {price} грн
            </p>
          ) : (
            <p className="text-xl font-semibold mb-2">{price} грн</p>
          )}
          {discountedPrice && (
            <p className="text-xl font-semibold text-red-600 mb-2">
              {discountedPrice} грн
            </p>
          )}
          <p className="text-sm text-gray-500 mb-2">Бренд: {brand}</p>
          <p className="text-sm text-gray-500 mb-2">Тип: {type}</p>
          <p className="text-sm text-gray-500 mb-2">
            Доступні розміри: {sizes.join(", ")}
          </p>

          <div className="flex-grow flex-1 flex items-end">
            <button
              onClick={() => {
                router.push("https://www.instagram.com/fooot.fab/");
              }}
              className="mt-6 flex-grow  bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600"
            >
              Замовити
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-2 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block w-full max-w-md py-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-2xl font-bold leading-6 text-gray-900 px-6"
              >
                {title}
              </Dialog.Title>

              <div className="mt-6">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`/${code}/${image}`}
                        alt={title}
                        className="object-cover w-full h-[450px] md:h-[600px] min-h-0"
                        style={{
                          backgroundPosition: "center",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <Dialog.Description className="mt-2 text-gray-500  px-6">
                {description}
              </Dialog.Description>

              <div className="mt-4 flex justify-end gap-[24px] px-6">
                <button
                  type="button"
                  className="mt-4 flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-black rounded-md bg-gray-200 "
                  onClick={() => setIsOpen(false)}
                >
                  Закрити
                </button>

                <button
                  type="button"
                  className="mt-4 flex-1 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => {
                    setIsOpen(false);
                    router.push("https://www.instagram.com/fooot.fab/");
                  }}
                >
                  Замовити
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductCard;
