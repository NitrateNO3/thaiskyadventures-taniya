// Ambient animated gradient blobs — the signature atmosphere behind sections.
export default function Aurora({ variant = "default" }) {
  return (
    <div className="mesh-bg grain">
      {variant === "default" && (
        <>
          <div
            className="mesh-blob animate-float"
            style={{ width: 520, height: 520, top: "-12%", left: "-8%", background: "radial-gradient(circle at 30% 30%, #7dd3fc, transparent 60%)" }}
          />
          <div
            className="mesh-blob animate-float-2"
            style={{ width: 600, height: 600, top: "20%", right: "-14%", background: "radial-gradient(circle at 60% 40%, #38bdf8, transparent 62%)" }}
          />
          <div
            className="mesh-blob animate-float"
            style={{ width: 420, height: 420, bottom: "-16%", left: "25%", background: "radial-gradient(circle at 50% 50%, #bae6fd, transparent 60%)", opacity: 0.5 }}
          />
        </>
      )}
      {variant === "cool" && (
        <>
          <div
            className="mesh-blob animate-float-2"
            style={{ width: 560, height: 560, top: "-10%", right: "-10%", background: "radial-gradient(circle at 50% 50%, #38bdf8, transparent 62%)" }}
          />
          <div
            className="mesh-blob animate-float"
            style={{ width: 460, height: 460, bottom: "-18%", left: "-8%", background: "radial-gradient(circle at 50% 50%, #818cf8, transparent 60%)", opacity: 0.4 }}
          />
        </>
      )}
    </div>
  );
}
