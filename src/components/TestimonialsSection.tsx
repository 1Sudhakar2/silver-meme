import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      message: "SkinCare helped me identify a concerning mole early. The AI analysis was spot-on and guided me to see a dermatologist promptly. Truly life-changing technology!",
      rating: 5
    },
    {
      name: "Michael Chen",
      message: "As someone with sensitive skin, this app has been incredible. The personalized recommendations and instant analysis have improved my skin health significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      message: "The convenience of getting professional skin analysis from home is amazing. The AI is surprisingly accurate and the interface is so user-friendly.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center px-8 py-16 bg-gradient-to-br from-primary/5 to-secondary/5"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
            Happy Customers
          </h2>
          <p className="text-xl text-textSecondary">
            See what our users are saying about their experience
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-primary',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8 h-full"
              >
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-textSecondary italic mb-6 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-textPrimary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-textSecondary text-sm">Verified User</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;