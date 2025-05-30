import { ValuesCards } from "@/features/values-page/values-card";
import { ValuesHero } from "@/features/values-page/values-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Values | West53 Capital',
  description: 'our values are simple but they are crucial and core to our undertakings. We believe in simplicity, integrity, efficiency, and respect.',
  keywords: 'values, simplicity, integrity, efficiency, respect, west53 capital',
};
export default function ValuesPage() {
  return (
    <main className="min-h-screen">
      <ValuesHero />
      <ValuesCards />
    </main>
  );
}