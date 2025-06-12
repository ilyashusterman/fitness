import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does the AI create personalized fitness and nutrition plans?",
    answer: "Our AI analyzes your goals, fitness level, dietary preferences, and schedule to create tailored fitness programs and nutrition plans just for you. It's like having a personal trainer and nutritionist in your pocket, adapting plans as you progress. Try the Free plan to see it in action!",
    value: "ai-plans",
  },
  {
    question: "What is the 1v1 tracker check-in channel?",
    answer: "The 1v1 tracker is an AI-powered feature that provides personalized feedback, tracks your progress, and sends motivational check-ins to keep you on track. It feels like a real coach, with unlimited support in the Professional and Lifetime plans.",
    value: "tracker",
  },
  {
    question: "Do I need a gym or special equipment?",
    answer: "No gym or equipment is required! Our AI designs workouts for any setting—home, park, or gym—based on what you have available. Start your fitness journey from anywhere with the Free plan.",
    value: "equipment",
  },
  {
    question: "What's the difference between the Free, Professional, and Lifetime plans?",
    answer: "The Free plan offers basic fitness and nutrition plans with limited check-ins. The Professional plan ($12/month or $115/year) unlocks unlimited, fully customized plans and priority support, while the Lifetime plan ($249 one-time) gives you all Professional features forever.",
    value: "plans",
  },
  {
    question: "Can I cancel my Professional plan anytime?",
    answer: "Yes, you can cancel your Professional plan anytime with no hassle. There's no long-term commitment, so you're free to explore and upgrade to the Lifetime plan for lifelong access.",
    value: "cancel",
  },
  {
    question: "What does the Lifetime plan include?",
    answer: "The Lifetime plan ($249 one-time) gives you permanent access to all Professional features, including unlimited AI fitness and nutrition plans, 1v1 check-ins, and priority support. Pay once and train forever!",
    value: "lifetime",
  },
  {
    question: "Is this app suitable for beginners?",
    answer: "Absolutely! The app is designed for all fitness levels, with AI-crafted plans that start where you are and guide you step-by-step. Beginners can try the Free plan to build confidence and get started.",
    value: "beginners",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take your privacy seriously and use industry-standard encryption to protect your data. Your personal information is safe with us, so you can focus on your fitness journey.",
    value: "security",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32 bg-white dark:bg-gray-950"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
