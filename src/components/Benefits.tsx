import { CheckCircle } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Benefits = () => {
  const benefits = [
    {
      title: "Personalized Workouts",
      description: "Get custom workout plans tailored to your fitness level, goals, and preferences.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI-Powered Progress Tracking",
      description: "Track your progress with smart analytics and get insights to optimize your training.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "24/7 Virtual Coach",
      description: "Access your AI trainer anytime, anywhere for guidance and motivation.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Nutrition Guidance",
      description: "Receive personalized nutrition advice to complement your workout routine.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Community Support",
      description: "Connect with like-minded individuals and share your fitness journey.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Adaptive Learning",
      description: "Your AI trainer learns from your performance to continuously improve your experience.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
  ];

  const [ref, inView] = useInViewAnimation();

  return (
    <section ref={ref} id="benefits" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 transition-all duration-700 motion-safe:animate-fade-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose AI Trainer?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Experience the future of personal training with our AI-powered platform
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-700 motion-safe:animate-fade-in ${
                inView ? `opacity-100 translate-y-0 delay-${(index + 1) * 100}` : "opacity-0 translate-y-8"
              } hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl cursor-pointer`}
            >
              <div className="p-2 bg-primary/10 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 