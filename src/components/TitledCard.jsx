import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = {
  damping: 30,
  stiffness: 120,
  mass: 1.5,
};

const TiltedCard = ({ imageSrc, children }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);
  const [lastY, setLastY] = useState(0);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    rotateX.set((-y / rect.height) * 18);
    rotateY.set((x / rect.width) * 18);

    setLastY(y);
  };

  const handleEnter = () => scale.set(1.05);
  const handleLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale }}
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
    </motion.div>
  );
};

export default TiltedCard;
