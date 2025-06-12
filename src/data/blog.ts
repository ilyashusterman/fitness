export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorBio: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-ai-is-revolutionizing-personal-training",
    title: "How AI is Revolutionizing Personal Training",
    excerpt: "Discover how artificial intelligence is transforming the fitness industry and making personalized training accessible to everyone.",
    content: `Artificial Intelligence is revolutionizing the way we approach personal training. By leveraging machine learning algorithms and vast amounts of fitness data, AI trainers can now provide personalized workout plans that adapt to individual needs, goals, and progress.

Key benefits of AI in personal training include:
• 24/7 availability and instant feedback
• Personalized workout adjustments based on performance
• Data-driven progress tracking
• Cost-effective alternative to traditional personal training
• Accessibility for users worldwide

The future of fitness is here, and it's powered by AI.`,
    image: "/blog/ai-training.jpg",
    category: "Technology",
    readTime: "5 min read",
    date: "March 15, 2024",
    author: "Dr. Sarah Chen",
    authorRole: "AI Research Lead",
    authorBio: "Dr. Sarah Chen is a leading expert in AI and fitness technology, with over 10 years of experience in developing AI solutions for the health and fitness industry. Her research focuses on making personalized training accessible to everyone through innovative technology.",
  },
  {
    id: 2,
    slug: "science-behind-effective-workout-plans",
    title: "The Science Behind Effective Workout Plans",
    excerpt: "Learn about the latest research in exercise science and how it's being applied to create more effective workout programs.",
    content: `Understanding the science behind workout plans is crucial for achieving optimal results. Recent research has shown that the most effective training programs combine several key elements:

• Progressive overload principles
• Proper rest and recovery periods
• Exercise variation and periodization
• Nutrition timing and supplementation
• Sleep quality and stress management

This article explores how these scientific principles are integrated into modern training programs.`,
    image: "/blog/workout-science.jpg",
    category: "Fitness",
    readTime: "7 min read",
    date: "March 12, 2024",
    author: "Mike Johnson",
    authorRole: "Head of Training Science",
    authorBio: "Mike Johnson is a certified strength and conditioning specialist with a background in exercise physiology. He has helped thousands of athletes and fitness enthusiasts achieve their goals through science-based training methods.",
  },
  {
    id: 3,
    slug: "nutrition-tips-for-optimal-performance",
    title: "Nutrition Tips for Optimal Performance",
    excerpt: "Expert advice on fueling your workouts and maximizing your results through proper nutrition and supplementation.",
    content: `Proper nutrition is the foundation of any successful fitness journey. This comprehensive guide covers essential nutrition principles for optimal performance:

• Pre-workout nutrition strategies
• Post-workout recovery nutrition
• Hydration guidelines
• Supplement recommendations
• Meal timing and portion control

Learn how to fuel your body for maximum performance and recovery.`,
    image: "/blog/nutrition.jpg",
    category: "Nutrition",
    readTime: "6 min read",
    date: "March 10, 2024",
    author: "Lisa Martinez",
    authorRole: "Sports Nutritionist",
    authorBio: "Lisa Martinez is a registered dietitian and sports nutritionist with expertise in performance nutrition. She has worked with professional athletes and fitness enthusiasts to optimize their nutrition for peak performance.",
  },
]; 