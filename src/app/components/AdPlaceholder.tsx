import React from "react";

type Variant = "banner" | "box" | "square" | "responsive";
type SizeKey = "small" | "medium" | "large";

export interface AdPlaceholderProps {
  variant?: Variant;
  size?: SizeKey;
  width?: number | string;
  height?: number | string;
  aspectRatio?: number;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  children?: React.ReactNode;
  id?: string;
}

/**
 * Responsive AdPlaceholder
 *
 * - Always renders with width: 100% and a maxWidth based on variant/size/explicit width
 * - Uses an aspect-ratio container (padding-top trick) when a ratio is available
 * - If `aspectRatio` prop is provided it takes precedence; otherwise sensible defaults are used
 */
export default function AdPlaceholder({
  variant = "box",
  size = "medium",
  width,
  height,
  aspectRatio,
  className = "",
  style,
  label,
  children,
  id,
}: AdPlaceholderProps) {
  // defaults (used to determine maxWidth and default aspect ratios)
  const defaults: Record<
    Variant,
    { width: string; height: string; aspectRatio: number }
  > = {
    banner: { width: "728px", height: "90px", aspectRatio: 728 / 90 }, // ~8.088...
    box: { width: "300px", height: "250px", aspectRatio: 300 / 250 }, // 1.2
    square: { width: "250px", height: "250px", aspectRatio: 1 },
    responsive: { width: "100%", height: "auto", aspectRatio: 6.4 }, // default banner-like responsive ratio
  };

  const sizeAdjust: Record<
    SizeKey,
    Partial<{ width: string; height: string }>
  > = {
    small: { width: "160px", height: "80px" },
    medium: {},
    large: { width: "970px", height: "250px" },
  };

  // compute maxWidth / dimension hints
  let computedMaxWidth: string | undefined;
  let computedHeight: string | undefined;

  if (width)
    computedMaxWidth = typeof width === "number" ? `${width}px` : width;
  if (height)
    computedHeight = typeof height === "number" ? `${height}px` : height;

  if (!computedMaxWidth && !computedHeight) {
    computedMaxWidth = defaults[variant].width;
    computedHeight = defaults[variant].height;
  }

  // apply size adjustments (overrides default max width/height if provided by size)
  const adj = sizeAdjust[size];
  if (adj.width) computedMaxWidth = adj.width;
  if (adj.height) computedHeight = adj.height;

  // derive the final aspect ratio to use (width / height)
  let finalAspectRatio: number | undefined = aspectRatio;
  if (!finalAspectRatio) {
    // priority: explicit height & maxWidth -> derive, else variant defaults
    const parsePx = (v?: string) => {
      if (!v) return undefined;
      const m = v.match(/^([\d.]+)px$/);
      if (m) return Number(m[1]);
      // try numeric string
      const n = Number(v);
      return Number.isFinite(n) ? n : undefined;
    };
    const wNum = parsePx(computedMaxWidth);
    const hNum = parsePx(computedHeight);
    if (wNum && hNum) {
      finalAspectRatio = wNum / hNum;
    } else {
      // fallback to variant default aspect ratio
      finalAspectRatio = defaults[variant].aspectRatio;
    }
  }

  // wrapper style: always responsive width with a maxWidth constraint
  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: computedMaxWidth ?? "100%",
    margin: "0 auto",
    boxSizing: "border-box",
    background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
    color: "#374151",
    border: "1px dashed rgba(55,65,81,0.2)",
    borderRadius: 8,
    fontSize: 14,
    textAlign: "center",
    ...style,
  };

  const ariaLabel = label ?? "Advertisement";

  const svg = (
    <svg
      width="56"
      height="40"
      viewBox="0 0 56 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
    >
      <rect
        x="1"
        y="1"
        width="54"
        height="38"
        rx="4"
        stroke="rgba(55,65,81,0.12)"
        strokeWidth="2"
        fill="rgba(255,255,255,0.5)"
      />
      <path
        d="M6 10h20v4H6zM6 16h12v4H6zM6 22h10v4H6z"
        fill="rgba(55,65,81,0.18)"
      />
      <rect
        x="32"
        y="10"
        width="18"
        height="12"
        rx="2"
        fill="rgba(55,65,81,0.06)"
        stroke="rgba(55,65,81,0.08)"
      />
    </svg>
  );

  // Use the aspect-ratio container (padding-top trick) to keep height responsive to width
  const paddingTop = finalAspectRatio
    ? `${(1 / finalAspectRatio) * 100}%`
    : undefined;

  return (
    <div
      id={id}
      className={["ad-placeholder", className].filter(Boolean).join(" ")}
      role="complementary"
      aria-label={ariaLabel}
      style={wrapperStyle}
    >
      {paddingTop ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            paddingTop,
            boxSizing: "border-box",
          }}
          className="overflow-hidden"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {children ? (
              // Full-bleed children: occupy the entire placeholder area with no chrome.
              <div style={{ width: "100%", height: "100%" }}>{children}</div>
            ) : (
              // Fallback chrome when no children provided
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  padding: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {svg}
                  <div style={{ fontSize: 13, color: "#6b7280" }}>
                    {"Ad placeholder — your ad will appear here"}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>
                    responsive slot — max width: {computedMaxWidth}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            minHeight: computedHeight ? computedHeight : undefined,
          }}
          className="overflow-hidden"
        >
          {children ? (
            // When children exist render full-bleed content only
            <div style={{ width: "100%", height: "100%" }}>{children}</div>
          ) : (
            // Fallback chrome when empty
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexDirection: "column",
                padding: 12,
              }}
            >
              {svg}
              <div
                style={{ fontSize: 13, color: "#6b7280" }}
                className="relative"
              >
                {"Ad placeholder — your ad will appear here"}
              </div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>
                responsive slot — max width: {computedMaxWidth}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
