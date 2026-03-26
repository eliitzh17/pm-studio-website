"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "משרדים ומסחרי",
    description:
      "דלפקי קבלה, חדרי ישיבות, ארונות אחסון ופתרונות ריהוט מותאמים לסביבת העבודה. עיצוב מקצועי שמשלב פונקציונליות עם אסתטיקה.",
    image: "/images/office-reception-2.jpg",
    alt: "דלפק קבלה מעוצב",
  },
  {
    title: "מטבחים",
    description:
      "מטבחים בהתאמה אישית עם חומרים איכותיים, שילוב עץ טבעי ומשטחי עבודה מודרניים. כולל תכנון מלא והתקנה מקצועית.",
    image: "/images/kitchen-2.jpg",
    alt: "מטבח מעוצב בהתאמה אישית",
  },
  {
    title: "ריהוט ביתי",
    description:
      "ארונות קיר, יחידות טלוויזיה מוארות, ארונות בגדים מרצפה לתקרה ופתרונות אחסון חכמים לכל חדר בבית.",
    image: "/images/wall-unit-1.jpg",
    alt: "יחידת קיר מוארת",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            השירותים שלנו
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            מתמחים בעיצוב וביצוע נגרות בוטיק לכל מרחב — מהבית ועד למשרד
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
