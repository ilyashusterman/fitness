import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInViewAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      setName("");
    }, 1200);
  };

  return (
    <div ref={ref} className={`max-w-xl mx-auto bg-white dark:bg-gray-950 rounded-2xl shadow-lg p-8 transition-all duration-700 motion-safe:animate-fade-in ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h3 className="text-2xl font-bold mb-4 text-center">Join the Waitlist</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        Be among the first to experience the future of personal training. Sign up now for early access and exclusive benefits.
      </p>
      {submitted ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
          <p className="text-lg font-semibold">Thank you for joining the waitlist!</p>
          <p className="text-gray-500 dark:text-gray-400">We'll keep you updated with the latest news and early access.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 transition-transform duration-200 hover:scale-105 focus:scale-105 active:scale-95 shadow-lg"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      )}
    </div>
  );
};