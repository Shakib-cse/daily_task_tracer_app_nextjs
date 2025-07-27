"use client";

export default function WhyUse() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Use Daily Task Tracker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-blue-600 mb-2">📅 Stay Organized</h3>
            <p className="text-gray-600 text-sm">
              Keep all your daily tasks in one place and never forget what needs to be done.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-blue-600 mb-2">⏱ Boost Productivity</h3>
            <p className="text-gray-600 text-sm">
              Focus on what matters and finish tasks more efficiently with a clean interface.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-blue-600 mb-2">🧠 Simple & Easy</h3>
            <p className="text-gray-600 text-sm">
              Lightweight and beginner-friendly. No login, no setup — just start typing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
