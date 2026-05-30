import horseMain from "@assets/horse-main_1780138806415.png";
import horseApproved from "@assets/horse-approved.png_1780138806415.png";
import horsePresenting from "@assets/horse-presenting_1780138806415.png";
import horseStrategy from "@assets/horse-strategy_1780138806416.png";
import horseWorking from "@assets/horse-working_1780138806416.png";

type HorseVariant = "hero" | "main" | "approved" | "presenting" | "strategy" | "service" | "quote" | "working";

interface BulgarianHorseProps {
  variant?: HorseVariant;
  className?: string;
  alt?: string;
}

const variantMap: Record<HorseVariant, { src: string; defaultAlt: string }> = {
  hero:       { src: horseMain,       defaultAlt: "The Bulgarian Horse – DMCOI" },
  main:       { src: horseMain,       defaultAlt: "The Bulgarian Horse – DMCOI" },
  approved:   { src: horseApproved,   defaultAlt: "The Bulgarian Horse – thinking" },
  presenting: { src: horsePresenting, defaultAlt: "The Bulgarian Horse – presenting results" },
  strategy:   { src: horseStrategy,   defaultAlt: "The Bulgarian Horse – strategy mode" },
  service:    { src: horseStrategy,   defaultAlt: "The Bulgarian Horse" },
  quote:      { src: horseApproved,   defaultAlt: "The Bulgarian Horse" },
  working:    { src: horseWorking,    defaultAlt: "The Bulgarian Horse – working" },
};

export function BulgarianHorse({ variant = "hero", className = "", alt }: BulgarianHorseProps) {
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
