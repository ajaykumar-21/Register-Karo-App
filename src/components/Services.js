import { motion } from "framer-motion";
import { Building2, FileText, BadgeCheck } from "lucide-react";

const services = [
  {
    title: "Company Registration",
    icon: <Building2 size={40} className="text-yellow-400 mb-4" />,
  },
  {
    title: "GST Filing",
    icon: <FileText size={40} className="text-yellow-400 mb-4" />,
  },
  {
    title: "Trademark Registration",
    icon: <BadgeCheck size={40} className="text-yellow-400 mb-4" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          🚀 Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-8 text-center transition-all duration-300 hover:shadow-yellow-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert assistance for seamless registration and compliance
                  tailored to your business needs.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
