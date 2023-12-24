import Faq from "./Faq";
import Hero from "./Hero";
import OurServices from "./OurServices";
import SewaMobil from "./SewaMobil";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <SewaMobil />
      <Faq />
    </>
  );
}
