import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineEye } from 'react-icons/ai';
import { projectsData } from '../projectsData';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Project not found</h1>
          <motion.button
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "18px 28px",
              background: "rgba(236, 72, 153, 0.1)",
              border: "1px solid rgba(236, 72, 153, 0.3)",
              borderRadius: "20px",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(236, 72, 153, 0.2)",
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.background = "rgba(236, 72, 853, 0.2)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(236, 72, 153, 0.4)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.6)";
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.background = "rgba(236, 72, 153, 0.1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(236, 72, 153, 0.2)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
            }}
          >
            Back to Home
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
        </motion.div>
      </div>
    );
  }

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

  // Group images by size for layout
  const largeImages = project.images.filter((img) => img.size === "large");
  const mediumImages = project.images.filter((img) => img.size === "medium");

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
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px) clamp(30px, 8vw, 60px)",
          }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(2rem, 7vw, 4rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              background: "linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
              fontWeight: "400",
              color: "#aaa",
              marginBottom: "16px",
              lineHeight: "1.6",
              maxWidth: "600px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #6366f1 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "600",
              }}
            >
              ✐ᝰ {project.subtitle}
            </span>
          </motion.p>

          {project.tagline && (
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "0.95rem",
                color: "#666",
                marginBottom: "40px",
                fontStyle: "italic",
              }}
            >
              {project.tagline}
            </motion.p>
          )}
        </motion.section>

        {/* Images Section */}
        <motion.section
          variants={itemVariants}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 40px) clamp(40px, 8vw, 80px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(30px, 8vw, 60px)",
          }}
        >
          {/* Large Images */}
          {largeImages.map((image, index) => (
            <motion.div
              key={`large-${index}`}
              variants={imageVariants}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "16 / 9",
                background: "rgba(17, 17, 17, 0.5)",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.includes('.mp4') ? (
                <video
                  src={image.src}
                  autoPlay
                  loop
                  muted
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    backgroundColor: "#000",
                  }}
                />
              ) : (
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}

          {/* Medium Images Grid */}
          {mediumImages.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mediumImages.length === 1 ? "1fr" : window.innerWidth < 768 ? "1fr" : "repeat(2, 1fr)",
                gap: "clamp(20px, 5vw, 40px)",
              }}
            >
              {mediumImages.map((image, index) => (
                <motion.div
                  key={`medium-${index}`}
                  variants={imageVariants}
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    aspectRatio: "1 / 1",
                    background: "rgba(17, 17, 17, 0.5)",
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  {image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.includes('.mp4') ? (
                    <video
                      src={image.src}
                      autoPlay
                      loop
                      muted
                      controls
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px",
                        backgroundColor: "#000",
                      }}
                    />
                  ) : (
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px",
                      }}
                      loading="lazy"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Project Info Section */}
        <motion.section
          variants={itemVariants}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 60px) clamp(16px, 5vw, 40px)",
            display: "grid",
            gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "2fr 1fr",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Description */}
          <motion.div variants={itemVariants}>
            <h2
              style={{
                fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              Project Overview
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                color: "#bbb",
                lineHeight: "1.8",
                marginBottom: "32px",
                whiteSpace: "pre-wrap",
                fontStyle: project.id === "who-we-are" ? "italic" : "normal",
              }}
            >
              {project.overview}
            </p>

            <p
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "#999",
                lineHeight: "1.6",
              }}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {project.role && (
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(17, 17, 17, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "8px", textTransform: "uppercase" }}>
                  Role
                </p>
                <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#ffffff" }}>
                  {project.role}
                </p>
              </motion.div>
            )}

            {project.year && (
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(17, 17, 17, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "8px", textTransform: "uppercase" }}>
                  Year
                </p>
                <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#ffffff" }}>
                  {project.year}
                </p>
              </motion.div>
            )}

            {project.tools && project.tools.length > 0 && (
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  background: "rgba(17, 17, 17, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.3s ease",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "12px", textTransform: "uppercase" }}>
                  Tools & Tech
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        background: "rgba(236, 72, 153, 0.1)",
                        border: "1px solid rgba(236, 72, 153, 0.3)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        color: "#ec4899",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        {/* Closing Text Section - Only for Who We Are */}
        {project.id === "who-we-are" && (
          <motion.section
            variants={itemVariants}
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "clamp(40px, 8vw, 60px) clamp(16px, 5vw, 40px)",
              borderTop: "1px solid rgba(236, 72, 153, 0.2)",
              borderBottom: "1px solid rgba(236, 72, 153, 0.2)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#bbb",
                lineHeight: "1.8",
                fontStyle: "italic",
                fontWeight: "400",
              }}
            >
              Vitruvian Love - a study of the ideal proportions of love as a microcosm of the universe.
            </p>
          </motion.section>
        )}

        {/* Back to Home Button */}
        <motion.section
          variants={itemVariants}
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "clamp(40px, 8vw, 60px) clamp(16px, 5vw, 40px) clamp(60px, 10vw, 100px)",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              padding: "18px 18px",
              borderRadius: "20px",
              width: "140px",
              height: "60px",
              fontSize: "clamp(11px, 2vw, 14px)",
              fontWeight: "700",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              animation: "outlineGlow 3s ease-in-out infinite",
              transition: "all 0.3s ease",
              maxWidth: "400px",
            }}
            onMouseEnter={(e: any) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 0 40px rgba(236, 72, 153, 0.4)";
              e.target.style.background = "rgba(236, 72, 153, 0.1)";
            }}
            onMouseLeave={(e: any) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 0 20px rgba(236, 72, 153, 0.2)";
              e.target.style.background = "transparent";
            }}
          >
            BACK TO HOME
          </motion.button>

          {/* Visit Project Button - Using visitUrl/visitLabel if available, otherwise use url */}
          {(project.visitUrl || project.url) && (
            <motion.a
              href={project.visitUrl || project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "transparent",
                border: ".5px solid #ec4899",
                color: "#ffffff",
                padding: "16px 18px",
                borderRadius: "20px",
                width: "140px",
                height: "60px",
                fontSize: "clamp(11px, 2vw, 14px)",
                fontWeight: "700",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(236, 72, 153, 0.5)";
                e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.8)";
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(236, 72, 153, 0.2)";
                e.currentTarget.style.borderColor = "#ec4899";
              }}
            >
              {project.visitLabel || `VISIT ${project.title.toUpperCase()}`}
            </motion.a>
          )}
        </motion.section>
      </motion.div>

      {/* View Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 16px",
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
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(236, 72, 153, 0.2)" }}
      >
        <AiOutlineEye size={16} />
        <span>1</span>
      </motion.div>
    </div>
  );
};
