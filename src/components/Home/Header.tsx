"use client"
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Movies", href: "#" },
    { name: "Series", href: "#" },
    { name: "Contact Us", href: "#" },
  ];
  

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
  
    // Add scroll event listener to toggle header background
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header
    className={`fixed left-0 inset-x-0 top-0 z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-transparent"
    }`}
  >
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex">
       <Link href="/">
       <h2 className="text-red-600 text-3xl lg:text-4xl font-bold">
          MoviesFlix
        </h2>
       </Link>
      </div>

      <div className="flex lg:hidden">
        <button
          type="button"
          className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
      isScrolled ?  "text-gray-700" :"text-white shadow-lg"} `}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-semibold leading-6 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:justify-end">
        <a
          href="#"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className="text-red-600 text-3xl font-bold">MoviesFlix</h2>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  )
}

export default Header