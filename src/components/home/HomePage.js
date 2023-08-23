import Hero from "./Hero/Hero";
import ImageSection from "./ImageSection/ImageSection";
import News from "./News/News";
import Stories from "./Stories/Stories";
import Trending from "./Trending/Trending";
import WhatsNew from "./WhatsNew/WhatsNew";

export default async function HomePage() {
  const res = await fetch(
    "https://the-kawaii-factory-server.vercel.app/womens"
  );
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
