import { Button } from "./ui/button";
import { Check } from "lucide-react";

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

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your fitness journey. All plans include access to our core AI-driven features.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm ${
                plan.popular
                  ? "ring-2 ring-primary dark:ring-primary/50"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{plan.period}
                  </span>
                </div>
                {plan.savings && (
                  <p className="mt-2 text-sm text-primary">{plan.savings}</p>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                size="lg"
              >
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
