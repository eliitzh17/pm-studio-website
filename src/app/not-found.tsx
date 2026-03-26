export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-xl text-primary mb-6">העמוד לא נמצא</p>
        <a
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-dark transition-colors"
        >
          חזרה לדף הבית
        </a>
      </div>
    </div>
  );
}
