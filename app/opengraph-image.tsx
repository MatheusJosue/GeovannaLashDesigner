import { ImageResponse } from "next/og";

export const alt = "Geovanna Lash Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "72px 90px", background: "#111012", color: "#fff9f7", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 470, height: 470, borderRadius: 999, background: "#f45693", right: -80, top: -110, opacity: .16 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 66 }}>
        <div style={{ width: 310, height: 310, borderRadius: 999, background: "#f45693", border: "10px solid #fff9f7", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#111012" }}>
          <div style={{ fontFamily: "serif", fontWeight: 700, fontSize: 128, letterSpacing: -12, marginRight: 12 }}>GN</div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 7 }}>LASH DESIGNER</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 650 }}>
          <div style={{ color: "#f45693", fontSize: 22, fontWeight: 700, letterSpacing: 6, marginBottom: 24 }}>BELEZA • CONFIANÇA • CUIDADO</div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 76, lineHeight: 1.02 }}><span>Geovanna</span><span>Lash Designer</span></div>
          <div style={{ fontSize: 26, color: "#d2cacc", marginTop: 28 }}>Realçando a beleza única do seu olhar.</div>
        </div>
      </div>
    </div>,
    size,
  );
}
