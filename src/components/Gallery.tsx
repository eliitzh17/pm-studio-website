"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

type Category = "all" | "office" | "kitchen" | "residential";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "הכל" },
  { key: "office", label: "משרדים" },
  { key: "kitchen", label: "מטבחים" },
  { key: "residential", label: "ביתי" },
];

const images = [
  { src: "/images/office-reception-1.jpg", alt: "דלפק קבלה", category: "office" as Category },
  { src: "/images/office-reception-2.jpg", alt: "דלפק קבלה - זווית נוספת", category: "office" as Category },
  { src: "/images/office-meeting-1.jpg", alt: "חדר ישיבות", category: "office" as Category },
  { src: "/images/office-meeting-2.jpg", alt: "חדר ישיבות - ארון קיר", category: "office" as Category },
  { src: "/images/office-cabinet-1.jpg", alt: "ארון אחסון משרדי", category: "office" as Category },
  { src: "/images/office-cabinet-2.jpg", alt: "ארון אחסון - תקריב", category: "office" as Category },
  { src: "/images/kitchen-1.jpg", alt: "מטבח עם ארונות גבוהים", category: "kitchen" as Category },
  { src: "/images/kitchen-2.jpg", alt: "מטבח ירוק עם גב עץ", category: "kitchen" as Category },
  { src: "/images/closet-1.jpg", alt: "ארון בגדים מרצפה לתקרה", category: "residential" as Category },
  { src: "/images/wall-unit-1.jpg", alt: "יחידת קיר מוארת", category: "residential" as Category },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            העבודות שלנו
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            מבחר מפרויקטים שביצענו — כל פרויקט מותאם אישית ללקוח
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-accent text-white"
                  : "bg-white text-primary hover:bg-gray-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(assetPath(img.src))}
              >
                <Image
                  src={assetPath(img.src)}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-end">
                  <span className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 left-6 text-white text-3xl hover:text-accent transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="סגור"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="תמונה מוגדלת"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
