import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crewly – Crew-as-a-Service</title>
        <meta name="description" content="Build Your Crew. Scale Your Business. The first true Crew-as-a-Service platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/crewly_favicon.png" />
        <meta property="og:image" content="/crewly_converted.png" />
        <meta property="og:title" content="Crewly – Crew-as-a-Service" />
        <meta property="og:description" content="AI-powered teams, ready on command." />
      </Head>

      <section className="min-h-screen bg-white text-navy flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/crewly_converted.png" alt="Crewly Lockup" className="mx-auto max-w-xs mb-6" />
          <h1 className="text-5xl font-bold mb-4">Crewly</h1>
          <p className="text-xl font-medium mb-2">Build Your Crew. Scale Your Business.</p>
          <p className="text-md text-gray-600">The First True Crew-as-a-Service Platform</p>
          <div className="mt-8">
            <a href="#" className="inline-block px-6 py-3 bg-crewBlue text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
