export default function WhatWeDo() {
  const features = [
    { icon: '📈', title: 'Invertir sin saber de finanzas', desc: 'Guías simples y herramientas intuitivas.' },
    { icon: '🤖', title: 'Recomendaciones inteligentes', desc: 'Sugerencias basadas en tu perfil.' },
    { icon: '📊', title: 'Datos claros y visuales', desc: 'Gráficos fáciles de entender.' },
    { icon: '💰', title: 'Inversión desde montos bajos', desc: 'Empieza con poco dinero.' },
  ];
  return (
    <section className="bg-light-blue py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Qué hacemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}