import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* 🌞 Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">
            SunCart
          </h2>
          <p className="text-sm text-gray-300">
            Your one-stop shop for summer essentials. Stay stylish and protected all season long.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link href="/profile" className="hover:text-yellow-400">My Profile</Link></li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@suncart.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1234-567890</p>
          <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
        </div>

        {/* 🌐 Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaLinkedin className="cursor-pointer hover:text-yellow-400" />
          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;