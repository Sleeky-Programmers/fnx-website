import { ValuesCards } from "@/features/values-page/values-card";
import { ValuesHero } from "@/features/values-page/values-hero";

export default function ValuesPage() {
  return (
    <main className="min-h-screen">
      <ValuesHero />
      <ValuesCards />
    </main>
  );
}