import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your AI Personal Trainer, Always by Your Side
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Get personalized fitness programs, nutrition plans, and 1v1 tracking powered by AI—designed for your goals and lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              {/* Placeholder for app mockup - replace with actual image */}
              <div className="relative w-full h-[500px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  App Mockup Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
