import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Kickstart your fitness journey with our AI-powered personal trainer at no cost.",
      features: [
        "Basic AI-generated fitness programs (up to 1 new plan/month)",
        "Limited 1v1 tracker check-in channel (3 check-ins/week)",
        "Basic AI nutrition templates (1 plan/month, no customization)",
        "Community support via forums",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$12",
      period: "month",
      description: "Unlock the full power of your AI trainer with unlimited access to premium features.",
      features: [
        "Unlimited AI-generated fitness programs with advanced customization",
        "Unlimited 1v1 tracker check-in channel with personalized feedback",
        "Fully customized AI nutrition plans (unlimited, tailored)",
        "Priority email support and exclusive app updates",
        "Cancel anytime",
      ],
      cta: "Go Pro",
      popular: true,
      savings: "Save 20% with yearly billing ($115/year)",
    },
    {
      name: "Lifetime",
      price: "$249",
      period: "one-time",
      description: "Pay once and train forever with lifetime access to all Professional features.",
      features: [
        "Everything in the Professional plan, forever",
        "One-time payment, no recurring fees",
        "Early access to new features and updates",
        "Priority email support",
      ],
      cta: "Buy Lifetime",
      popular: false,
    },
  ];

  const [ref, inView] = useInViewAnimation();

  return (
    <section ref={ref} id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 transition-all duration-700 motion-safe:animate-fade-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Choose the plan that fits your fitness journey. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col items-center space-y-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-700 motion-safe:animate-fade-in ${
                inView ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}` : "opacity-0 translate-y-8"
              } hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <p className="text-4xl font-extrabold text-primary">{plan.price}</p>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{plan.period}
                  </span>
                </div>
                {plan.savings && (
                  <p className="mt-2 text-sm text-primary">{plan.savings}</p>
                )}
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-center">{plan.description}</p>

              <ul className="text-gray-600 dark:text-gray-400 text-left space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
