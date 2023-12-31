"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Input } from "../ui/input";

interface Props {
  routeType: string;
  search: string;
  handleSearch: (text: string) => void;
}

function Searchbar({ routeType, search, handleSearch }: Props) {
  const router = useRouter();

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="searchbar">
      <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <Input
        id="text"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={"Search creators"}
        className="no-focus searchbar_input"
      />
    </div>
  );
}

export default Searchbar;
