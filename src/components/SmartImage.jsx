import { useState } from "react";

// Image that always looks good: a gradient placeholder shows while loading
// and stays if the remote image ever fails — so the design never breaks.
export default function SmartImage({ src, alt = "", className = "", imgClass = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`img-fallback relative overflow-hidden ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-all duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${imgClass}`}
        />
      )}
      {/* soft brand sheen so fallbacks still feel intentional */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#07142b]/15 via-transparent to-[#38bdf8]/10" />
    </div>
  );
}
