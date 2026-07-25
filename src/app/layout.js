import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar/Navigation";
import ToastProvider from "@/components/ToastProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SunCart | Premium Sunglasses Store",
    template: "%s | SunCart",
  },
  description:
    "Shop premium sunglasses with a modern SunCart experience — browse products, sign in, and manage your profile.",
  openGraph: {
    title: "SunCart | Premium Sunglasses Store",
    description: "Modern e-commerce storefront for premium sunglasses.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={poppins.className}>
     <ToastProvider></ToastProvider>
        {children}
        </body>
    </html>
  );
}
