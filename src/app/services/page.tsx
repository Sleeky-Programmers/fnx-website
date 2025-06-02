
import { ServicesHero } from "@/features/services-page/services-hero";
import { ServicesTabs } from "@/features/services-page/services-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services | West53 Capital',
  description: 'Expect more from your Management Company',
};

export default function ServicesPage() {
  
  return (
    <main className="min-h-screen">
      <ServicesHero />
    
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
  <ServicesTabs />
</div>

    </main>
  );
}