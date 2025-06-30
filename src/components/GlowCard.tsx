import React, { useRef } from "react";
import type { Card } from "../constants/interface";

interface GlowCardProps {
  card: Card;
  index: number;
  children?: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, index, children }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleMouseMove = (index: number) => (e: any) => {
    const card = cardRefs.current[index];
    if (!card) return;

    //我们必须获取鼠标相对于卡片的位置。
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //计算从卡片中心到鼠标位置的角度。
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", (angle + 60).toString());
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="grow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
