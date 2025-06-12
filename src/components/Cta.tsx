import { Button } from "./ui/button";

export function Cta() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Sign up today for a free trial and let your AI trainer guide you to your goals. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Our Plans
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Join thousands of users who have already transformed their fitness journey
          </p>
        </div>
      </div>
    </section>
  );
}
