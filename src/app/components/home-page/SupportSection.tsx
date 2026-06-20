import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeaderStyleComponent } from "./HeroSection";

const SupportSection = () => {
  return (
    <section id="support" className="py-12 flex justify-center items-center px-4">
      <div className="space-y-2 relative z-10">
        <HeaderStyleComponent variant="dark" title="Ways to Support" />
        <p className="text-center text-text max-w-xl">
          Love what we create? Help us bring more books, animations, and
          inspiring content to children everywhere.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/support">Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
