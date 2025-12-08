import { LeadCategory } from "@/lib/leadScoring";

interface ScoreGaugeProps {
  score: number;
  category: LeadCategory;
}

export function ScoreGauge({ score, category }: ScoreGaugeProps) {
  const getCategoryStyles = () => {
    switch (category) {
      case "Hot Lead":
        return {
          bg: "bg-hot",
          text: "text-hot-foreground",
          ring: "ring-hot/30",
          glow: "shadow-[0_0_40px_hsl(0_84%_60%/0.4)]",
        };
      case "Warm Lead":
        return {
          bg: "bg-warm",
          text: "text-warm-foreground",
          ring: "ring-warm/30",
          glow: "shadow-[0_0_40px_hsl(45_93%_47%/0.4)]",
        };
      case "Cold Lead":
        return {
          bg: "bg-cold",
          text: "text-cold-foreground",
          ring: "ring-cold/30",
          glow: "shadow-[0_0_40px_hsl(210_100%_50%/0.4)]",
        };
    }
  };

  const styles = getCategoryStyles();
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`relative w-56 h-56 ${styles.glow} rounded-full`}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="12"
            className="opacity-30"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={
              category === "Hot Lead"
                ? "hsl(var(--hot))"
                : category === "Warm Lead"
                ? "hsl(var(--warm))"
                : "hsl(var(--cold))"
            }
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Score display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-foreground">{score}</span>
          <span className="text-sm text-muted-foreground">dari 100</span>
        </div>
      </div>
      {/* Category badge */}
      <div
        className={`px-6 py-2 ${styles.bg} ${styles.text} font-semibold text-lg ring-4 ${styles.ring}`}
      >
        {category}
      </div>
    </div>
  );
}
