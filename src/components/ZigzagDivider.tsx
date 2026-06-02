interface ZigzagDividerProps {
  topColor?: string;
  bottomColor?: string;
  topGradient?: { from: string; via?: string; to: string };
  className?: string;
  flip?: boolean;
  blendWithTop?: boolean;
}

const zigzagEdge =
  "M0,28 L18,42 L35,26 L52,45 L70,30 L88,48 L105,25 L122,43 L140,28 L158,46 L175,30 L192,44 L210,27 L228,47 L245,32 L262,42 L280,26 L298,48 L315,30 L332,44 L350,28 L368,46 L385,25 L402,43 L420,32 L438,48 L455,27 L472,45 L490,30 L508,44 L525,26 L542,47 L560,32 L578,42 L595,28 L612,46 L630,30 L648,48 L665,25 L682,43 L700,32 L718,46 L735,28 L752,44 L770,30 L788,47 L805,26 L822,42 L840,32 L858,48 L875,27 L892,45 L910,30 L928,44 L945,28 L962,46 L980,25 L998,43 L1015,32 L1032,48 L1050,27 L1068,45 L1085,30 L1102,44 L1120,28 L1138,46 L1155,32 L1172,42 L1190,26 L1200,38";

const ZigzagDivider = ({
  topColor = "hsl(var(--background))",
  bottomColor = "hsl(var(--primary))",
  topGradient,
  className = "",
  flip = false,
  blendWithTop = false,
}: ZigzagDividerProps) => {
  const gradientId = `zz-grad-${Math.random().toString(36).slice(2, 9)}`;
  const fill = topGradient ? `url(#${gradientId})` : topColor;

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${blendWithTop ? "-mt-[35px] md:-mt-[55px]" : ""} ${flip ? "rotate-180" : ""} ${className}`}
      style={blendWithTop ? { marginBottom: "-1px" } : { marginTop: "-1px", marginBottom: "-1px" }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[35px] md:h-[55px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {topGradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={topGradient.from} />
              {topGradient.via && <stop offset="50%" stopColor={topGradient.via} />}
              <stop offset="100%" stopColor={topGradient.to} />
            </linearGradient>
          </defs>
        )}
        {blendWithTop ? (
          <path d={`${zigzagEdge} L1200,60 L0,60 Z`} fill={bottomColor} />
        ) : (
          <>
            <rect width="1200" height="60" fill={bottomColor} />
            <path d={`M0,0 L0,28 ${zigzagEdge.replace("M0,28 ", "")} L1200,0 Z`} fill={fill} />
          </>
        )}
      </svg>
    </div>
  );
};

export default ZigzagDivider;
