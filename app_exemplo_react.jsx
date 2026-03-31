import { motion } from "framer-motion";
import { Bot, Brain, MessageCircle, BarChart3, Sparkles, CheckCircle2, ArrowRight, Building2, Rocket, ShieldCheck, Clock3, Star, Phone } from "lucide-react";

const whatsappLink = "https://wa.me/5599999999999";

const plans = [
  { name: "Start", price: "R$ 999", desc: "Ideal para pequenos negócios", items: ["1 agente IA", "Integração básica", "Suporte inicial"] },
  { name: "Growth", price: "R$ 1.999", desc: "Para empresas em expansão", items: ["2-3 agentes IA", "Automação comercial", "Suporte prioritário"] },
  { name: "Scale", price: "R$ 3.999", desc: "Para empresas estruturadas", items: ["Solução completa", "Integrações avançadas", "Acompanhamento estratégico"] },
];

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Transforme seu negócio com <span className="text-cyan-300">IA que vende por você</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Automatize atendimento, capture leads e aumente suas vendas com agentes inteligentes.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#lead" className="px-6 py-4 bg-white text-black rounded-2xl font-semibold">Quero vender mais</a>
          <a href={whatsappLink} target="_blank" className="px-6 py-4 border border-white/20 rounded-2xl flex items-center gap-2">
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="text-center py-16 border-y border-white/10">
        <p className="text-slate-400 mb-6">Empresas que estão evoluindo com IA</p>
        <div className="flex justify-center gap-6">
          <span>🏢 Empresa A</span>
          <span>🏢 Empresa B</span>
          <span>🏢 Empresa C</span>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {["Mais leads", "Atendimento automático", "Escala sem aumentar equipe"].map((b) => (
          <div key={b} className="p-6 border border-white/10 rounded-2xl">
            <CheckCircle2 className="text-cyan-300 mb-3" />
            <p>{b}</p>
          </div>
        ))}
      </section>

      {/* PLANOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Planos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-2xl my-4">{p.price}</p>
              <p className="text-slate-300 mb-4">{p.desc}</p>
              <ul className="text-sm space-y-2 mb-6">
                {p.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <a href="#lead" className="block text-center py-3 bg-white text-black rounded-xl">Começar</a>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-white/[0.03] text-center">
        <h2 className="text-3xl font-bold mb-10">Resultados reais</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {["Aumentei minhas vendas em 40%", "Agora respondo clientes 24h"].map((t) => (
            <div key={t} className="p-6 border border-white/10 rounded-2xl">
              <Star className="text-yellow-400 mb-3" />
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Dúvidas comuns</h2>
        <div className="space-y-4">
          <div className="p-5 border border-white/10 rounded-2xl">Funciona para qualquer negócio? Sim.</div>
          <div className="p-5 border border-white/10 rounded-2xl">Preciso de equipe técnica? Não.</div>
          <div className="p-5 border border-white/10 rounded-2xl">Quanto tempo para implantar? Rápido.</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="lead" className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">Pronto para escalar com IA?</h2>
        <p className="text-slate-300 mb-8">Fale com um especialista agora</p>
        <a href={whatsappLink} target="_blank" className="px-8 py-4 bg-white text-black rounded-2xl font-semibold">
          Falar no WhatsApp
        </a>
      </section>

    </main>
  );
}
