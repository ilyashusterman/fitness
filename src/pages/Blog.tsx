import { Button } from "../components/ui/button";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              const waitlistForm = document.querySelector("#waitlist-form");
              if (waitlistForm) {
                waitlistForm.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            AI Training Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, research, and updates on AI-powered personal training, fitness science, and nutrition.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover aspect-[4/3] transition-transform hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800" />
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                  >
                    Read Full Article
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, research updates, and exclusive content about AI-powered personal training.
          </p>
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
  );
} 