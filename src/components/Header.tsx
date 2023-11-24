import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gray-100">
      <nav className="p-2 items-center w-full flex flex-col md:flex-row justify-between">
        <div className="text-black w-full md:w-auto sm:h-25 gap-0 sm:gap-3 flex items-center justify-between">
          <div className="flex align-center mb-2 md:mb-0 sm:mb-20">
            <div className="flex space-x-2">
              <Link href="/">
                <Image
                  alt="image"
                  src="/img/mongoose.PNG"
                  width={80}
                  height={60}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex space-x-2 ml-1.5 mt-1.5 text-black mb-1 font-bold italic text-3xl py-1 px-1 xs:px-3 sm:px-1">
              <a href="/"><h1>Mongeese</h1></a>
            </div>
            <div className="flex text-black space-x-2 cursor-default mt-3 mb-1 font-semibold italic text-xl py-1 sm:px-1">
              <h1>Map</h1>
            </div>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-1 flex flex-col md:flex-row md:3xl:flex-1 md:items-center">
            <div className="mx-2.5 gap-1">
              <div className="flex">
                <a className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full" href="/">Home</a>
              </div>
            </div>
            <div className="mx-2.5 gap-1">
              <div className="flex">
                <a className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full" href="/map">Map</a>
              </div>
            </div>
            <div className="mx-2.5 gap-1">
              <div className="flex">
                <a className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full" href="/upload">Upload</a>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-xl cursor-pointer">&#9776;</button>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-center text-xl">
          {session ? (
            <>
              <div className="flex items-center text-xl cursor-default mb-1">
                <h1>Welcome {session.user!.name}</h1>
              </div>
              <div className="flex cursor-pointer" onClick={() => signOut()}>
                <a className="flex items-center text-xl mt-2 hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1">
                  <LogoutIcon className="h-6 w-6 mt-1" /> Log Out
                </a>
              </div>
            </>
          ) : (
            <div className="flex cursor-pointer" onClick={() => signIn()}>
              <a className="flex items-center text-xl mt-2 hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1">
                <LoginIcon className="h-6 w-6 mt-1" /> Log In
              </a>
            </div>
          )}
        </div>
        {menuVisible && (
          <div className="sm:hidden flex flex-col items-center text-xl">
            <a className="hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1" href="/">Home</a>
            <a className="hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1" href="/map">Map</a>
            <a className="hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1" href="/upload">Upload</a>
            {session ? (
              <>
                <div className="flex items-center text-xl cursor-default mb-1">
                  <h1>Welcome {session.user!.name}</h1>
                </div>
                <div className="flex cursor-pointer" onClick={() => signOut()}>
                  <a className="flex items-center text-xl mt-2 hover-bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1">
                    <LogoutIcon className="h-6 w-6 mt-1" /> Log Out
                  </a>
                </div>
              </>
            ) : (
              <div className="flex cursor-pointer" onClick={() => signIn()}>
                <a className="flex items-center text-xl mt-2 hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1">
                  <LoginIcon className="h-6 w-6 mt-1" /> Log In
                </a>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
