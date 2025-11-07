import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

interface Track {
  name: string;
  artist: string;
  cover: string;
  url: string;
  favorited: boolean;
}

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(240);

  const tracks: Track[] = [
    {
      name: "Midnight Dreams",
      artist: "Luna Echo",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
      url: "https://www.music-platform.com/track/1",
      favorited: false,
    },
    {
      name: "Neon Nights",
      artist: "Cyber Waves",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      url: "https://www.music-platform.com/track/2",
      favorited: false,
    },
    {
      name: "Digital Horizon",
      artist: "Synth Wave",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop",
      url: "https://www.music-platform.com/track/3",
      favorited: false,
    },
  ];

  const currentTrack = tracks[currentTrackIndex];
  const barWidth = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  };

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
          top: "40px",
          left: "40px",
          zIndex: "1000",
        }}
      >
        <motion.button
          onClick={() => navigate("/")}
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
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
          className="grid gap-8 md:gap-16 px-4 md:px-8 py-20 max-w-7xl mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            alignItems: "start",
            paddingTop: "80px",
            paddingBottom: "80px",
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
                  fontSize: "1rem",
                  color: "#ccc",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                A <strong>philomath</strong> with a deep love for long distance travel, live music, and vegan food flavored to perfection.
              </p>

              {/* Skills Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "0px" }}>
                                {["Autonomous", "Empathetic", "Communicative", "Meticulous", "Optimistic", "Reliable", "Self-Aware"].map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#ccc",
                        padding: "6px 12px",
                        borderRadius: "16px",
                        fontSize: "12px",
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
                  whileHover={{ y: -2, scale: 1.05 }}
                  style={{
                    flex: 1,
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "14px 20px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "#ffffff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e: any) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.15)";
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.5)";
                  }}
                  onMouseLeave={(e: any) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.08)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  {btn}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Center Section - Music Player */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(17, 17, 17, 0.9)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                padding: "30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                width: "320px",
                minHeight: "380px",
                boxShadow: "0px 15px 35px -5px rgba(50, 88, 130, 0.32)",
              }}
              whileHover={{ y: -4, borderColor: "rgba(236, 72, 153, 0.3)" }}
            >
              {/* Album Cover */}
              <div style={{ marginBottom: "20px" }}>
                <motion.img
                  key={currentTrackIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  src={currentTrack.cover}
                  alt={currentTrack.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "15px",
                    objectFit: "cover",
                    boxShadow: "0px 10px 40px 0px rgba(236, 72, 153, 0.3)",
                  }}
                />
              </div>

              {/* Album Info */}
              {currentTrack && (
                <motion.div
                  key={`info-${currentTrackIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  style={{
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#ffffff" }}>
                    {currentTrack.artist}
                  </div>
                  <div style={{ fontSize: "14px", color: "#888", lineHeight: "1.3" }}>
                    {currentTrack.name}
                  </div>
                </motion.div>
              )}

              {/* Controls */}
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevTrack}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "24px",
                    padding: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e: any) => {
                    e.target.style.color = "#ec4899";
                  }}
                  onMouseLeave={(e: any) => {
                    e.target.style.color = "#888";
                  }}
                >
                  ⏮
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    background: "rgba(236, 72, 153, 0.2)",
                    border: "1px solid rgba(236, 72, 153, 0.5)",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontSize: "32px",
                    padding: "12px 16px",
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isPlaying ? "⏸" : "▶"}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextTrack}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "24px",
                    padding: "8px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e: any) => {
                    e.target.style.color = "#ec4899";
                  }}
                  onMouseLeave={(e: any) => {
                    e.target.style.color = "#888";
                  }}
                >
                  ⏭
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: "8px" }}>
                <div
                  style={{
                    height: "6px",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    const newTime = ((e.clientX - rect.left) / rect.width) * duration;
                    setCurrentTime(newTime);
                  }}
                >
                  <motion.div
                    animate={{ width: `${barWidth}%` }}
                    transition={{ duration: 0.1 }}
                    style={{
                      height: "100%",
                      background: "linear-gradient(135deg, #ec4899 0%, #6366f1 100%)",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>

              {/* Time Display */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#888" }}>
                <span>{Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, "0")}</span>
                <span>{Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}</span>
              </div>
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
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "24px", color: "#ffffff" }}>
                Latest projects
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
                        gap: "12px",
                        padding: "8px",
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
                          width: "48px",
                          height: "48px",
                          borderRadius: "8px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "2px", color: "#ffffff" }}>
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
          bottom: "20px",
          right: "20px",
          padding: "20px",
          background: "rgba(17, 17, 17, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(236, 72, 153, 0.3)",
          borderRadius: "50px",
          fontSize: "12px",
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
