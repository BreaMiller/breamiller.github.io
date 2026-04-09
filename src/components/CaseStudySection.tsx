import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectData } from '../projectsData';

interface CaseStudySectionProps {
  project: ProjectData;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      style={{ width: '100%' }}
    >
      {/* Typography Section */}
      {project.typography && (
        <motion.section variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Typography System
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {project.typography.primary && (
              <div
                style={{
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 style={{ color: '#EC4899', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Primary
                </h3>
                <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500', margin: '0 0 5px 0' }}>
                  {project.typography.primary.name}
                </p>
                <p style={{ color: '#A0A0A0', fontSize: '13px', margin: '0' }}>
                  {project.typography.primary.fallback}
                </p>
              </div>
            )}
            {project.typography.secondary && (
              <div
                style={{
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h3 style={{ color: '#EC4899', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Secondary
                </h3>
                <p style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500', margin: '0 0 5px 0' }}>
                  {project.typography.secondary.name}
                </p>
                <p style={{ color: '#A0A0A0', fontSize: '13px', margin: '0' }}>
                  {project.typography.secondary.fallback}
                </p>
              </div>
            )}
          </div>
          {project.typography.sizes && (
            <div style={{ marginTop: '20px' }}>
              <h4 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '16px', fontWeight: '600' }}>
                Size Scale
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
                {Object.entries(project.typography.sizes).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      padding: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderRadius: '8px',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <p style={{ color: '#A0A0A0', fontSize: '12px', margin: '0 0 5px 0', textTransform: 'uppercase' }}>
                      {key}
                    </p>
                    <p style={{ color: '#ffffff', fontSize: '13px', margin: '0', fontFamily: 'monospace' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      )}

      {/* Color Palette Section */}
      {project.colorPalette && project.colorPalette.length > 0 && (
        <motion.section variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Color Palette
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {project.colorPalette.map((color, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '120px',
                    background: color.hex,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                />
                <div style={{ padding: '15px' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                    {color.name}
                  </h4>
                  <p style={{ color: '#A0A0A0', margin: '0 0 5px 0', fontSize: '12px', fontFamily: 'monospace' }}>
                    {color.hex}
                  </p>
                  {color.rgb && (
                    <p style={{ color: '#A0A0A0', margin: '0 0 8px 0', fontSize: '12px', fontFamily: 'monospace' }}>
                      rgb({color.rgb})
                    </p>
                  )}
                  <p style={{ color: '#EC4899', margin: '0', fontSize: '13px' }}>
                    {color.usage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Problem, Process, Solution Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px',
        }}
      >
        {project.problem && (
          <motion.div variants={itemVariants}>
            <div
              style={{
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
                borderLeft: '4px solid #EF4444',
                borderRadius: '8px',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              <h3 style={{ color: '#EF4444', marginBottom: '15px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                The Problem
              </h3>
              <p style={{ color: '#ffffff', lineHeight: '1.6', margin: '0', fontSize: '15px' }}>
                {project.problem}
              </p>
            </div>
          </motion.div>
        )}

        {project.solution && (
          <motion.div variants={itemVariants}>
            <div
              style={{
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                borderLeft: '4px solid #10B981',
                borderRadius: '8px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <h3 style={{ color: '#10B981', marginBottom: '15px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                The Solution
              </h3>
              <p style={{ color: '#ffffff', lineHeight: '1.6', margin: '0', fontSize: '15px' }}>
                {project.solution}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Process Section */}
      {project.process && (
        <motion.section variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Design & Development Process
          </h2>
          <div
            style={{
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              lineHeight: '1.8',
            }}
          >
            <p style={{ color: '#ffffff', fontSize: '15px', margin: '0' }}>
              {project.process}
            </p>
          </div>
        </motion.section>
      )}

      {/* User Research Section */}
      {project.userResearch && (
        <motion.section variants={itemVariants} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            User Research & Insights
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {project.userResearch.methods && (
              <div
                style={{
                  padding: '20px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <h4 style={{ color: '#6366F1', marginBottom: '10px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>
                  Research Methods
                </h4>
                <ul style={{ margin: '0', paddingLeft: '20px', color: '#ffffff', fontSize: '14px' }}>
                  {project.userResearch.methods.map((method, i) => (
                    <li key={i} style={{ marginBottom: '5px' }}>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.userResearch.targetAudience && (
              <div
                style={{
                  padding: '20px',
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '12px',
                }}
              >
                <h4 style={{ color: '#EC4899', marginBottom: '10px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' }}>
                  Target Audience
                </h4>
                <p style={{ margin: '0', color: '#ffffff', fontSize: '14px', lineHeight: '1.5' }}>
                  {project.userResearch.targetAudience}
                </p>
              </div>
            )}
          </div>
          {project.userResearch.keyInsights && project.userResearch.keyInsights.length > 0 && (
            <div>
              <h4 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '15px', fontWeight: '600' }}>
                Key Insights
              </h4>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '10px',
                  margin: '0',
                  paddingLeft: '0',
                  listStyle: 'none',
                }}
              >
                {project.userResearch.keyInsights.map((insight, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '12px 15px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: '#22C55E', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.section>
      )}
    </motion.div>
  );
};
