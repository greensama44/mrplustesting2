import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EveryDay from "@/components/EveryDay";
import Giveaways from "@/components/Giveaways";
import Winners from "@/components/Winners";
import Moments from "@/components/Moments";
import Savings from "@/components/Savings";
import Calculator from "@/components/Calculator";
import Membership from "@/components/Membership";
import Points from "@/components/Points";
import Tipping from "@/components/Tipping";
import Community from "@/components/Community";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating";
import ScrollFx from "@/components/ScrollFx";

// Section order (colour): Hero + Happening now (red) → Every day (off white)
// → Giveaways (yellow) → Winners (charcoal) → Moments + reviews (pink)
// → Savings (off white) → Calculator (charcoal) → Membership (red)
// → Points (off white) → Tipping (deep red) → Community (yellow)
// → Final CTA (red) → Footer (charcoal)
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EveryDay />
        <Giveaways />
        <Winners />
        <Moments />
        <Savings />
        <Calculator />
        <Membership />
        <Points />
        <Tipping />
        <Community />
        <FinalCta />
      </main>
      <Footer />
      <Floating />
      <ScrollFx />
    </>
  );
}
