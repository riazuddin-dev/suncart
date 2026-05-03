import ExtraSection from "@/components/extraSection/ExtraSection";
import Hero from "@/components/Hero/Hero";
import PopulerProducts from "@/components/populerProducts/PopulerProducts";


export default function Home() {
  return (
    <div className="">
      <h1>
       <Hero></Hero>
       <PopulerProducts></PopulerProducts>
       <ExtraSection></ExtraSection>
      </h1>
    </div>
  );
}
