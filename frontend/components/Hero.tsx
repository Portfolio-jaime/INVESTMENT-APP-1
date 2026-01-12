import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Invertir puede ser simple</h1>
        <p className="text-xl mb-8">trii te acompaña en tus primeros pasos en el mundo de las inversiones</p>
        <p className="mb-8">Descubre cómo empezar a invertir sin conocimientos previos.</p>
        <div className="space-x-4">
          <Link href="/register" className="bg-lavender text-white px-6 py-3 rounded hover:bg-opacity-80">Empieza a invertir</Link>
          <Link href="/learn" className="border border-black px-6 py-3 rounded hover:bg-gray-100">Aprende cómo funciona</Link>
        </div>
      </div>
    </section>
  );
}