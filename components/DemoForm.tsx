"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { trackSiteEvent } from "@/lib/analytics";

export function DemoForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hasStartedRef = useRef(false);
  const hasTrackedValidationRef = useRef(false);

  useEffect(() => {
    trackSiteEvent("Demo Form Viewed", {
      form_id: "demo_request"
    });
  }, []);

  function trackFormStarted() {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    trackSiteEvent("Demo Form Started", {
      form_id: "demo_request"
    });
  }

  function trackValidationBlocked(event: React.InvalidEvent<HTMLFormElement>) {
    if (hasTrackedValidationRef.current) {
      return;
    }

    const field = event.target as unknown as
      | HTMLInputElement
      | HTMLSelectElement;
    hasTrackedValidationRef.current = true;
    trackSiteEvent("Demo Form Validation Blocked", {
      form_id: "demo_request",
      field_name: field.name || "unknown"
    });
  }

  return (
    <form
      className="demo-form"
      onFocusCapture={trackFormStarted}
      onChangeCapture={trackFormStarted}
      onInvalidCapture={trackValidationBlocked}
      onSubmit={async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setStatus("submitting");
        setErrorMessage("");
        trackSiteEvent("Demo Form Submit Attempted", {
          form_id: "demo_request",
          has_company_name: Boolean(
            String(formData.get("companyName") || "").trim()
          )
        });

        let response: Response;

        try {
          response = await fetch("/api/demo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              firstName: String(formData.get("firstName") || ""),
              lastName: String(formData.get("lastName") || ""),
              companyName: String(formData.get("companyName") || ""),
              email: String(formData.get("email") || ""),
              phone: String(formData.get("phone") || ""),
              legalConsent: formData.get("legalConsent") === "on"
            })
          });
        } catch {
          setStatus("error");
          setErrorMessage(
            "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut."
          );
          trackSiteEvent("Demo Form Submit Failed", {
            form_id: "demo_request",
            reason: "network"
          });
          return;
        }

        if (!response.ok) {
          const result = (await response.json().catch(() => null)) as
            | { message?: string }
            | null;

          setStatus("error");
          setErrorMessage(
            result?.message ||
              "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut."
          );
          trackSiteEvent("Demo Form Submit Failed", {
            form_id: "demo_request",
            reason: "api",
            status_code: response.status
          });
          return;
        }

        trackSiteEvent("Demo Form Submit Succeeded", {
          form_id: "demo_request"
        });
        router.push("/danke");
      }}
    >
      <div className="form-grid two-columns">
        <label>
          <span>Vorname</span>
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          <span>Nachname</span>
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        <span>Firmenname optional</span>
        <input name="companyName" autoComplete="organization" />
      </label>
      <div className="form-grid two-columns">
        <label>
          <span>E-Mail</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Telefonnummer</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label className="checkbox-row">
        <input
          name="legalConsent"
          type="checkbox"
          required
          onChange={(event) => {
            trackSiteEvent("Demo Legal Consent Changed", {
              form_id: "demo_request",
              checked: event.currentTarget.checked
            });
          }}
        />
        <span>
          Ich stimme der DSGVO-konformen Verarbeitung meiner Angaben gemäß{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link> zu und
          akzeptiere die <Link href="/agb">AGB</Link>.
        </span>
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button className="btn btn-primary form-submit" type="submit">
        {status === "submitting"
          ? "Anfrage wird gesendet ..."
          : "Demo mit PMSLogic starten"}
      </button>
    </form>
  );
}
