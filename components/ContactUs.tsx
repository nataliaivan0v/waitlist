"use client";

import { useState, useEffect } from "react";
import { NAVY, WHITE, DIM, BORDER } from "@/app/lib/constants";

const BOOKING_LINK = "https://calendar.app.google/EBwU73eeJYDEsVfs7";

const cofounders = [
  {
    name: "Natalia Ivanov",
    role: "Co-founder & CEO",
    photo: "/nat_headshot.jpg",
    bio: "Full-Stack Software Engineer passionate about building agentic workflows and leveraging technology to create innovative solutions with global impact.",
  },
  {
    name: "Jacob Wu-Chen",
    role: "Co-founder & CTO",
    photo: "/jake_headshot.jpeg",
    bio: "Forward Deployed Software Engineer focusing on artificial intelligence tools and developing software for real-world applications.",
  },
];

export default function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const px = isMobile ? "20px" : "40px";

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: `${isMobile ? "48px" : "80px"} ${px} 80px` }}>

      <section style={{ marginBottom: isMobile ? "48px" : "64px" }}>
        <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-1.5px", color: NAVY, margin: "0 0 16px", lineHeight: 1.1 }}>
          Contact us
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: DIM, margin: 0 }}>
          We&apos;re the two founders building Proviras. Read a bit about us below, then grab a time to talk.
        </p>
      </section>

      {/* Founders */}
      <section style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 56, marginBottom: isMobile ? "60px" : "100px" }}>
        {cofounders.map((person) => (
          <div
            key={person.name}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "140px 1fr",
              gap: isMobile ? 16 : 28,
              alignItems: "start",
            }}
          >
            <div
              style={{
                width: isMobile ? 96 : 140,
                height: isMobile ? 96 : 140,
                borderRadius: 12,
                background: "rgba(0,11,61,0.04)",
                border: `1px solid ${BORDER}`,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {person.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={person.photo} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: DIM, letterSpacing: "0.06em" }}>photo</span>
              )}
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: 18, color: NAVY, margin: "0 0 4px", letterSpacing: "-0.3px" }}>{person.name}</p>
              <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: DIM, letterSpacing: "0.06em", margin: "0 0 12px" }}>{person.role}</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: DIM, margin: 0 }}>{person.bio}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Booking CTA */}
      <div style={{ textAlign: "center", borderTop: `1px solid ${BORDER}`, paddingTop: 60 }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 1.9rem)", fontWeight: 800, letterSpacing: "-1px", color: NAVY, margin: "0 0 16px", lineHeight: 1.1 }}>
          Book a meeting with us
        </h2>
        <p style={{ fontSize: 15, color: DIM, lineHeight: 1.75, margin: "0 0 32px" }}>
          Pick a time that works for you and we&apos;ll see you there.
        </p>
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", padding: "14px 32px", fontSize: 15, fontWeight: 700,
            background: NAVY, color: WHITE, borderRadius: 8, textDecoration: "none",
            letterSpacing: "-0.2px",
          }}
        >
          Book a time →
        </a>
      </div>

    </div>
  );
}
