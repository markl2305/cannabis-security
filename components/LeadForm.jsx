"use client";
import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);
    setLoading(true);

    const data = new FormData(e.target);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      facilityType: data.get("facilityType"),
      status: data.get("status"),
      timeline: data.get("timeline"),
      notes: data.get("notes"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        throw new Error("Form failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <p className="text-green-600 text-sm">Thank you — we’ll be in touch shortly.</p>
      )}
      {error && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <select name="facilityType" required className="w-full p-2 border border-gray-300 rounded">
        <option value="">Facility Type</option>
        <option value="Cultivation (small)">Cultivation (small &lt;5K sq ft)</option>
        <option value="Cultivation (large)">Cultivation (large 5K+ sq ft)</option>
        <option value="Dispensary / Retail">Dispensary / Retail</option>
        <option value="Processing / Manufacturing">Processing / Manufacturing</option>
        <option value="Multi-site operation">Multi-site operation</option>
      </select>

      <select name="status" required className="w-full p-2 border border-gray-300 rounded">
        <option value="">Current Status</option>
        <option value="Pre-license">Pre-license (no system yet)</option>
        <option value="Have equipment">Have equipment (need compliance review)</option>
        <option value="Failed inspection">Failed inspection (need fix)</option>
        <option value="Expansion">Expansion (adding locations)</option>
      </select>

      <select name="timeline" required className="w-full p-2 border border-gray-300 rounded">
        <option value="">Timeline</option>
        <option value="Urgent">&lt;30 days</option>
        <option value="Soon">30–60 days</option>
        <option value="Planning">60–90 days</option>
        <option value="Exploring">No deadline yet</option>
      </select>

      <textarea
        name="notes"
        placeholder="Additional notes (optional)"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full p-3 text-white font-semibold rounded ${
          loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
