import { Button } from "./ui/button";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function Hero() {
  const [ref, inView] = useInViewAnimation();

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 motion-safe:animate-fade-in ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Your AI Personal Trainer, Always by Your Side
              </h1>
              <p
                className={`text-xl text-gray-600 dark:text-gray-400 mb-8 transition-all duration-700 delay-100 motion-safe:animate-fade-in ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Get personalized fitness programs, nutrition plans, and 1v1 tracking powered by AI—designed for your goals and lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg"
                >
                  Start Your Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className={`relative transition-all duration-700 delay-200 motion-safe:animate-fade-in ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img
                src={`${import.meta.env.BASE_URL}ai-trainer-mockup.jpg`}
                alt="AI Trainer app chat mockup on mobile"
                className="w-full max-w-full sm:max-w-lg lg:max-w-xl mx-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
                style={{ background: '#222' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
