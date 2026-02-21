import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { DashboardShowcase } from "@/components/sections/dashboard-showcase";
import { Features } from "@/components/sections/features";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <Features />
      <Integrations />
      <Pricing />
      <Footer />
    </main>
  );
}
