import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Working Mom",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      content: "As a busy mom of two, I never thought I'd find time for fitness. This AI trainer has been a game-changer! The personalized home workouts fit perfectly into my schedule, and the nutrition plans are so easy to follow. I've lost 15 pounds in 3 months!",
      highlight: "Lost 15 pounds in 3 months",
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      content: "I was skeptical about an AI trainer at first, but the personalized feedback and daily check-ins feel just like having a real coach. The app adapts to my progress and keeps me motivated. Best investment in my health ever!",
      highlight: "Consistent progress tracking",
    },
    {
      name: "Emma Rodriguez",
      role: "College Student",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      content: "Being a student on a budget, I couldn't afford a personal trainer. This app gives me professional-level guidance at a fraction of the cost. The nutrition plans are especially helpful for my busy schedule!",
      highlight: "Perfect for students",
    },
    {
      name: "David Thompson",
      role: "Fitness Beginner",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      content: "Starting my fitness journey was intimidating, but the AI trainer makes it so approachable. The workouts are perfectly scaled to my level, and I love how it explains each exercise. I've gained confidence and strength!",
      highlight: "Great for beginners",
    },
    {
      name: "Lisa Patel",
      role: "Yoga Instructor",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      content: "Even as a fitness professional, I find this AI trainer incredibly valuable. It helps me cross-train and maintain balance in my fitness routine. The nutrition guidance is spot-on, and I love the flexibility of the workout plans.",
      highlight: "Perfect for cross-training",
    },
    {
      name: "James Wilson",
      role: "Remote Worker",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      content: "Working from home made it hard to stay active. This AI trainer keeps me accountable with daily check-ins and adapts my workouts based on the equipment I have. I've never been more consistent with my fitness!",
      highlight: "Perfect for remote workers",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Trusted by People Like You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of users who have transformed their fitness journey with our AI-powered personal trainer
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                "{testimonial.content}"
              </blockquote>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-primary">
                  {testimonial.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">
              Join 10,000+ satisfied users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
