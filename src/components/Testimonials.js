import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Register Karo made the process so simple and hassle-free. Highly recommend their services!",
    author: "– A Satisfied Client",
  },
  {
    text: "Professional and prompt service. Got my company registered within days!",
    author: "– Ramesh S.",
  },
  {
    text: "Affordable and easy. The support team guided me at every step.",
    author: "– Priya D.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 tracking-tight">
          ❤️ What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 max-w-2xl mx-auto text-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Quote
                  className="absolute top-4 left-4 text-yellow-400 opacity-50"
                  size={40}
                />

                <p className="text-lg italic leading-relaxed mb-6">
                  “{testimonial.text}”
                </p>

                <div className="flex items-center justify-center gap-1 text-yellow-400 text-lg mb-2">
                  ★ ★ ★ ★ ★
                </div>

                <p className="font-bold text-blue-700">{testimonial.author}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
