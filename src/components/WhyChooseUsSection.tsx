import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, UserCheck } from 'lucide-react';
import Card from './Card';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Accuracy",
      description: "Fine tuned CNN for confident preliminary results with advanced machine learning algorithms."
    },
    {
      icon: Zap,
      title: "Ease of Use",
      description: "Simple upload and instant analysis. Get results in seconds with our intuitive interface."
    },
    {
      icon: Shield,
      title: "Early Detection & Peace of Mind",
      description: "Reduces anxiety and risk through early identification of potential skin concerns."
    },
    {
      icon: UserCheck,
      title: "Expert-Guided Recommendations",
      description: "Clear steps to consult dermatologists with personalized guidance and next steps."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center px-8 py-16"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Why Choose SkinCare?
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Our advanced AI technology provides accurate, fast, and reliable skin health analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} delay={index * 0.2} className="p-8">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-textPrimary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;