import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  return (
    <Link
      href="/"
      className={`logo logo-${variant}`}
      aria-label="PMSLogic Startseite"
    >
      <Image
        src="/pmslogo.png"
        alt="PMSLogic Logo"
        width={6788}
        height={2263}
        priority={variant === "header"}
        className="logo-image"
      />
    </Link>
  );
}
