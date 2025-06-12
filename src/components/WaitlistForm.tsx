import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7299128096:AAFiBZ0vJW933yGZ4XhOh6eyueQjxSrqG1I/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "-1002879295773", // Replace with your chat ID (e.g., -123456789)
            text: `New Subscriber:\nName: ${name}\nEmail: ${email}`,
          }),
        }
      );

      const data = await response.json();
      if (data.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
      } else {
        throw new Error(data.description || "Failed to send to Telegram");
      }
    } catch (err) {
      setError("Error submitting form. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Welcome to the Waitlist!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Check your email for your free AI workout plan and exclusive launch updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Join the Waitlist for Early Access!</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get a Free Sample AI Workout Plan and exclusive launch discount
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join Now"}
        </Button>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Be the first to try our AI trainer! No spam, cancel anytime.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          >
            Follow on X
          </a>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}