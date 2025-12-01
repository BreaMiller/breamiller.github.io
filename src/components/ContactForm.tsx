import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  "Select a service",
  "Product Visualization",
  "UI/UX Design",
  "Brand Development",
  "Digital Marketing",
  "Web Development",
  "Creative Consulting",
  "Licensing Inquiry",
  "Custom Project",
  "Feedback",
];

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!scriptUrl) {
        console.error('Google Apps Script URL not configured');
        throw new Error('Form endpoint not configured');
      }

      // Send to Google Apps Script
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          onClose();
        }, 2000);
      } else {
        console.error('Form submission failed');
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 999,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* Modal Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9, y: isOpen ? 0 : 20 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          pointerEvents: isOpen ? "auto" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(17, 17, 17, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "clamp(20px, 5vw, 40px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: "absolute",
              top: "clamp(12px, 3vw, 20px)",
              right: "clamp(12px, 3vw, 20px)",
              width: "clamp(36px, 8vw, 40px)",
              height: "clamp(36px, 8vw, 40px)",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              color: "#ffffff",
              fontSize: "clamp(18px, 5vw, 24px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              overflow: "hidden",
            }}
          >
            {/* Glare sweep effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)" }}
              whileHover={{
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
              }}
              transition={{ duration: 0.5 }}
              style={{
                x: "-100%",
              }}
              animate={{ x: ["100%"] }}
            />
            
            {/* Background glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0), inset 0 0 0px rgba(236, 72, 153, 0)" }}
              whileHover={{ 
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 10px rgba(236, 72, 153, 0.2)",
                background: "rgba(236, 72, 153, 0.1)",
              }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: "none" }}
            />

            {/* Pink border highlight on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ borderColor: "rgba(255, 255, 255, 0.2)", borderWidth: "1px" }}
              whileHover={{ borderColor: "rgba(236, 72, 153, 0.6)" }}
              transition={{ duration: 0.3 }}
              style={{ 
                pointerEvents: "none",
                border: "1px solid",
              }}
            />

            <span className="relative z-10">✕</span>
          </motion.button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: "center",
                padding: "clamp(20px, 5vw, 40px) clamp(10px, 3vw, 20px)",
              }}
            >
              <div style={{ fontSize: "clamp(36px, 10vw, 48px)", marginBottom: "16px" }}>✓</div>
              <h3 style={{ fontSize: "clamp(1.2rem, 4vw, 1.5rem)", fontWeight: "600", marginBottom: "8px", color: "#ffffff" }}>
                Message Sent!
              </h3>
              <p style={{ color: "#888", fontSize: "clamp(13px, 2.5vw, 14px)" }}>Thanks for reaching out. I'll be in touch soon.</p>
            </motion.div>
          ) : (
            <>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
                  fontWeight: "700",
                  marginBottom: "24px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", width: "100%", maxWidth: "600px", margin: "0 auto" }}>
                {/* Name Field */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                  <label style={{ fontSize: "clamp(11px, 2.5vw, 12px)", fontWeight: "600", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "clamp(10px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                      color: "#ffffff",
                      fontSize: "clamp(13px, 2.5vw, 14px)",
                      transition: "all 0.3s ease",
                      outline: "none",
                      width: "100%",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>

                {/* Email Field */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                  <label style={{ fontSize: "clamp(11px, 2.5vw, 12px)", fontWeight: "600", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "clamp(10px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                      color: "#ffffff",
                      fontSize: "clamp(13px, 2.5vw, 14px)",
                      transition: "all 0.3s ease",
                      outline: "none",
                      width: "100%",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(236, 72, 853, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>

                {/* Service Selection Dropdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                  <label style={{ fontSize: "clamp(11px, 2.5vw, 12px)", fontWeight: "600", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Service of Interest
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "clamp(10px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                      color: formData.subject === "" ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
                      fontSize: "clamp(13px, 2.5vw, 14px)",
                      transition: "all 0.3s ease",
                      outline: "none",
                      width: "100%",
                      fontFamily: "inherit",
                      cursor: "pointer",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(236, 72, 153, 0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 10px center",
                      backgroundSize: "20px",
                      paddingRight: "40px",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.4)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    {serviceOptions.map((option) => (
                      <option 
                        key={option} 
                        value={option === "Select a service" ? "" : option}
                        disabled={option === "Select a service"}
                        style={{
                          background: "#1a1a1a",
                          color: "#ffffff",
                        }}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                  <label style={{ fontSize: "clamp(11px, 2.5vw, 12px)", fontWeight: "600", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={4}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "clamp(10px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                      color: "#ffffff",
                      fontSize: "clamp(13px, 2.5vw, 14px)",
                      transition: "all 0.3s ease",
                      outline: "none",
                      fontFamily: "inherit",
                      resize: "none",
                      width: "100%",
                    }}
                    onFocus={(e: any) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.4)";
                    }}
                    onBlur={(e: any) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    padding: "18px 18px",
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "400px",
                    height: "60px",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
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
                    marginTop: "8px",
                    opacity: loading ? 0.7 : 1,
                  } as any}
                  onMouseEnter={(e: any) => {
                    if (!loading) {
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(236, 72, 853, 0.5)";
                      e.currentTarget.style.background = "rgba(236, 72, 853, 0.05)";
                    }
                  }}
                  onMouseLeave={(e: any) => {
                    if (!loading) {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(236, 72, 853, 0.2)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
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
                  {/* Border highlight on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "20px",
                      border: "1px solid rgba(236, 72, 153, 0.4)",
                      pointerEvents: "none",
                    }}
                  />

                  <span className="relative z-10">{loading ? "SENDING..." : "SEND MESSAGE"}</span>
                </motion.button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};
