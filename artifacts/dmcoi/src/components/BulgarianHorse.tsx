import horseMain from "@assets/main_1780126129087.png";
import horseApproved from "@assets/approved_1780126129086.png";
import horseStrategy from "@assets/strategy_1780126129087.png";
import horseWorking from "@assets/working_1780126129087.png";

type HorseVariant = "hero" | "service" | "quote" | "working" | "approved";

interface BulgarianHorseProps {
  variant?: HorseVariant;
  className?: string;
  alt?: string;
}

const variantMap: Record<HorseVariant, { src: string; defaultAlt: string }> = {
  hero: { src: horseMain, defaultAlt: "The Bulgarian Horse – DMCOI mascot" },
  approved: { src: horseApproved, defaultAlt: "The Bulgarian Horse thinking" },
  quote: { src: horseStrategy, defaultAlt: "The Bulgarian Horse – strategy mode" },
  service: { src: horseStrategy, defaultAlt: "The Bulgarian Horse" },
  working: { src: horseWorking, defaultAlt: "The Bulgarian Horse working" },
};

export function BulgarianHorse({
  variant = "hero",
  className = "",
  alt,
}: BulgarianHorseProps) {
  const { src, defaultAlt } = variantMap[variant];

  return (
    <img
      src={src}
      alt={alt ?? defaultAlt}
      className={className}
      draggable={false}
    />
  );
}
