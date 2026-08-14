import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Geovanna Lash Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "images", "logocerta.jpeg"));
  const logoDataUrl = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "72px 90px", background: "#111012", color: "#fff9f7", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 470, height: 470, borderRadius: 999, background: "#f45693", right: -80, top: -110, opacity: .16 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 66 }}>
        <div style={{ width: 330, height: 330, borderRadius: 999, border: "7px solid #f45693", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "0 24px 70px #00000088" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUrl} alt="" width="380" height="380" style={{ width: 380, height: 380, objectFit: "cover" }} />
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
