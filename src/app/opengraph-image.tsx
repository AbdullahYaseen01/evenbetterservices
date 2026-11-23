import { ImageResponse } from "next/og";

export const alt = "EvenBetterServices — Smarter systems. Better experiences.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F8F2",
          padding: "72px",
          color: "#123C35",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#123C35" }} />
          <div style={{ fontSize: 28, letterSpacing: -1 }}>EvenBetterServices</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 0.95, letterSpacing: -3 }}>
          <div>Build smarter.</div>
          <div style={{ color: "#087F5B", fontStyle: "italic" }}>Automate better.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28 }}>Smarter systems. Better experiences.</div>
          <div style={{ background: "#D8F36A", color: "#123C35", borderRadius: 999, padding: "12px 22px", fontSize: 22 }}>
            AI · Automation · Software
          </div>
        </div>
      </div>
    ),
    size,
  );
}
