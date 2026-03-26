"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שלום, שמי ${formData.name}. אני מתעניין/ת ב${formData.projectType}. ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/972526384355?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            צרו <span className="text-accent">קשר</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            נשמח לשמוע על הפרויקט שלכם ולתת הצעת מחיר
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                שם מלא
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                placeholder="ישראל ישראלי"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                טלפון
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                placeholder="050-000-0000"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                סוג הפרויקט
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white"
              >
                <option value="">בחרו סוג פרויקט</option>
                <option value="מטבח">מטבח</option>
                <option value="ריהוט משרדי">ריהוט משרדי</option>
                <option value="ארונות קיר">ארונות קיר</option>
                <option value="יחידת טלוויזיה">יחידת טלוויזיה</option>
                <option value="ריהוט ביתי אחר">ריהוט ביתי אחר</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                פרטים נוספים
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-light focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                placeholder="ספרו לנו על הפרויקט..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              שלחו הודעה בוואטסאפ
            </button>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-primary">פרטי התקשרות</h3>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="font-medium text-primary">כתובת</div>
                  <div className="text-sm text-gray-500">נחום חפצדי 17, ירושלים (מגדל רם, קומה 11)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-medium text-primary">טלפון</div>
                  <div className="text-sm text-gray-500">
                    <a href="tel:0502654957" className="hover:text-accent transition-colors">אילנית: 050-265-4957</a>
                    <br />
                    <a href="tel:0526384355" className="hover:text-accent transition-colors">פנחס: 052-638-4355</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-64">
              <iframe
                title="מיקום P.M. Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.5!2d35.2!3d31.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ2JzQ4LjAiTiAzNcKwMTInMDAuMCJF!5e0!3m2!1siw!2sil!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
