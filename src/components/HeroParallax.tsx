import React from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface HeroParallaxProps {
  products: Product[];
}

export const HeroParallax = ({ products }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
      <motion.div className="flex flex-row-reverse gap-12 md:gap-20 mb-20 px-4 md:px-40">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row gap-12 md:gap-20 mb-20 px-4 md:px-40">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-12 md:gap-20 px-4 md:px-40">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0" style={{ zIndex: 10, position: "relative" }}>
      <h1 
        style={{
          display: "block",
          background: "linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: "clamp(2rem, 8vw, 7rem)",
          fontWeight: "800",
          lineHeight: "1.1",
          marginBottom: "20px",
          letterSpacing: "-0.02em",
          textAlign: "left",
        }}
      >
        Brea Miller
      </h1>
      <p 
        style={{
          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
          fontWeight: "400",
          color: "#aaa",
          marginBottom: "60px",
          lineHeight: "1.6",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <span style={{
          background: "linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: "600",
        }}>✐ᝰ innovative empath–</span> crafting digital experiences that bridge the gap between innovation and human connection. Every project is an opportunity to create products that don't just work beautifully, but feel intentional and alive.
      </p>
            <button 
        onClick={() => navigate('/about')}
        className="mt-8"
        style={{
          background: "transparent",
          border: "none",
          color: "#ffffff",
          padding: "clamp(12px, 2vw, 18px)",
          borderRadius: "20px",
          minWidth: "clamp(120px, 30vw, 140px)",
          minHeight: "clamp(48px, 10vw, 60px)",
          fontSize: "clamp(12px, 2vw, 14px)",
          fontWeight: "700",
          cursor: "pointer",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          letterSpacing: "1px",
          boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "outlineGlow 3s ease-in-out infinite",
        }}
      >
        ABOUT ME
      </button>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  const navigate = useNavigate();
  
  // Extract project ID from link - handle both "/projects/ggs" and "ggs" formats
  const projectId = product.link.replace(/^\/projects\//, "");

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative flex-shrink-0"
    >
      <button
        onClick={() => navigate(`/projects/${projectId}`)}
        className="block overflow-hidden relative"
        style={{
          width: "clamp(240px, 45vw, 480px)",
          height: "clamp(192px, 36vw, 384px)",
          borderRadius: "20px",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: 0,
          position: "relative",
        }}
      >
        {/* Glare effect - behind image */}
        <div
          className="absolute inset-0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
            borderRadius: "20px",
            zIndex: 1,
          }}
        />
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "20px",
            position: "relative",
            zIndex: 2,
          }}
        />
      </button>
      <h2 
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold transition-opacity duration-300"
        style={{ fontSize: "clamp(12px, 3vw, 18px)" }}
      >
        {product.title}
      </h2>
    </motion.div>
  );
};
