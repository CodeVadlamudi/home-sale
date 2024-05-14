import { HomeIcon, PhoneIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  const header__links = [
    { id: 1, name: "Home", pathLink: "/" },
    { id: 2, name: "Listings", pathLink: "/listings" },
    { id: 3, name: "Members", pathLink: "/members" },
    { id: 4, name: "Blog", pathLink: "/blog" },
    { id: 5, name: "Pages", pathLink: "/pages" },
    { id: 6, name: "Contact", pathLink: "/contact" },
  ];
  return (
    <header className="bg-white shadow px-0 py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="inline-flex items-center space-x-1">
            <HomeIcon size={28} />
            <span className="text-xl font-medium">JustRent</span>
          </Link>

          <div className="flex items-center space-x-5 lg:hidden">
            <PhoneIcon size={24} color="black" />
            <UserIcon size={24} color="black" />
            <button className=" bg-violet-500 w-36 h-10 rounded text-white hover:bg-black duration-300">
              Add Property
            </button>
          </div>

          <nav className="space-x-5 hidden lg:block">
            {header__links.map((link) => (
              <Link
                key={link.id}
                href={link.pathLink}
                className="font-medium text-lg hover:text-violet-500 duration-100"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
