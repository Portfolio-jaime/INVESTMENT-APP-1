"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Investments() {
  const investments = [
    {
      name: 'Acciones',
      risk: 'medio',
      return: 8.5,
      data: [{ year: 1, value: 100 }, { year: 2, value: 108.5 }, { year: 3, value: 117.7 }],
      desc: 'Ideal si estás empezando',
    },
    {
      name: 'ETFs',
      risk: 'bajo',
      return: 6.0,
      data: [{ year: 1, value: 100 }, { year: 2, value: 106 }, { year: 3, value: 112.36 }],
      desc: 'Buena opción a largo plazo',
    },
    {
      name: 'Fondos',
      risk: 'bajo',
      return: 5.5,
      data: [{ year: 1, value: 100 }, { year: 2, value: 105.5 }, { year: 3, value: 111.3 }],
      desc: 'Inversión segura',
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Inversiones disponibles</h2>
        <div className="space-y-12">
          {investments.map((inv, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">{inv.name}</h3>
                <p className="mb-2">Riesgo: {inv.risk}</p>
                <p className="mb-2">Retorno estimado: {inv.return}%</p>
                <p>{inv.desc}</p>
              </div>
              <div className="md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inv.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#A9A0EC" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}