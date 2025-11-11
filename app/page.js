// app/page.js
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Cannabis Facility Security Compliance | CalLord Unified Technologies",
  description:
    "State-compliant security design for Colorado, New Mexico, and Arizona cannabis facilities. Pass your inspection first time. Free 30-minute compliance assessment.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-brand-beige border-b border-brand-sage/40">
        <div className="container-custom px-6 md:px-8 flex items-center justify-between py-3">
          <Link href="https://callordut.com" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CalLord Unified Technologies"
              width={720}
              height={400}
              priority
              className="h-[160px] md:h-[176px] w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15052261457"
              className="rounded-xl border border-brand-teal/30 px-3 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/10"
            >
              Call (505) 226-1457
            </a>
            <Link
              href="#assessment"
              className="rounded-xl bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/40"
            >
              Book Assessment
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-teal to-brand-teal/85 text-white">
        <div className="container-custom px-4 md:px-6 py-12 md:py-16">
          {/* Trust bar */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>
                  Trusted by <strong>14</strong> licensed facilities
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>
                  Average approval: <strong>18 days</strong>
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>
                  <strong>Zero</strong> failed inspections
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-4">
              Pass Your Cannabis Facility Inspection — First Time, On Schedule
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              State-compliant security design for Colorado, New Mexico, and Arizona cultivation and dispensary operators. We handle the compliance complexity so you can focus on your license.
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
            <div className="order-2 md:order-1 text-white/90">
              <ul className="space-y-3 text-base md:text-lg leading-7 text-white/95">
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

              <div className="mt-8">
                <figure className="rounded-xl overflow-hidden shadow-lg shadow-black/20 ring-1 ring-white/10">
                  <img
                    src="/images/cannabis-security.jpg"
                    alt="Cannabis facility with compliant security cameras and access control"
                    className="w-full h-56 md:h-72 object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%230f766e' width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23fff' font-size='24' font-family='system-ui'%3ECannabis Security System%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </figure>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Most Cannabis Security Installations Fail Inspection
            </h2>
            <p className="text-gray-600 mt-2">
              State regulators are strict. These three mistakes account for 80% of compliance failures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Wrong Retention Periods",
                desc: "Colorado requires 90 days. Pennsylvania requires 4 years. One size does not fit all—and inspectors know it.",
                icon: "📅",
              },
              {
                title: "Incomplete Biometric Integration",
                desc: "Your cameras work, but they're not tied to your Metrc system. That's an automatic compliance failure in most states.",
                icon: "🔐",
              },
              {
                title: "No Redundancy Plan",
                desc: "A single DVR failure = lost footage = lost license. State regulators don't accept 'equipment malfunction' as an excuse.",
                icon: "⚠️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#assessment"
              className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Let's Make Sure You're Covered →
            </a>
          </div>
        </div>
      </section>

      {/* ... remaining sections unchanged ... */}
    </main>
  );
}
