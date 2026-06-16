"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DemoForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className="demo-form"
      onSubmit={async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setStatus("submitting");
        setErrorMessage("");

        const response = await fetch("/api/demo", {
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

        if (!response.ok) {
          const result = (await response.json().catch(() => null)) as
            | { message?: string }
            | null;

          setStatus("error");
          setErrorMessage(
            result?.message ||
              "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut."
          );
          return;
        }

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
        <input name="legalConsent" type="checkbox" required />
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
        {status === "submitting" ? "Anfrage wird gesendet ..." : "Demo mit PMSLogic starten"}
      </button>
    </form>
  );
}
