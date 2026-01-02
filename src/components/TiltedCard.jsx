import { useRef, useState } from "react";

const TiltedCard = ({ imageSrc, children }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) scale(1)" });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 18;
    const rotateY = (x / rect.width) * 18;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: "transform 120ms ease-out",
    });
  };

  const handleEnter = () => setStyle((s) => ({ ...s, transform: s.transform.replace(/scale\([^)]*\)/, "scale(1.03)" ) }));
  const handleLeave = () => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)", transition: "transform 300ms ease" });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={style}
      className="relative will-change-transform"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[#1b1f3b] to-[#0e1024] shadow-xl p-5">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-48 object-cover rounded-2xl"
        />
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
