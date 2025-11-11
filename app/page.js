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
          {/* Left: Logo */}
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

          {/* Right: Call + CTA */}
          <div className="hidden md:flex items-center gap-3">
            
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
          {/* Trust bar ABOVE headline */}
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
            {/* Left column: bullets + photo */}
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

              {/* Photo under bullets */}
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

            {/* Right column: form */}
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
            
              href="#assessment"
              className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Let's Make Sure You're Covered →
            </a>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-brand-beige">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Three Steps to Compliance Approval
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Free Assessment Call",
                time: "30 minutes",
                desc: "We review your floor plans, current equipment, and state requirements. You get a compliance gap analysis on the call.",
              },
              {
                step: "2",
                title: "Fixed-Price Quote",
                time: "48 hours",
                desc: "We send a detailed scope covering exactly what's needed to pass inspection. You approve before we start.",
              },
              {
                step: "3",
                title: "Partner-Backed Execution",
                time: "2-4 weeks",
                desc: "Our Eagle Eye/Brivo design teams build your system. We manage the install and prep your documentation for regulators.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-brand-teal font-semibold mb-3">{item.time}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-green-50 border-l-4 border-green-500 p-4 text-center">
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Cannabis Operators Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Passed Colorado MED inspection on first try. Mark knew exactly what the inspectors would look for.",
                location: "Cultivation facility, Denver",
              },
              {
                quote:
                  "We were 3 weeks from license deadline and our system wasn't compliant. Mark got us approved in 12 days.",
                location: "Dispensary, Albuquerque",
              },
              {
                quote:
                  "Worth every dollar to not deal with the regulatory maze ourselves. System works flawlessly.",
                location: "Multi-site operator, Phoenix",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-brand-beige p-6 rounded-lg border-l-4 border-brand-teal shadow-sm"
              >
                <div className="text-brand-teal mb-3 text-2xl">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
                <div className="border-t border-brand-sage pt-4">
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Objections */}
      <section className="section-padding bg-white border-y border-brand-sage/40">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Questions, Answered
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Objection
              q='"Can't I just buy equipment and install it myself?"'
              a="You can—but if it doesn't meet state-specific retention, resolution, or integration requirements, you'll fail inspection and lose weeks rebuilding. We ensure compliance before equipment is ordered."
            />
            <Objection
              q='"What if I already have cameras installed?"'
              a="We evaluate your existing setup during the assessment call. Often we can integrate what you have and just add compliance layers (biometrics, retention servers, state tracking integration)."
            />
            <Objection
              q='"How much does this cost?"'
              a="Depends on your facility size and current state. Small dispensaries typically run $25K-$50K all-in. Large cultivation operations $100K-$200K. We quote exactly after the assessment call."
            />
            <Objection
              q='"Do you install in my state?"'
              a="We currently serve Colorado, New Mexico, and Arizona. If you're expanding to other legal states, we can coordinate through our partner network."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-brand-teal to-brand-teal/85 text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your License Deadline Isn't Flexible. Let's Make Sure You're Ready.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            30-minute call. No obligation. Fixed-price quote within 48 hours if you want to proceed.
          </p>
          
            href="#assessment"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-brand-teal hover:bg-gray-100"
          >
            Book Free Compliance Assessment
          </a>
          <p className="mt-6 text-sm text-white/80">
            Prefer to talk first?{" "}
            <a href="tel:+15052261457" className="underline font-semibold">
              Call (505) 226-1457
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container-custom py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} CalLord Unified Technologies • Albuquerque, NM •{" "}
          <a href="tel:+15052261457" className="text-brand-teal font-semibold">
            (505) 226-1457
          </a>
        </div>
      </footer>
    </main>
  );
}

function Objection({ q, a }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
          ?
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{q}</h3>
        <p className="text-gray-600">{a}</p>
      </div>
    </div>
  );
}
