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
      role: data.get("role")?.toString(),
      facilityType: data.get("facilityType")?.toString(),
      state: data.get("state")?.toString(),
      urgency: data.get("urgency")?.toString(),
      details: data.get("details")?.toString().trim(),
      sendChecklist: data.get("sendChecklist") === "on",
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
        urgency: payload.urgency || undefined,
        facility_type: payload.facilityType || undefined,
        state: payload.state || undefined,
        send_checklist: payload.sendChecklist || undefined,
      });
      gaEvent("lead_submit_test", {
        form_id: FORM_ID,
        form_name: "Cannabis Security Landing",
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
            placeholder="(866) 657-2383"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Role *
          <select
            name="role"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="Owner">Owner</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Compliance Officer">Compliance Officer</option>
            <option value="Security Director">Security Director</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Facility type *
          <select
            name="facilityType"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select facility type
            </option>
            <option value="Dispensary">Dispensary</option>
            <option value="Cultivation">Cultivation</option>
            <option value="Manufacturing/Processing">Manufacturing/Processing</option>
            <option value="Multi-site Operator">Multi-site Operator</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          State *
          <select
            name="state"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select state
            </option>
            <option value="New Mexico">New Mexico</option>
            <option value="Colorado">Colorado</option>
            <option value="Arizona">Arizona</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
          Urgency *
          <select
            name="urgency"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select urgency
            </option>
            <option value="Inspection upcoming or failed">I have an inspection coming up or failed one recently</option>
            <option value="Planning ahead">I am planning ahead / upgrading my security</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm font-medium text-gray-800">
        What’s your situation? (optional)
        <textarea
          name="details"
          rows={4}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
          placeholder="Inspection timing, existing system details, regulator notes, or areas you’re concerned about."
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-gray-800">
        <input
          type="checkbox"
          name="sendChecklist"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal"
        />
        <span>
          Also email me the Cannabis Security Inspection Checklist when you send my assessment.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        id="primary-form-submit"
        data-cta="primary-form-submit"
        className="w-full rounded-lg bg-brand-teal px-4 py-3 text-white font-semibold shadow hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Send my compliance assessment"}
      </button>

      <p className="text-xs text-gray-600 leading-5">
        By submitting, you agree to receive calls and text messages (SMS/MMS) about your request.
        Message and data rates may apply. We do not sell your information. See our{" "}
        <a
          href="https://www.callordut.com/privacy"
          className="font-semibold text-brand-teal underline"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
