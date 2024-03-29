import React, { useRef } from "react";
import logo from "../assets/google-logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../components/Avatar";
import pic from "../assets/pp.jpg";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          src={logo}
          alt="profile picture"
          loading="lazy"
          height={40}
          width={120}
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="mr-3 h-6 text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url={pic} />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
