import { Brain, MessageSquare, Utensils } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function Features() {
  const features = [
    {
      title: "AI-Powered Fitness Program Builder",
      description: "Tailored workout plans created by AI based on your goals, fitness level, and equipment. From home workouts to gym routines, we've got you covered.",
      icon: Brain,
      benefit: "Personalized, flexible, and beginner-friendly",
    },
    {
      title: "1v1 Tracker Check-in Channel",
      description: "Stay motivated with AI-driven progress tracking, personalized feedback, and daily check-ins that feel like a real coach.",
      icon: MessageSquare,
      benefit: "Accountability and encouragement, anytime",
    },
    {
      title: "AI Nutrition Plan Builder",
      description: "Custom meal plans designed by AI to match your dietary preferences, goals, and schedule. Healthy eating made simple.",
      icon: Utensils,
      benefit: "Easy, sustainable nutrition guidance",
    },
  ];

  const [ref, inView] = useInViewAnimation();

  return (
    <section ref={ref} id="features" className="py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 motion-safe:animate-fade-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Everything You Need to Transform Your Fitness
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our AI-powered platform combines cutting-edge technology with personalized guidance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-50 dark:bg-gray-900 rounded-xl transition-all duration-700 motion-safe:animate-fade-in ${
                inView ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}` : "opacity-0 translate-y-8"
              } hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer`}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-primary/10 rounded-lg">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              <p className="text-sm font-medium text-primary">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
