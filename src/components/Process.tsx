"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "פגישת ייעוץ",
    description: "נפגשים להבין את הצרכים, סגנון העיצוב והתקציב. ביקור באתר למדידות ראשוניות.",
  },
  {
    number: "02",
    title: "תכנון ועיצוב",
    description: "מכינים תוכנית מפורטת עם הדמיות, בחירת חומרים וגוונים. מותאם בדיוק לדרישות.",
  },
  {
    number: "03",
    title: "ייצור",
    description: "ייצור בסדנה עם ציוד מתקדם וחומרים איכותיים. בקרת איכות קפדנית בכל שלב.",
  },
  {
    number: "04",
    title: "התקנה",
    description: "התקנה מקצועית באתר עם תשומת לב לכל פרט. ניקיון ומסירה מסודרת.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            תהליך <span className="text-accent">העבודה</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            ארבעה שלבים פשוטים מהרעיון ועד התוצאה המוגמרת
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-5xl font-bold text-accent/30 mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -left-4 w-8 h-px bg-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
