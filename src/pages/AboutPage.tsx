import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "#ffffff",
        position: "relative",
      }}
    >
      {/* Pink light glow background effect */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.08) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          position: "fixed",
          top: "clamp(20px, 5vw, 40px)",
          left: "clamp(20px, 5vw, 40px)",
          zIndex: "1000",
        }}
      >
        <motion.button
          onClick={() => navigate("/")}
          style={{
            position: "relative",
            width: "clamp(40px, 10vw, 50px)",
            height: "clamp(40px, 10vw, 50px)",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "clamp(14px, 4vw, 18px)",
            color: "#ffffff",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
          onMouseEnter={(e: any) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.5)";
          }}
          onMouseLeave={(e: any) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
          whileHover={{
            scale: 1.1,
            y: -2,
          }}
        >
          ←
          {/* Glare effect on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        </motion.button>
      </motion.div>

      <motion.div
        style={{ position: "relative", zIndex: 1 }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="grid gap-6 sm:gap-8 md:gap-16 px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            alignItems: "start",
            paddingTop: "clamp(60px, 10vw, 80px)",
            paddingBottom: "clamp(60px, 10vw, 80px)",
          }}
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-10">
            {/* Profile Image */}
            <motion.div variants={imageVariants} style={{ position: "relative" }}>
              <div
                style={{
                  width: "clamp(250px, 100%, 400px)",
                  height: "clamp(375px, 150%, 600px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="https://i.imgur.com/0E3HLMf.png"
                  alt="Brea Miller"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scaleX(-1)",
                  }}
                />
              </div>
              <h1
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "20px",
                  fontSize: "clamp(1.5rem, 5vw, 3rem)",
                  fontWeight: "800",
                  margin: 0,
                  color: "#ffffff",
                  lineHeight: 1,
                  zIndex: 2,
                }}
              >
                Hi!
              </h1>
              <h2
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  fontSize: "clamp(1.5rem, 5vw, 3rem)",
                  fontWeight: "800",
                  margin: 0,
                  background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  zIndex: 2,
                }}
              >
                I'm Brea,
              </h2>
            </motion.div>

            {/* Text Section */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  color: "#ccc",
                  marginBottom: "16px",
                  lineHeight: "1.6",
                }}
              >
                A <strong>philomath</strong> with a deep love for long distance travel, live music, and vegan food flavored to perfection.
              </p>

              {/* Skills Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "0px" }}>
                                {["Autonomous", "Empathetic", "Communicative", "Meticulous", "Optimistic", "Reliable", "Self-Aware"].map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ccc",
                        padding: "4px 8px",
                        borderRadius: "16px",
                        fontSize: "clamp(10px, 1.5vw, 12px)",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e: any) => {
                        e.target.style.borderColor = "rgba(236, 72, 153, 0.5)";
                        e.target.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e: any) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.target.style.color = "#ccc";
                      }}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              style={{
                background: "rgba(17, 17, 17, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.background = "rgba(17, 17, 17, 0.9)";
                e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.background = "rgba(17, 17, 17, 0.8)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "4px", color: "#ffffff" }}>
                  Willing to Relocate
                </h3>
                <p style={{ color: "#888", fontSize: "12px" }}>Remote Worldwide • Available 24/7</p>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "120px",
                  height: "80px",
                  background: "linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(34, 34, 34, 0.8) 100%)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(236, 72, 153, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ fontSize: "40px" }}
                >
                  🌑
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
                    borderRadius: "50%",
                    boxShadow: "0 0 12px rgba(236, 72, 153, 0.8), 0 0 24px rgba(236, 72, 153, 0.4)",
                  }}
                />
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "12px" }}>
              {["Skills", "Military Service"].map((btn) => (
                <motion.button
                  key={btn}
                  whileHover={{ 
                    y: -2, 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: btn === "Skills" ? "rgba(236, 72, 153, 0.1)" : "transparent",
                    border: btn === "Skills" ? "none" : ".5px solid #ec4899",
                    padding: "18px 18px",
                    borderRadius: "20px",
                    width: "140px",
                    height: "60px",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#ffffff",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    maxWidth: "400px",
                    boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {btn}
                  {/* Glare effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                      borderRadius: "20px",
                      pointerEvents: "none",
                    }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Social Grid & Projects */}
          <motion.div variants={itemVariants} className="flex flex-col gap-10">
            {/* Social Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                [
                  "https://staging-jubilee.flickr.com/1402/5113842599_2951bcf168_c.jpg",
                  "https://staging-jubilee.flickr.com/1200/5114444986_7a008975f1_k.jpg",
                  "https://staging-jubilee.flickr.com/7127/7487103836_621fb68cc0_k.jpg",
                ],
                [
                  "https://staging-jubilee.flickr.com/4142/4869514841_b75c0b306d_h.jpg",
                  "https://staging-jubilee.flickr.com/4117/4870162496_ffb2b22356_h.jpg",
                  "https://staging-jubilee.flickr.com/4141/4870220206_cac8503c8f_c.jpg",
                ],
                [
                  "https://staging-jubilee.flickr.com/4142/4800552773_7c232b4e1f_h.jpg",
                  "https://staging-jubilee.flickr.com/4099/4801187606_e14235d3d5_k.jpg",
                  "https://staging-jubilee.flickr.com/4082/4800554063_862c46f5f4_c.jpg",
                ],
                [
                  "https://staging-jubilee.flickr.com/4118/4870060634_1b5e50a944_c.jpg",
                  "https://staging-jubilee.flickr.com/4119/4801125178_241eabfc87_h.jpg",
                  "https://staging-jubilee.flickr.com/5289/5299996940_93e17e1a46_k.jpg",
                ],
              ].map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                  {row.map((src, imgIndex) => (
                    <motion.a
                      key={`${rowIndex}-${imgIndex}`}
                      href="#"
                      whileHover={{ scale: 1.05, y: -3 }}
                      style={{
                        width: "88px",
                        height: "88px",
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e: any) => {
                        e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={src}
                        alt="Gallery"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "14px",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </motion.a>
                  ))}
                </div>
              ))}
            </div>

            {/* Latest Projects */}
            <motion.div variants={itemVariants}>
              <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: "600", marginBottom: "16px", color: "#ffffff" }}>
                Latest projects
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { id: "ggs", name: "Good Games", img: "https://i.imgur.com/I23nYjZ.png?auto=compress&cs=tinysrgb&w=400" },
                  { id: "geneproof2", name: "GeneProof 2.0", img: "https://i.imgur.com/UOf7fcX.png?auto=compress&cs=tinysrgb&w=400" },
                  { id: "altamed", name: "AltaMed", img: "https://i.imgur.com/PLb6nM4.png?auto=compress&cs=tinysrgb&w=400" },
                  { id: "civic-social", name: "Civic Social", img: "https://i.imgur.com/zOAd5qr.png?auto=compress&cs=tinysrgb&w=400" },
                  { id: "baraka", name: "Baraka", img: "https://i.imgur.com/2hBPNJ7.png?auto=compress&cs=tinysrgb&w=400" },
                ].map((project) => (
                  <Link key={project.id} to={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "6px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        background: "transparent",
                      }}
                      onMouseEnter={(e: any) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.border = "1px solid rgba(236, 72, 153, 0.3)";
                      }}
                      onMouseLeave={(e: any) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.border = "none";
                      }}
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", fontWeight: "600", marginBottom: "2px", color: "#ffffff" }}>
                          {project.name}
                        </div>
                      </div>
                      <div style={{ color: "#888", fontSize: "12px" }}>→</div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* View Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "fixed",
          bottom: "clamp(12px, 3vw, 20px)",
          right: "clamp(12px, 3vw, 20px)",
          padding: "clamp(14px, 3vw, 20px)",
          background: "rgba(17, 17, 17, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(236, 72, 153, 0.3)",
          borderRadius: "50px",
          fontSize: "clamp(10px, 2vw, 12px)",
          fontWeight: "600",
          color: "#ec4899",
          zIndex: "1000",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          cursor: "pointer",
        }}
        whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(236, 72, 153, 0.2)" }}
      >
        Views: <span>42</span>
      </motion.div>
    </div>
  );
};
