"use client";

import { useState } from "react";
import { event as gaEvent } from "@/lib/gtag";

export default function ChecklistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      state: formData.get("state")?.toString(),
      facilityType: formData.get("facilityType")?.toString(),
      needs: formData.get("needs")?.toString().trim(),
    };

    try {
      const res = await fetch("/api/checklist", {
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
      gaEvent("checklist_submit", {
        form_name: "Cannabis Checklist",
        state: payload.state || undefined,
        facility_type: payload.facilityType || undefined,
      });
    } catch (err) {
      console.error("Checklist submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <p className="text-green-700 bg-green-50 border border-green-200 text-sm p-3 rounded">
          Thanks — we’ll email you the checklist shortly.
        </p>
      )}
      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 text-sm p-3 rounded">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-sm font-medium text-white">
          Name*
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-white placeholder:text-white/60 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-white">
          Work email*
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-white placeholder:text-white/60 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-sm font-medium text-white">
          State
          <select
            name="state"
            className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-white shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            defaultValue=""
          >
            <option value="" disabled className="text-slate-800">
              Select
            </option>
            <option value="New Mexico" className="text-slate-800">
              New Mexico
            </option>
            <option value="Colorado" className="text-slate-800">
              Colorado
            </option>
            <option value="Arizona" className="text-slate-800">
              Arizona
            </option>
            <option value="Other" className="text-slate-800">
              Other
            </option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-white">
          Facility type
          <select
            name="facilityType"
            className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-white shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            defaultValue=""
          >
            <option value="" disabled className="text-slate-800">
              Select
            </option>
            <option value="Dispensary" className="text-slate-800">
              Dispensary
            </option>
            <option value="Cultivation" className="text-slate-800">
              Cultivation
            </option>
            <option value="Manufacturing/Processing" className="text-slate-800">
              Manufacturing/Processing
            </option>
            <option value="Multi-site Operator" className="text-slate-800">
              Multi-site Operator
            </option>
            <option value="Other" className="text-slate-800">
              Other
            </option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm font-medium text-white">
        What do you need help with? (optional)
        <textarea
          name="needs"
          rows={3}
          className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-3 text-white placeholder:text-white/60 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
          placeholder="Upcoming inspection, remediation, standardizing sites, etc."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        data-cta="checklist-form-submit"
        className="w-full rounded-full bg-brand-teal px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal/70 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "Sending..." : "Send me the checklist"}
      </button>

      <p className="text-xs text-white/80 leading-5">
        By submitting, you agree to receive calls and text messages (SMS/MMS) about your request. Message and data rates may
        apply. We do not sell your information.
      </p>
    </form>
  );
}
