// File: components/Hero.js
export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-navy flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/crewly_converted.png" alt="Crewly Lockup" className="mx-auto max-w-xs mb-6" />
        <h1 className="text-5xl font-bold mb-4">Crewly</h1>
        <p className="text-xl font-medium mb-2">Build Your Crew. Scale Your Business.</p>
        <p className="text-md text-gray-600">The First True Crew-as-a-Service Platform</p>
        <div className="mt-8">
          <a href="#" className="inline-block px-6 py-3 bg-crewBlue text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition">Get Started</a>
        </div>
      </div>
    </section>
  );
}
