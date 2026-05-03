import ExtraSection from "@/components/extraSection/ExtraSection";
import Hero from "@/components/Hero/Hero";
import PopulerProducts from "@/components/populerProducts/PopulerProducts";
import getProductData from "@/lib/getProductData";


export default async function Home() {
const products = await getProductData()

  return (
    <div className="">
      <h1>
       <Hero></Hero>
       <PopulerProducts products={products}></PopulerProducts>
       <ExtraSection></ExtraSection>
      </h1>
    </div>
  );
}
