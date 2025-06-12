import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { ScrollToTop } from "./components/ScrollToTop";
import { Pricing } from "./components/Pricing";
import { WaitlistForm } from "./components/WaitlistForm";
import { StickyBar } from "./components/StickyBar";
import { BlogPreview } from "./components/BlogPreview";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <BlogPreview />
        <Pricing />
        <FAQ />
        <section id="waitlist-form" className="py-24 bg-gray-50 dark:bg-gray-900">
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
