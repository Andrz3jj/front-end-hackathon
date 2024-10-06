import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question,  answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-slate-300 bg-slate-700/25">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "How can I contact you?",
      answer: "You can contact us via contact form, email or phone."
    },
    {
      question: "What are these exoplanets all about?",
      answer: "Exoplanets are planets that are outside the solar system and orbit other stars."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we offer full technical support to our Users 24/7."
    },
    {
      question: "Why Should I Use ExoSearch?",
      answer: "Because we are the only educational platform that teaches about exoplanets and with experience points you can earn rewards in the form of ranks and privileges on the site that in the future will translate into bonuses at high universities supported by Nasa!"

    }
    
  ];

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-slate-400 mb-8">Find answers to frequently asked questions</p>
        
        <div className="space-y-1 rounded-lg bg-slate-900/50 overflow-hidden">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;