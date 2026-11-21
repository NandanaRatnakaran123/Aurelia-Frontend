"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeInquiry, setInquiryMode, type InquiryMode } from "@/features/inquiry/inquirySlice";
import { useSubmitInquiry } from "@/features/inquiry/useSubmitInquiry";
import type { InquiryPayload } from "@/features/inquiry/inquiryApi";

const EVENT_TYPES = ["Wedding", "Engagement", "Social event", "Corporate event", "Other"];
const CALL_TIMES = ["Morning (9am – 12pm)", "Afternoon (12pm – 4pm)", "Evening (4pm – 8pm)"];

const fieldClass =
  "w-full rounded-lg border border-gold-dark/40 bg-cream/80 px-4 py-2.5 text-base text-ink placeholder:text-ink/50 focus:border-ink focus:bg-cream focus:outline-none";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs uppercase tracking-[0.16em] text-ink/80">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-[#9b2c1f]">
          {error}
        </p>
      )}
    </div>
  );
}

function InquiryForm({ mode, id, onClose }: { mode: InquiryMode; id: (name: string) => string; onClose: () => void }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sentName, setSentName] = useState<string | null>(null);
  const mutation = useSubmitInquiry();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const name = get("name");
    const phone = get("phone");
    const email = get("email");

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a valid phone number.";
    if (mode === "inquiry" || email) {
      if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const payload: InquiryPayload = { type: mode, name, phone };
    if (email) payload.email = email;
    if (mode === "inquiry") {
      const eventType = get("eventType");
      const eventDate = get("eventDate");
      const guests = Number(get("guestCount"));
      if (eventType) payload.eventType = eventType;
      if (eventDate) payload.eventDate = eventDate;
      if (guests > 0) payload.guestCount = guests;
    } else {
      payload.preferredTime = get("preferredTime");
    }
    const message = get("message");
    if (message) payload.message = message;

    mutation.mutate(payload, {
      onSuccess: () => setSentName(name.split(" ")[0]),
    });
  }

  return (
    <>
        {sentName ? (
          <div role="status" className="py-8 text-center">
            <p className="mb-3 font-serif text-[30px] text-ink">Thank you, {sentName}.</p>
            <p className="mb-8 text-ink/80">
              {mode === "inquiry"
                ? "We have received your inquiry and will be in touch soon."
                : "We have received your request and will call you soon."}
            </p>
            <button
              type="button"
              onClick={() => onClose()}
              className="rounded-full bg-ink px-9 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:bg-footer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor={id("name")} error={errors.name}>
                <input id={id("name")} name="name" autoComplete="name" className={fieldClass} placeholder="Your full name" />
              </Field>
              <Field label="Phone" htmlFor={id("phone")} error={errors.phone}>
                <input
                  id={id("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="+91 98765 43210"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={mode === "inquiry" ? "Email" : "Email (optional)"} htmlFor={id("email")} error={errors.email}>
                <input
                  id={id("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </Field>
              {mode === "inquiry" ? (
                <Field label="Guest count" htmlFor={id("guestCount")}>
                  <input
                    id={id("guestCount")}
                    name="guestCount"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    className={fieldClass}
                    placeholder="Approx. guests"
                  />
                </Field>
              ) : (
                <Field label="Best time to call" htmlFor={id("preferredTime")}>
                  <select id={id("preferredTime")} name="preferredTime" defaultValue={CALL_TIMES[0]} className={fieldClass}>
                    {CALL_TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              )}
            </div>

            {mode === "inquiry" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Event type" htmlFor={id("eventType")}>
                  <select id={id("eventType")} name="eventType" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select
                    </option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Event date" htmlFor={id("eventDate")}>
                  <input id={id("eventDate")} name="eventDate" type="date" className={`${fieldClass} [color-scheme:light]`} />
                </Field>
              </div>
            )}

            <Field label={mode === "inquiry" ? "Your vision" : "Anything we should know? (optional)"} htmlFor={id("message")}>
              <textarea
                id={id("message")}
                name="message"
                rows={2}
                className={`${fieldClass} resize-none`}
                placeholder={mode === "inquiry" ? "Style, venue ideas, the feeling you want…" : ""}
              />
            </Field>

            {mutation.isError && (
              <p role="alert" className="text-sm text-[#9b2c1f]">
                Sorry, something went wrong. Please try again, or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={mutation.isPending}
              className="mt-1 rounded-full bg-ink px-9 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:bg-footer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {mutation.isPending ? "Sending…" : mode === "inquiry" ? "Send inquiry" : "Request call back"}
            </button>
          </form>
        )}
    </>
  );
}

export default function InquiryModal() {
  const dispatch = useAppDispatch();
  const { open, mode } = useAppSelector((s) => s.inquiry);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  // open / close the native <dialog> to match store state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tab = (m: InquiryMode, label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={mode === m}
      onClick={() => dispatch(setInquiryMode(m))}
      className={`flex-1 border-b py-2.5 text-[13px] uppercase tracking-[0.16em] transition-colors ${
        mode === m ? "border-ink text-ink" : "border-gold-dark/30 text-ink/55 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={id("title")}
      onClose={() => dispatch(closeInquiry())}
      onClick={(e) => {
        if (e.target === e.currentTarget) dispatch(closeInquiry());
      }}
      className="m-auto max-h-[96vh] w-[min(92vw,640px)] overflow-y-auto rounded-3xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-gradient-to-b from-[#f0e4c8] via-[#e6d3ac] to-[#d8bb84] p-0 text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative rounded-3xl border border-gold-dark/50 px-[clamp(20px,5vw,40px)] pb-8 pt-9">
        <button
          type="button"
          onClick={() => dispatch(closeInquiry())}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-2xl leading-none text-ink/60 hover:text-ink"
        >
          ×
        </button>

        <h2 id={id("title")} className="mb-1 font-serif text-[30px] font-normal leading-tight text-ink">
          {mode === "inquiry" ? "Start your inquiry" : "Request a call back"}
        </h2>
        <p className="mb-5 text-[15px] text-ink/80">
          {mode === "inquiry"
            ? "Tell us about your date, your vision and your guest count."
            : "Leave your number and a good time to reach you, and we will call you."}
        </p>

        <div role="tablist" aria-label="Type of request" className="mb-6 flex">
          {tab("inquiry", "Inquiry")}
          {tab("callback", "Call back")}
        </div>

        {open && <InquiryForm key={mode} mode={mode} id={id} onClose={() => dispatch(closeInquiry())} />}
      </div>
    </dialog>
  );
}
