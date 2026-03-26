"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d3273bcb-5dd1-445b-918c-5c729aa1c9ce",
          subject: `פנייה חדשה מהאתר - ${formData.projectType || "כללי"}`,
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
              disabled={status === "sending"}
              className="w-full bg-accent text-white py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "שולח..." : "שלחו פנייה"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-600 font-medium">
                הפנייה נשלחה בהצלחה! נחזור אליכם בהקדם.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500 font-medium">
                שגיאה בשליחה. נסו שוב או צרו קשר בוואטסאפ.
              </p>
            )}
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

              <PhoneEntry name="אילנית" phone="050-265-4957" whatsapp="972502654957" />
              <PhoneEntry name="פנחס" phone="052-638-4355" whatsapp="972526384355" />
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

function PhoneEntry({
  name,
  phone,
  whatsapp,
}: {
  name: string;
  phone: string;
  whatsapp: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phone.replace(/-/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <div className="flex-1">
        <div className="font-medium text-primary">{name}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500" dir="ltr">{phone}</span>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-[#128C7E] transition-colors"
            aria-label={`WhatsApp ${name}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="העתק מספר"
          >
            {copied ? (
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
