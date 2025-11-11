// app/thanks/page.js
export const metadata = {
  title: "Thanks — CalLord Unified Technologies",
  description: "Thanks for your assessment request. We'll call you within 4 hours.",
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-brand-beige">
      <div className="max-w-xl text-center bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl">✓</span>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Thanks — we got it!
        </h1>
        
        <p className="text-gray-700 text-lg mb-6">
          We'll call you within <strong>4 business hours</strong> to schedule your free 30-minute compliance assessment.
        </p>
        
        <div className="bg-brand-beige border-l-4 border-brand-teal p-4 text-left">
          <p className="font-semibold text-gray-900 mb-2">What happens next:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• We'll review your facility details before the call</li>
            <li>• During the call: compliance gap analysis + Q&A</li>
            <li>• Within 48 hours: fixed-price quote (if you want to proceed)</li>
          </ul>
        </div>
        
        <p className="text-gray-600 mt-6 text-sm">
          Need to reach us now?{" "}
          <a href="tel:+15052261457" className="text-brand-teal font-semibold">
            Call (505) 226-1457
          </a>
        </p>
      </div>
    </main>
  );
}
