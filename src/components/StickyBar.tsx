import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show the bar after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Check if user has dismissed the bar before
    const hasDismissed = localStorage.getItem("stickyBarDismissed");
    if (hasDismissed) {
      setIsDismissed(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("stickyBarDismissed", "true");
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              Join the Waitlist for Early Access & a Free AI Workout Plan!
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm"
              >
                Follow on X
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm"
              >
                Follow on Instagram
              </a>
            </div>
            
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 whitespace-nowrap"
              onClick={() => {
                // Scroll to waitlist form
                const waitlistForm = document.querySelector("#waitlist-form");
                if (waitlistForm) {
                  waitlistForm.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Join Now
            </Button>
            
            <button
              onClick={handleDismiss}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 