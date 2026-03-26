export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              P.M. <span className="text-accent">Studio</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              נגרות בוטיק בהתאמה אישית
              <br />
              עיצוב וביצוע ברמה הגבוהה ביותר
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-accent">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  גלריה
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  אודות
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-accent">יצירת קשר</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>נחום חפצדי 17, ירושלים</li>
              <li>מגדל רם, קומה 11</li>
              <li>
                <a href="https://wa.me/972502654957" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  אילנית: 050-265-4957
                </a>
              </li>
              <li>
                <a href="https://wa.me/972526384355" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  פנחס: 052-638-4355
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} P.M. Studio Ltd. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
