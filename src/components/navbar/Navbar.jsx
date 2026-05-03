
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ href, children }) => {

const pathName= usePathname()


const activePage= href == pathName

  return (
  <Link
  href={href}
  className={`px-3 py-2 rounded-md transition duration-300 ${
    activePage
      ? "text-yellow-400 border-b-2 border-yellow-400"
      : "text-gray-300 hover:text-yellow-400"
  }`}
>
  {children}
</Link>
  );
};

export default Navbar;