import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import { blogPosts } from "../data/blog";

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="container px-4 md:px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
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
          
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800" />
            <div className="text-left">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.role}</p>
            </div>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg mb-8"
          />
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-white dark:bg-gray-950 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Training?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our waitlist to be among the first to experience AI-powered personal training.
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
              Join the Waitlist
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
} 