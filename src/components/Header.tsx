import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { data: session } = useSession();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSignIn = () => signIn();
  const handleSignOut = () => signOut();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gray-100">
      <nav className="p-2 items-center w-full flex justify-between">
        <div className="text-black h-12 w-full gap-0 sm:gap-3 flex items-center justify-between">
          <div className="flex align-center">
            <div className="flex space-x-2">
              <Link href="/">
                <Image
                  alt="image"
                  src="/img/mongoose.PNG"
                  width={60}
                  height={60}
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex space-x-2 ml-1.5 mt-1.5 text-black mb-1 font-bold italic text-3xl py-1 px-1 xs:px-3 sm:px-1">
              <a href="/">
                <h1>Mongeeese {t("header.map")}</h1>
              </a>
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex 3xl:flex-1 flex-row 3xl:justify-end">
            <div className="mx-2.5 gap-1 hidden lg:flex">
              <LanguageSelector />
            </div>
            <div className="mx-2.5 gap-1 hidden lg:flex">
              <a
                className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full"
                href="/"
              >
                {t("header.home")}
              </a>
            </div>
            <div className="mx-2.5 gap-1 hidden lg:flex">
              <a
                className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full"
                href="/map"
              >
                {t("header.map")}
              </a>
            </div>
            {session ? (
              <>
                <div className="mx-2.5 gap-1 hidden lg:flex">
                  <a
                    className="text-xl hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full"
                    href="/upload"
                  >
                    {t("header.upload")}
                  </a>
                </div>
                <div className="flex items-center mb-2 mx-2.5">
                  <div>
                    <h1 className="text-5xl cursor-default mb-1">|</h1>
                  </div>
                  <div className="flex items-center text-xl mt-2 py-1 px-1 xs:px-3 sm:px-3 cursor-default">
                    <h1>{t("header.welcome")} {session.user.name}</h1>
                  </div>
                  <div
                    className="flex cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <a
                      className="flex items-center text-xl mt-2 hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full mb-1"
                    >
                      <LogoutIcon className="h-6 w-6 mt-1" />
                      {t("header.logout")}
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center mb-2 mx-2.5">
                <div>
                  <h1 className="text-5xl cursor-default mb-1">|</h1>
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={handleSignIn}
                >
                  <a
                    className="flex items-center text-xl mt-2 hover:bg-gray-300 py-1 px-1 xs:px-3 sm:px-3 rounded-full"
                  >
                    <LoginIcon className="h-6 w-6 mt-1" />
                    {t("header.login")}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:hidden w-full">
          <div className="flex items-center justify-end">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded={menuVisible}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  Menu
                </button>
              </div>

              {menuVisible && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="/"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      {t("header.home")}
                    </a>
                    <a
                      href="/map"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      {t("header.map")}
                    </a>
                   
                    {session && (
                      <a
                        href="/upload"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        {t("header.upload")}
                      </a>
                    )}
                    <LanguageSelector />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
