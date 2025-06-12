export interface Author {
  name: string;
  role: string;
  image: string;
  bio: string;
}

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
  author: Author;
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
    author: {
      name: "Dr. Sarah Johnson",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Dr. Sarah Johnson is a leading expert in AI and fitness technology with over 10 years of experience in the field."
    }
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
    author: {
      name: "Mike Thompson",
      role: "Head of Fitness Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Mike Thompson is a certified fitness trainer and exercise science researcher with a passion for optimizing workout effectiveness."
    }
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
    author: {
      name: "Lisa Chen",
      role: "Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Lisa Chen is a registered dietitian and sports nutrition expert who helps athletes and fitness enthusiasts optimize their performance through proper nutrition."
    }
  },
]; 