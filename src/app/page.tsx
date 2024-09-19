import CollectionCaraousels from "./(home)/collections-carousel";
import Herosection from "./(home)/homepage";
import Navbar from "./(home)/navbar";
import Services from "./(home)/services";

export default function Home() {
  return (
    <section>
      <Herosection />

      <Services />
      <CollectionCaraousels />
    </section>
  );
}
