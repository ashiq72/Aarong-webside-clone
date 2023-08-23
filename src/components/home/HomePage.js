import Hero from "./Hero/Hero";
import FullImage from "./ImageSection/FullImage";
import ImageSection from "./ImageSection/ImageSection";
import News from "./News/News";
import Stories from "./Stories/Stories";
import Trending from "./Trending/Trending";
import WhatsNew from "./WhatsNew/WhatsNew";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/womens");
  const products = await res.json();
  return (
    <div>
      <Hero />

      <Trending products={products} />
      <WhatsNew />
      <ImageSection />
      <News />
      <Stories />
    </div>
  );
}
