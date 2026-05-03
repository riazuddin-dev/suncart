
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ href, children }) => {

const pathName= usePathname()


const activePage= href == pathName

  return (
    <Link href={href} className={`${activePage && " bg-green-600"}`}>
      {children}
    </Link>
  );
};

export default Navbar;