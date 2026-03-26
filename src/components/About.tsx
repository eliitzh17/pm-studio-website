"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={assetPath("/images/office-meeting-1.jpg")}
              alt="חדר ישיבות מעוצב - P.M. Studio"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              אודות <span className="text-accent">P.M. Studio</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              P.M. Studio הינה חברת נגרות בוטיק מירושלים המתמחה בעיצוב וביצוע
              ריהוט מותאם אישית. אנו מאמינים שכל מרחב ראוי לריהוט שמשלב בין
              פונקציונליות מושלמת לאסתטיקה נקייה ומודרנית.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              הצוות שלנו משלב ניסיון רב בנגרות עם ראייה עיצובית מתקדמת. אנו
              עובדים עם חומרים איכותיים ומשתמשים בטכנולוגיות מתקדמות כדי להבטיח
              תוצאה מושלמת בכל פרויקט — ממטבחים ביתיים ועד ריהוט משרדי מלא.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-xs text-gray-500 mt-1">פרויקטים</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-xs text-gray-500 mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-gray-500 mt-1">התאמה אישית</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
