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
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
        🚀 Our Services
      </h2>
    </section>
  );
}
