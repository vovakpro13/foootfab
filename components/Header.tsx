"use client";

import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearch((searchParams.get("search") as string) || "");
  }, [searchParams.get("search")]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(location.pathname + "?search=" + e.target.value);
  };

  return (
    <header className="bg-white shadow-lg p-4 md:p-6">
      <div className="container mx-auto flex items-center gap-3.5 justify-between">
        <h1 className="text-2xl font-bold text-orange-600">FoootFab</h1>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </span>

          <input
            value={search}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 rounded-lg border-[1px] border-gray-200 focus:outline-none max-w-[200px] lg:max-w-[600px]"
            type="search"
            placeholder="Знайти товар"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
