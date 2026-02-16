
import React, { useEffect, useRef } from 'react';
import { BrandLogo, GIABadge, BrandMark } from './constants';
import {
  ShieldCheck,
  Activity,
  BrainCircuit,
  Zap,
  BarChart3,
  Database,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';

const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 py-5 px-6 md:px-12 flex justify-between items-center">
    <BrandLogo className="h-8 scale-[4] origin-left ml-8" />
    <nav className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
      <a href="#insight" className="hover:text-secondary transition-colors">Insight</a>
      <a href="#product" className="hover:text-secondary transition-colors">Product</a>
      <a href="#workflow" className="hover:text-secondary transition-colors">Workflow</a>
      <a href="#benefits" className="hover:text-secondary transition-colors">Benefits</a>
      <a href="#compliance" className="hover:text-secondary transition-colors">Compliance</a>
    </nav>
    <button className="hidden sm:block border-2 border-secondary px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300">
      Request Overview
    </button>
  </header>
);

const Hero: React.FC = () => (
  <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/herobgpng1.png"
        alt="Hero Background"
        className="w-full h-full object-cover opacity-100"
      />
    </div>
    <div className="absolute top-28 right-6 md:right-12 z-10 reveal">
      <GIABadge />
    </div>
    <div className="max-w-6xl mx-auto reveal relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-h0 mb-8 tracking-tight">
          Cognitive Risk <br />
          Intelligence for <br />
          <span className="relative inline-block pr-4">
            Insurance
            <div className="absolute bottom-3 left-0 w-full h-5 bg-primary -z-10 opacity-70"></div>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl font-light leading-relaxed">
          A psychometric layer for commercial auto — designed to complement telematics through predictive cognitive response mapping.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Prepared Exclusively for</span>
            <span className="text-xl font-bold text-secondary">CoverWhale & Strategic Partners</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">AmbitionProfile Leadership</span>
            <span className="text-xl font-bold text-secondary italic">Grant Shirk, CEO & Founder</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Insight: React.FC = () => (
  <section id="insight" className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div className="reveal">
        <h2 className="text-h1 mb-10">The Predictive Gap</h2>
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-gray-600">
            Telematics tracks <strong>behavioral outcomes</strong>—hard braking, swerving, and acceleration. These are trailing indicators of risk that have already manifested.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            AmbitionProfile measures <strong>cognitive drivers</strong>. We quantify how a driver processes stress and situational demands <em>before</em> they lead to high-risk maneuvers.
          </p>
          <div className="h-[2px] w-24 bg-primary my-10"></div>
          <p className="text-2xl font-bold text-secondary leading-tight">
            Predict risk propensity <br />before the first mile is driven.
          </p>
        </div>
      </div>

      <div className="reveal flex flex-col gap-6">
        <div className="bg-white p-10 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-gray-200"></div>
          <div className="flex items-start gap-6">
            <Activity className="text-gray-300 shrink-0 mt-1" size={28} />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Telematics</h4>
              <p className="text-lg font-bold mb-2">Reactive Data Loop</p>
              <p className="text-sm text-gray-500">Requires historical event accumulation to build a profile. Retrospective analysis.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 border-2 border-primary shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-primary"></div>
          <div className="flex items-start gap-6">
            <BrainCircuit className="text-secondary shrink-0 mt-1" size={28} />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">AmbitionProfile</h4>
              <p className="text-lg font-bold mb-2">Forward-Looking Signal</p>
              <p className="text-sm text-gray-500">Identifies vulnerability to stress-induced error at the cognitive layer. Proactive assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Product: React.FC = () => (
  <section id="product" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="reveal mb-24 max-w-3xl">
        <h2 className="text-h1 mb-6">Cognitive Risk Intelligence</h2>
        <p className="text-xl text-gray-500 font-light">
          A precision instrument for fleet safety and underwriting, delivered with enterprise-grade frictionless integration.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-gray-100 reveal">
        {[
          {
            title: "3-Minute Flow",
            desc: "Designed for 95%+ completion rates. A mobile-optimized digital experience with no administrative drag.",
            icon: <Zap size={24} />
          },
          {
            title: "Non-Clinical Tool",
            desc: "Focuses exclusively on performance patterns and cognitive resilience. Zero clinical diagnosis risk.",
            icon: <Layers size={24} />
          },
          {
            title: "Stress Mapping",
            desc: "Reveals how situational pressure degrades driver safety, enabling precise intervention strategies.",
            icon: <Cpu size={24} />
          }
        ].map((item, idx) => (
          <div key={idx} className={`p-12 group hover:bg-primary/5 transition-colors duration-500 ${idx !== 2 ? 'md:border-r border-b md:border-b-0 border-gray-100' : ''}`}>
            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 group-hover:bg-primary transition-colors mb-8 rounded-full">
              {React.cloneElement(item.icon as React.ReactElement, { className: "text-secondary" })}
            </div>
            <h3 className="text-h2 mb-4 lowercase tracking-tighter">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ColdStart: React.FC = () => (
  <section className="py-32 px-6 md:px-12 lg:px-24 bg-secondary text-white relative">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <div className="reveal">
        <h2 className="text-h1 mb-8 leading-tight">Cold Start <br />Intelligence</h2>
        <p className="text-lg opacity-80 mb-10 font-light leading-relaxed">
          Standard telematics suffers from a "cold start" problem—it cannot price risk until data exists. AmbitionProfile creates an immediate risk profile during policy onboarding.
        </p>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <TrendingUp size={16} className="text-secondary" />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Inception-Level Underwriting</p>
              <p className="text-sm opacity-60">Establish risk tiering before the driver's first operational mile.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Database size={16} className="text-secondary" />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">API-First Delivery</p>
              <p className="text-sm opacity-60">High-fidelity risk scores synced to your dashboard within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal bg-white/5 border border-white/10 p-1 rounded-3xl backdrop-blur-md">
        <div className="bg-white rounded-[1.4rem] p-10 text-secondary">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Implementation Timeline</h4>
          <div className="relative space-y-10">
            <div className="absolute left-[19px] top-2 w-[2px] h-[calc(100%-20px)] bg-gray-100"></div>

            <div className="relative flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10">
                <span className="text-[10px] font-bold">01</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase mb-1">Onboarding Trigger</p>
                <p className="text-xs text-gray-500">Post-bind assessment link sent to driver.</p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10">
                <span className="text-[10px] font-bold">02</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase mb-1">Assessment Complete</p>
                <p className="text-xs text-gray-500">3-minute cognitive performance session.</p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10">
                <span className="text-[10px] font-bold">03</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase mb-1">Intelligence Delivery</p>
                <p className="text-xs text-gray-500">Proprietary risk score delivered via API.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Workflow: React.FC = () => (
  <section id="workflow" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="reveal text-center mb-20">
        <h2 className="text-h1 mb-4">Enterprise Workflow</h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Seamless Integration into Existing Safety Tech Stacks</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 reveal">
        {[
          { step: "01", label: "ELD/Onboarding", desc: "Drivers receive the assessment link as a core part of their safety equipment setup." },
          { step: "02", label: "API Sync", desc: "Cognitive profiles are mapped and returned to the carrier's underwriting platform." },
          { step: "03", label: "Active Safety", desc: "Risk signals inform driver coaching and fleet safety prioritization." }
        ].map((item, idx) => (
          <div key={idx} className="relative pt-12 text-center group">
            <div className="text-6xl font-bold text-gray-50 absolute top-0 left-1/2 -translate-x-1/2 -z-10 group-hover:text-primary/20 transition-colors">
              {item.step}
            </div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter">{item.label}</h4>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits: React.FC = () => (
  <section id="benefits" className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-h1 mb-16 reveal">Business Benefits</h2>
      <div className="grid md:grid-cols-2 gap-8 reveal">
        {[
          { h: "Informed Term Decisions", d: "High-accuracy risk tiering at policy inception, reducing uncertainty." },
          { h: "Defensible Underwriting", d: "Quantifiable cognitive signals to support premium variance." },
          { h: "Cognitive Baseline Enhancement", d: "Deepen driver profiles beyond purely behavioral historical data." },
          { h: "Claim Tail-Risk Prediction", d: "Identify drivers prone to high-severity performance breakdown." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-12 border border-gray-100 flex gap-8 items-start hover:border-primary transition-all duration-300">
            <div className="shrink-0 w-1 bg-primary h-full"></div>
            <div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tighter leading-tight">{item.h}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Compliance: React.FC = () => (
  <section id="compliance" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
    <div className="max-w-5xl mx-auto reveal border-l-4 border-secondary pl-12">
      <div className="flex items-center gap-6 mb-12">
        <ShieldCheck className="text-secondary" size={48} />
        <h2 className="text-h1">Regulatory & <br />Compliance Position</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            AmbitionProfile is built for the highly regulated insurance environment. Our instruments are strictly performance-focused and non-diagnostic.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-secondary">
              <CheckCircle2 size={16} className="text-primary" />
              Non-Clinical Design
            </li>
            <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-secondary">
              <CheckCircle2 size={16} className="text-primary" />
              Outside HIPAA/ADA Scope
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-10 rounded-xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Standards & Fairness</p>
          <p className="text-sm leading-relaxed text-gray-500 italic">
            "All algorithms undergo rigorous bias testing to ensure fairness across demographic cohorts, maintaining compliance with emerging AI governance standards in insurance."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const BrandPersonality: React.FC = () => (
  <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
    <div className="max-w-4xl mx-auto text-center reveal">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-16">The Personality Layer</h3>
      <div className="grid grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        {['Charlie', 'Kim', 'Robin', 'Alex'].map((name, i) => (
          <div key={name} className="flex flex-col items-center gap-4">
            <BrandMark className="h-10 w-10" variant="personality" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-end">
      <div>
        <BrandLogo className="h-40 mb-8" />
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Cognitive Risk Intelligence</p>
      </div>
      <div className="md:text-right space-y-4">
        <div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">Founder & CEO</p>
          <p className="text-xl font-bold tracking-tighter">Grant Shirk</p>
          <p className="text-gray-500 font-light">connect@ambitionprofile.com</p>
        </div>
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-8">
          © {new Date().getFullYear()} AmbitionProfile. Global Insurance Accelerator Portfolio.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen text-secondary selection:bg-primary selection:text-secondary">
      <Header />
      <main>
        <Hero />
        <Insight />
        <Product />
        <ColdStart />
        <Workflow />
        <Benefits />
        <Compliance />
        <BrandPersonality />
      </main>
      <Footer />
    </div>
  );
}
