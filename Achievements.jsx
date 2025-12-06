import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: "Reliance Foundation Scholar",
            cardText: "Reliance Foundation Scholar – Recognized for academic excellence and leadership potential.",
            details: "Awarded the prestigious Reliance Foundation Scholarship for consistently strong academic performance, leadership qualities, and commitment to driving positive social impact through innovation."
        },
        {
            title: "Dakshana Foundation Scholar (2022)",
            cardText: "Dakshana Scholar – Merit-based program for India’s top students.",
            details: "Selected as a Dakshana Foundation Scholar (2022) through a highly competitive merit-based process, receiving advanced academic training and mentorship to excel in engineering entrance examinations. Demonstrated discipline, resilience, and commitment to academic growth."
        },
        {
            title: "Aspire Leaders Program Participant (2025)",
            cardText: "Aspire Leaders Program 2025 Participant – Global leadership development initiative.",
            details: "Selected as a participant in the Aspire Leaders Program 2025, an internationally recognized leadership program designed by Harvard faculty. Engaging with a global network of young changemakers, building leadership, communication, and professional development skills."
        }
    ];

    return (
        <section id="achievements" className="achievements-section">
            <div className="achievements-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    Awards & Achievements
                </motion.h2>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: false }}
                        >
                            <div className="achievement-border" />
                            <div className="achievement-content">
                                <div className="achievement-icon">🏆</div>
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-summary">{achievement.cardText}</p>
                                <div className="achievement-hover-details">
                                    <p>{achievement.details}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
