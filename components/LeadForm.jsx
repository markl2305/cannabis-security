"use client";

import { useState } from "react";
import { event as gaEvent } from "@/lib/gtag";

const FORM_ID = "cannabis-security-lead";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const data = new FormData(e.target);
    const payload = {
      name: data.get("name")?.toString().trim(),
      email: data.get("email")?.toString().trim(),
      phone: data.get("phone")?.toString().trim(),
      company: data.get("company")?.toString().trim(),
      location: data.get("location")?.toString().trim(),
      timeline: data.get("timeline")?.toString(),
      status: data.get("status")?.toString(),
      details: data.get("details")?.toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json?.ok === false) {
        throw new Error(json?.message || "Something went wrong. Please try again.");
      }

      setSuccess(true);
      e.target.reset();
      gaEvent("lead_submit", {
        form_id: FORM_ID,
        form_name: "Cannabis Security Landing",
        timeline: payload.timeline || undefined,
        status: payload.status || undefined,
      });
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">Request Your Compliance Assessment</h3>
        <p className="text-sm text-gray-600">
          We respond within one business day. All fields marked * are required.
        </p>
      </div>

      {success && (
        <p className="text-green-700 bg-green-50 border border-green-200 text-sm p-3 rounded">
          Thank you — your request was received. We&apos;ll follow up shortly.
        </p>
      )}
      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 text-sm p-3 rounded">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Full name *
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="Jane Doe"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Email *
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="you@email.com"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Phone *
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="(505) 226-1457"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Facility / company *
          <input
            type="text"
            name="company"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="Dispensary, cultivation site, etc."
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          City &amp; state *
          <input
            type="text"
            name="location"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="Denver, CO"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Timeline
          <select
            name="timeline"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="">Select timeline (optional)</option>
            <option value="<30 days">Under 30 days</option>
            <option value="30-60 days">30–60 days</option>
            <option value="60-90 days">60–90 days</option>
            <option value="Exploring">Exploring options</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800 md:col-span-2">
          Project stage
          <select
            name="status"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="">Select stage (optional)</option>
            <option value="Pre-license">Pre-license (planning system)</option>
            <option value="In-progress">System in progress</option>
            <option value="Failed inspection">Failed inspection (need remediation)</option>
            <option value="Expansion">Expansion / new site</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
        Project details / notes *
        <textarea
          name="details"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
          placeholder="State, license timeline, existing equipment, and any compliance concerns."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-teal px-4 py-3 text-white font-semibold shadow hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Send my compliance assessment"}
      </button>
    </form>
  );
}
