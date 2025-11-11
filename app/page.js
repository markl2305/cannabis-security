// app/page.js
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

/* ---------- Inline Icons (no external deps) ---------- */
const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);
const CalendarDays = (p) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <rect x="7" y="14" width="3" height="3" />
    <rect x="14" y="14" width="3" height="3" />
  </Icon>
);
const Fingerprint = (p) => (
  <Icon {...p}>
    <path d="M12 11a4 4 0 0 1 4 4v2" />
    <path d="M12 7a8 8 0 0 1 8 8v2" />
    <path d="M12 15a8 8 0 0 1-8 8" />
    <path d="M12 3a12 12 0 0 1 12 12v2" />
    <path d="M2 21a12 12 0 0 0 12-12" />
  </Icon>
);
const AlertTriangle = (p) => (
  <Icon {...p}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Icon>
);
const Phone = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.54a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
  </Icon>
);
const FileText = (p) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </Icon>
);
const Settings = (p) => (
  <Icon {...p}>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.2 17l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 4.2l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 9.43 3H9.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 19.8 6.04l-.06.06a1.65 1.65 0 0 0-.33 1.82v0A1.65 1.65 0 0 0 21 9.43V9.5a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);
const Star = (p) => (
  <Icon {...p}>
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
  </Icon>
);
const ChevronRight = (p) => (
  <Icon {...p}>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

/* ---------- Metadata ---------- */
export const metadata = {
  title: "Cannabis Facility Security Compliance | CalLord Unified Technologies",
  description:
    "State-compliant security design for Colorado, New Mexico, and Arizona cannabis facilities. Pass inspection the first time. Free 30-minute compliance assessment.",
  openGraph: {
    title: "Cannabis Facility Security Compliance | CalLord Unified Technologies",
    description:
      "State-compliant security design for CO, NM, and AZ. Pass inspection the first time with CalLord UT.",
    images: [{ url: "/images/cannabis-security-og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* Header */}
      <header className="w-full bg-brand-beige/95 border-b border-brand-sage/40">
        <div className="container-custom px-6 md:px-8 flex items-center justify-between py-3">
          <Link href="https://callordut.com" className="flex items-center gap-3" aria-label="CalLord Unified Technologies home">
            <Image
              src="/logo.png"
              alt="CalLord Unified Technologies"
              width={360}
              height={120}
              priority
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15052261457"
              aria-label="Call CalLord Unified Technologies at 505 226 1457"
              className="rounded-xl border border-brand-teal/30 px-3 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/10"
            >
              Call (505) 226-1457
            </a>
            <Link
              href="#assessment"
              className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-brand-teal hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/50"
            >
              Get Free Compliance Assessment
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-teal to-brand-teal/85 text-white">
        <div className="container-custom px-4 md:px-6 py-10 md:py-16">
          {/* Trust bar */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Trusted by <strong>14</strong> licensed facilities</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>Average approval: <strong>18 days</strong></span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span><strong>Zero</strong> failed inspections</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-tight mb-4">
              Pass Your Cannabis Facility Inspection — First Time, On Schedule
            </h1>
            <p className="text-base md:text-xl text-white/90">
              State-compliant security design for Colorado, New Mexico, and Arizona cultivation and dispensary operators.
              We engineer compliant systems so you pass inspection — without delays, rework, or surprise costs.
            </p>
          </div>

          {/* Urgency banner */}
          <div className="mt-6 flex justify-center">
            <div className="rounded-full bg-red-600/95 px-4 py-2 text-sm font-semibold">
              ⏰ License deadline approaching? Book your assessment today
            </div>
          </div>

          {/* Form row */}
          <div id="assessment" className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            {/* Left column */}
            <div className="order-2 md:order-1 text-white/95">
              <ul className="space-y-3 text-base md:text-lg leading-7">
                {[
                  "State-specific compliance roadmap (CO Title 16, NM regulations, AZ requirements)",
                  "Partner-backed execution through Eagle Eye & Brivo certified teams",
                  "Fixed-price quotes within 48 hours of assessment call",
                  "No payment until you approve scope and timeline",
                ].map((t) => (
                  <li key={t} className="flex gap-3 pl-1">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Photo */}
              <div className="mt-8">
                <figure className="rounded-xl overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/10">
                  <div className="relative">
                    <Image
                      src="/images/cannabis-security-hero.jpg"
                      alt="Cannabis facility with compliant security cameras and access control"
                      width={1600}
                      height={900}
                      className="w-full h-56 md:h-72 object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/30 to-transparent" aria-hidden="true" />
                  </div>
                </figure>
              </div>

              {/* Partner logos */}
              <div className="mt-6">
                <p className="text-xs md:text-sm text-white/80 mb-2">Implementation partners</p>
                <div className="flex items-center gap-6 opacity-95">
                  <Image
                    src="/images/logos/eagle-eye-networks.svg"
                    alt="Eagle Eye Networks Partner"
                    width={140}
                    height={36}
                    className="h-7 w-auto"
                  />
                  <Image
                    src="/images/logos/brivo.svg"
                    alt="Brivo Partner"
                    width={110}
                    height={32}
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div className="order-1 md:order-2">
              <div className="rounded-xl bg-white shadow-lg shadow-black/10 ring-1 ring-brand-sage/20 p-4 md:p-5">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Most Cannabis Security Installations Fail Inspection
            </h2>
            <p className="text-gray-700 mt-2">
              State regulators are strict. These three mistakes account for 80% of compliance failures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CardProblem
              icon={<CalendarDays className="w-7 h-7" />}
              title="Wrong Retention Periods"
              desc="Colorado requires 90 days. Pennsylvania requires 4 years. One size does not fit all—and inspectors know it."
            />
            <CardProblem
              icon={<Fingerprint className="w-7 h-7" />}
              title="Incomplete Biometric Integration"
              desc="Your cameras work, but they're not tied to your Metrc system. That's an automatic compliance failure in most states."
            />
            <CardProblem
              icon={<AlertTriangle className="w-7 h-7" />}
              title="No Redundancy Plan"
              desc="A single DVR failure = lost footage = lost license. State regulators don't accept 'equipment malfunction' as an excuse."
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#assessment"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-brand-teal hover:bg-amber-300"
            >
              Let’s Make Sure You’re Covered <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Three Steps to Compliance Approval</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StepCard
              step="1"
              icon={<Phone />}
              title="Free Assessment Call"
              time="30 minutes"
              desc="We review your floor plans, current equipment, and state requirements. You get a compliance gap analysis on the call."
            />
            <StepCard
              step="2"
              icon={<FileText />}
              title="Fixed-Price Quote"
              time="48 hours"
              desc="We send a detailed scope covering exactly what's needed to pass inspection. You approve before we start."
            />
            <StepCard
              step="3"
              icon={<Settings />}
              title="Partner-Backed Execution"
              time="2–4 weeks"
              desc="Our Eagle Eye/Brivo design teams build your system. We manage the install and prep your documentation for regulators."
            />
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-green-50 border-l-4 border-green-500 p-4 text-center rounded-md">
            <p className="font-semibold text-gray-900">Our Guarantee</p>
            <p className="text-sm text-gray-700 mt-1">
              If you fail inspection due to our design, we fix it free or refund your fee.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">What Cannabis Operators Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Testimonial
              initials="DG"
              quote="“Passed Colorado MED inspection on first try. Mark knew exactly what the inspectors would look for.”"
              location="Operations Manager, Cultivation facility — Denver"
            />
            <Testimonial
              initials="AL"
              quote="“We were 3 weeks from license deadline and our system wasn’t compliant. Mark got us approved in 12 days.”"
              location="Owner, Dispensary — Albuquerque"
            />
            <Testimonial
              initials="SP"
              quote="“Worth every dollar to not deal with the regulatory maze ourselves. System works flawlessly.”"
              location="Multi-site operator — Phoenix"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white border-y border-brand-sage/40">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions, Answered</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Objection
              q={'"Do you install in my state?"'}
              a="We currently serve Colorado, New Mexico, and Arizona. If you're expanding to other legal states, we can coordinate through our partner network."
            />
            <Objection
              q={'"How much does this cost?"'}
              a="Depends on your facility size and current state. Small dispensaries typically run $25K–$50K all-in. Large cultivation operations $100K–$200K. We quote exactly after the assessment call."
            />
            <Objection
              q={'"What if I already have cameras installed?"'}
              a="We evaluate your existing setup during the assessment call. Often we can integrate what you have and just add compliance layers (biometrics, retention servers, state tracking integration)."
            />
            <Objection
              q={'"Can\'t I just buy equipment and install it myself?"'}
              a="You can—but if it doesn't meet state-specific retention, resolution, or integration requirements, you'll fail inspection and lose weeks rebuilding. We ensure compliance before equipment is ordered."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-brand-teal to-brand-teal/85 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your License Deadline Isn’t Flexible. Let’s Make Sure You’re Ready.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            30-minute call. No obligation. Fixed-price quote within 48 hours if you want to proceed.
          </p>
          <Link
            href="#assessment"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-lg font-semibold text-brand-teal hover:bg-amber-300"
          >
            Book Free Compliance Assessment <ChevronRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-white/80">
            Prefer to talk first?{" "}
            <a href="tel:+15052261457" aria-label="Call CalLord at 505 226 1457" className="underline font-semibold">
              Call (505) 226-1457
            </a>
          </p>
        </div>
      </section>

     {/* Footer */}
<footer className="bg-white">
  <div className="container-custom max-w-5xl mx-auto py-8 text-sm text-gray-700 text-center">
    <div className="mb-2">
      Licensed &amp; Insured • Colorado • New Mexico • Arizona
    </div>
    <div>
      © {new Date().getFullYear()} CalLord Unified Technologies • Albuquerque, NM •{" "}
      <a href="tel:+15052261457" className="text-brand-teal font-semibold">
        (505) 226-1457
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}

/* ---------- Reusable Components ---------- */

function CardProblem({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <div className="text-brand-teal mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function StepCard({ step, icon, title, time, desc }) {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold mb-4 relative">
        {step}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-brand-teal flex items-center justify-center shadow ring-1 ring-brand-sage/30">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-brand-teal font-semibold mb-3">{time}</p>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}

function Testimonial({ initials, quote, location }) {
  return (
    <div className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal shadow-sm">
      <div className="flex items-center gap-3 mb-3 text-brand-teal">
        <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-semibold">
          {initials}
        </div>
        <div className="flex items-center text-amber-500" aria-hidden="true">
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div className="border-t border-brand-sage pt-4">
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
  );
}

function Objection({ q, a }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl">?</div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{q}</h3>
        <p className="text-gray-700">{a}</p>
      </div>
    </div>
  );
}
