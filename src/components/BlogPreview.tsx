import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Personal Training",
    excerpt: "Discover how artificial intelligence is transforming the fitness industry and making personalized training accessible to everyone.",
    image: "/blog/ai-training.jpg",
    category: "Technology",
    readTime: "5 min read",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "The Science Behind Effective Workout Plans",
    excerpt: "Learn about the latest research in exercise science and how it's being applied to create more effective workout programs.",
    image: "/blog/workout-science.jpg",
    category: "Fitness",
    readTime: "7 min read",
    date: "March 12, 2024",
  },
  {
    id: 3,
    title: "Nutrition Tips for Optimal Performance",
    excerpt: "Expert advice on fueling your workouts and maximizing your results through proper nutrition and supplementation.",
    image: "/blog/nutrition.jpg",
    category: "Nutrition",
    readTime: "6 min read",
    date: "March 10, 2024",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Latest from Our Blog
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay updated with the latest insights on fitness, technology, and personal training.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-950 shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="font-medium text-primary">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Want to read more articles and stay updated?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                const waitlistForm = document.querySelector("#waitlist-form");
                if (waitlistForm) {
                  waitlistForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 