import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn("flex items-center justify-center flex-col", headingFont)}
      >
        <div className="flex items-center mb-4 border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskfy helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-amber-600 to-violet-700 text-white px-4 rounded-md pb-4 w-fit">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-600 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. from
        high rises to home office, the way your team works is unique -
        accomplish ir all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Task for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
