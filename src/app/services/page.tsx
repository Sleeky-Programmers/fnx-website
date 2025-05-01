
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/features/services-page/services-hero";
import { ServicesTabs } from "@/features/services-page/services-tabs";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesTabs />
     
    </main>
  );
}