import Agent from "@/components/Agent";
import Cites from "@/components/Cites";
import Client from "@/components/Client";
import Customers from "@/components/Customers";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Property from "@/components/Property";
import Team from "@/components/Team";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Property />
      <Cites />
      <Work />
      <Discover />
      <Client />
      <Customers />
      <Team />
      <Agent />
      <Footer />
    </main>
  );
}
