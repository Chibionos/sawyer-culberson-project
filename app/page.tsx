import Hero from "@components/Hero";
import Efforts from "@components/Efforts";
import Founder from "@components/Founder";
import ContactUs from "@components/ContactUs";
import Events from "@components/Events";
import Nav from "@components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Efforts />
      <Founder />
      <ContactUs />
      <Events />
    </div>
  );
}
