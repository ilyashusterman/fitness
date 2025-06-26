import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { WaitlistForm } from "./components/WaitlistForm";
import { StickyBar } from "./components/StickyBar";
import { BlogPreview } from "./components/BlogPreview";
import { BlogPost } from "./pages/BlogPost";
import { Loader } from "./components/Loader";
import "./App.css";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <main>
        <section className="animate-fade-in transition duration-700 ease-in-out">
          <Hero />
        </section>
        <section className="animate-slide-in-up transition duration-700 ease-in-out delay-100">
          <Features />
        </section>
        <section className="animate-fade-in transition duration-700 ease-in-out delay-200">
          <Benefits />
        </section>
        <section className="animate-slide-in-up transition duration-700 ease-in-out delay-300">
          <Testimonials />
        </section>
        <section className="animate-fade-in transition duration-700 ease-in-out delay-400">
          <BlogPreview />
        </section>
        <section className="animate-slide-in-up transition duration-700 ease-in-out delay-500">
          <Pricing />
        </section>
        <section className="animate-fade-in transition duration-700 ease-in-out delay-600">
          <FAQ />
        </section>
        <section id="waitlist-form" className="py-24 bg-gray-50 dark:bg-gray-900 animate-fade-in transition duration-700 ease-in-out delay-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Waitlist
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Be among the first to experience the future of personal training. Sign up now for early access and exclusive benefits.
                </p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </section>
      </main>
      <StickyBar />
    </>
  );
}

function App() {
  // Determine if we're running locally
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' || 
                     window.location.hostname.startsWith('192.168.');
  
  // Only use basename for production (GitHub Pages)
  const basename = isLocalhost ? '' : '/fitness';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
