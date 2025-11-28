import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import StickyCtaBar from "@/components/StickyCtaBar";

export const metadata = {
  title: "Cannabis Security Systems | CalLord Unified Technologies",
  description:
    "Cannabis security designs that pass inspection the first time in NM, CO, and AZ. Book a free compliance assessment.",
  alternates: {
    canonical: "https://security.callordut.com/",
  },
  openGraph: {
    title: "Cannabis Security Systems | CalLord Unified Technologies",
    description:
      "Compliant camera, access control, and monitoring plans for cannabis facilities across the Southwest.",
    url: "https://security.callordut.com/",
    images: [{ url: "/images/cannabis-security-og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

const trustItems = [
  "Video surveillance design & install",
  "Access control & intrusion",
  "Remote monitoring ready",
  "Locally owned in the Southwest",
  "Specialized in cannabis facilities",
];

const faqItems = [
  {
    q: "Do you only work with cannabis businesses?",
    a: "Yes. Our designs and documentation are built for licensed cannabis operators and their regulators.",
  },
  {
    q: "Can you help if I already failed an inspection?",
    a: "Absolutely. We review inspector notes, correct gaps, and prepare you for a re-inspection with documentation.",
  },
  {
    q: "Do you install the equipment or just design it?",
    a: "We design and can coordinate installation through trusted partners or your preferred contractors.",
  },
  {
    q: "Which states do you currently support?",
    a: "New Mexico, Colorado, Arizona, and multi-state operators with comparable requirements.",
  },
  {
    q: "Can you work with my existing camera or access control system?",
    a: "Yes. We assess what you have, reuse where possible, and outline compliant upgrades when needed.",
  },
  {
    q: "How quickly can you get started if my inspection is soon?",
    a: "We can schedule the assessment quickly and prioritize urgent inspections or failed visits.",
  },
  {
    q: "Can you coordinate with my attorney or compliance consultant?",
    a: "Yes. We’ll collaborate with your compliance team to align technical controls with legal requirements.",
  },
];

const testimonials = [
  {
    title: "Client feedback coming soon",
    body: "We’re in the process of adding anonymized quotes and case summaries from cannabis operators we’ve helped pass inspection. Until then, ask us on your call how our systems have performed under real inspections.",
  },
  // TODO: Replace with real client testimonials once available (no fabricated quotes).
];

const steps = [
  {
    title: "Share your facility details",
    body: "We’ll review your floor plan, license type, and any regulator notes or past inspection reports.",
  },
  {
    title: "We map requirements to your layout",
    body: "Our team designs or reviews camera, access, and alarm coverage against your state’s rules.",
  },
  {
    title: "You get a clear plan and quote",
    body: "We provide an implementation roadmap, estimated costs, and next steps for passing inspection.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="bg-brand-beige backdrop-blur border-b border-brand-sage/30 sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="https://callordut.com" className="flex items-center gap-4" aria-label="CalLord Unified Technologies home">
            <Image src="/logo.png" alt="CalLord Unified Technologies" width={320} height={96} className="h-20 w-auto" priority />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18666572383"
              aria-label="Call CalLord Unified Technologies at 866 657 2383"
              className="rounded-lg border border-brand-teal/30 px-3 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/50"
            >
              Call (866) 657-2383
            </a>
            <a
              href="#consultation-form"
              className="rounded-lg bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/60"
            >
              Request a Free Compliance Assessment
            </a>
          </div>
        </div>
      </header>

      {/* Hero + Form */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              Cannabis security for NM • CO • AZ
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Cannabis Security Systems that Pass Inspection the First Time
              </h1>
              <p className="text-lg text-white/85">
                We design and manage compliant security systems for licensed cannabis facilities in New Mexico, Colorado,
                and Arizona—so you can protect your license and stay focused on operations.
              </p>
              <ul className="space-y-2 text-white/85">
                {[
                  "Built to meet state cannabis security regulations",
                  "Camera, access control, and monitoring that inspectors understand",
                  "Full documentation so you’re ready for your next inspection",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation-form"
                id="hero-primary-cta"
                data-cta="hero-primary-compliance-assessment"
                className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-5 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/70"
              >
                Request a Free Compliance Assessment
              </a>
              <a
                href="#checklist-section"
                id="hero-secondary-checklist"
                data-cta="hero-secondary-checklist"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Get the Cannabis Security Checklist
              </a>
            </div>
            <div className="text-sm text-white/70">
              Prefer to call?{" "}
              <a href="tel:+18666572383" className="font-semibold text-white underline">
                (866) 657-2383
              </a>
            </div>
          </div>

          <div
            id="consultation-form"
            data-section="primary-lead-form"
            className="rounded-2xl bg-brand-beige text-slate-900 shadow-2xl shadow-black/20 ring-1 ring-brand-sage/30"
          >
            <div className="p-5 md:p-6 lg:p-7">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">Free consultation</p>
                <h2 className="text-xl font-bold text-navy-900">Book your compliance assessment</h2>
                <p className="text-sm text-slate-600">
                  We’ll review your facility and state requirements, then send a clear plan.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-t border-b border-brand-sage/30">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 text-center mb-3">
            Trusted by regulated operators &amp; industry vendors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700">
            {trustItems.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for / What you get */}
      <section className="bg-brand-beige">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-navy-900">Built for Licensed Cannabis Operators, Not Generic Retail</h2>
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Who this is for</h3>
                <ul className="space-y-2 text-slate-800">
                  <li>• Dispensaries preparing for first inspection.</li>
                  <li>• Cultivation and processing sites that outgrew DIY systems.</li>
                  <li>• Multi-site operators standardizing across locations.</li>
                  <li>• Operators burned by generic AV vendors.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md space-y-3">
              <h3 className="text-lg font-semibold text-navy-900">What you get working with CalLord</h3>
              <ul className="space-y-2 text-slate-800">
                <li>• Security designs mapped to your state’s cannabis requirements.</li>
                <li>• Camera, access control, and alarm layouts inspectors can verify.</li>
                <li>• Documentation you can hand to your regulator.</li>
                <li>• Coordination with your preferred IT/monitoring providers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's at stake */}
      <section className="bg-navy-600 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-14 space-y-6">
          <h2 className="text-3xl font-bold">What’s at Stake if Your Security Fails Inspection</h2>
          <p className="text-white/85">
            Failed inspections can pause operations, trigger fines, and force rushed upgrades under tight deadlines. A clear,
            compliant plan keeps you moving.
          </p>
          <ul className="space-y-2 text-white/85">
            <li>• Revenue loss during shutdowns</li>
            <li>• Scrambling to fix issues under inspector pressure</li>
            <li>• Higher costs when work is rushed</li>
          </ul>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">A clear security plan now is cheaper than a failed inspection later.</h3>
            <a
              href="#consultation-form"
              data-cta="midpage-talk-to-designer"
              className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-5 py-3 text-white font-semibold shadow-lg shadow-black/15 hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/70"
            >
              Talk to a Cannabis Security Designer
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-navy-900">
              How the Free Cannabis Security Compliance Assessment Works
            </h2>
            <p className="text-slate-700">
              A simple process to make sure your next inspection is straightforward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-white font-semibold">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
                </div>
                <p className="text-slate-700">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#consultation-form"
              data-cta="process-section-start-assessment"
              className="inline-flex items-center justify-center rounded-lg bg-brand-teal px-6 py-3 text-white font-semibold shadow-lg shadow-black/10 hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/70"
            >
              Start My Compliance Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-brand-beige">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900">What Our Cannabis Clients Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.title} className="rounded-2xl bg-white p-6 shadow-md border border-slate-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{testimonial.title}</h3>
                <p className="text-slate-700">{testimonial.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist lead magnet */}
      <section id="checklist-section" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-4">
          <h2 className="text-3xl font-bold text-navy-900">Get the Cannabis Security Inspection Checklist</h2>
          <p className="text-slate-700">
            We’ve created a concise checklist that maps common security requirements for cannabis facilities into a simple,
            pre-inspection walk-through. It helps you spot obvious gaps before regulators do.
          </p>
          <ul className="space-y-2 text-slate-800">
            <li>• Camera coverage and retention basics</li>
            <li>• Entry/exit and secure area access control</li>
            <li>• Monitoring, storage, and documentation essentials</li>
          </ul>
          <p className="text-slate-700">
            Check the box in the form above and we’ll email you the checklist when you request your assessment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <h2 className="text-3xl font-bold">Cannabis Security: Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="text-white/85 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-brand-sage/30">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-700 text-center space-y-1">
          <div>Licensed &amp; Insured • New Mexico • Colorado • Arizona</div>
          <div>
            © {new Date().getFullYear()} CalLord Unified Technologies • Albuquerque, NM •{" "}
            <a href="tel:+18666572383" className="text-brand-teal font-semibold">
              (866) 657-2383
            </a>
          </div>
        </div>
      </footer>

      <StickyCtaBar />
    </main>
  );
}
