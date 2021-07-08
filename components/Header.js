import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from '../components/Avatar'
import HeaderOptions from "../components/HeaderOptions"

function Header() {
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
      <div className='flex w-full p-6 items-center'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <button onClick={search} className='hidden'></button>
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            className="h-6 text-blue-500 hidden sm:inline-flex"
            onClick={search}
          />
        </form>
        <Avatar 
        className="ml-auto"
        url='https://scontent.fymy1-1.fna.fbcdn.net/v/t1.18169-9/403947_452384701447944_472408423_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FuFyjjlFupUAX-d1wkA&_nc_ht=scontent.fymy1-1.fna&oh=50ece6cb266fadd8e3b925fb026cc7ff&oe=60EAA225' />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
