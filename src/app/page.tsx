import { AboutUsSection } from "@/app/(home)/AboutUsSection";
import { FaqSection } from "@/app/(home)/FAQSection";
import { JoinUsSection } from "@/app/(home)/JoinUsSection";
import { OurProjectsSection } from "@/app/(home)/OurProjectsSection";
import { OurTeamSection } from "@/app/(home)/OurTeamSection";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-blue-900 snap-y text-white snap-mandatory">
      <AboutUsSection />

      <JoinUsSection />

      <OurProjectsSection />

      <OurTeamSection />

      <FaqSection />
    </main>
  );
}
