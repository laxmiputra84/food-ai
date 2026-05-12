"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChefHat, Clock, Star, Play, TrendingUp, Users, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

export default function HomePage() {
  const [activeUsers, setActiveUsers] = useState(1243);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trendingFoods = [
    { id: 1, name: "Truffle Mushroom Pasta", category: "Italian", price: 540 },
    { id: 2, name: "Dragon Roll Sushi", category: "Japanese", price: 720 },
    { id: 3, name: "Spicy Paneer Tikka", category: "Indian", price: 380 },
    { id: 4, name: "Classic Beef Burger", category: "American", price: 490 },
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Decorative Background Elements */}
      <div className="blob" style={{ top: "-10%", right: "-10%", width: "800px", height: "800px" }} />
      <div className="blob" style={{ bottom: "20%", left: "-10%", width: "600px", height: "600px", animationDelay: "-10s" }} />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={styles.heroImageContainer}
        >
          <img src="/images/hero.png" alt="Gourmet Hero" style={styles.heroImage} className="animate-premium-float" />
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={styles.liveBadge}
            className="glass"
          >
            <div style={styles.pulseDot} />
            <span>{activeUsers} people ordering now</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.heroBadge}
          className="glass"
        >
          <Sparkles size={16} />
          <span>Voted #1 AI Food Experience 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={styles.title}
          className="gradient-text"
        >
          The Future of Taste <br />
          Is Already Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={styles.subtitle}
        >
          Stop browsing. Start dreaming. Our neural networks learn your cravings to deliver hyper-accurate flavor matches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={styles.btnGroup}
        >
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,102,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn}
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </Link>

          <Link href="/recommend">
            <motion.button
              whileHover={{ scale: 1.05, background: "var(--muted)" }}
              whileTap={{ scale: 0.95 }}
              style={styles.secondaryBtn}
              className="glass"
            >
              <div style={styles.playIcon}><Play size={14} fill="currentColor" /></div>
              <span>See AI in Action</span>
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Trending Section */}
      <section style={styles.trendingSection}>
        <div style={styles.sectionHeader}>
          <div className="flex items-center gap-2">
            <TrendingUp size={24} color="var(--primary)" />
            <h2 style={styles.sectionTitle}>Trending Now</h2>
          </div>
          <Link href="/menu" style={styles.viewAll}>View full menu</Link>
        </div>
        
        <div style={styles.horizontalScroll} className="hide-scrollbar">
          {trendingFoods.map((food, idx) => (
            <motion.div 
              key={food.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={styles.scrollItem}
            >
              <FoodCard food={food} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Stats */}
      <section style={styles.statsSection}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.statsRow}
          className="glass"
        >
          <StatBox icon={<Users size={20} />} count="500k+" label="Satisfied Foodies" />
          <div style={styles.statDivider} />
          <StatBox icon={<Star size={20} />} count="4.95" label="Average Rating" />
          <div style={styles.statDivider} />
          <StatBox icon={<Heart size={20} />} count="98%" label="Recommendation Accuracy" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section style={styles.featuresGrid}>
        <FeatureItem 
          icon={<ChefHat size={32} />} 
          title="Curated Masters" 
          desc="Only elite-tier chefs and restaurants that meet our 45-point quality checklist."
          delay={0.2}
        />
        <FeatureItem 
          icon={<Clock size={32} />} 
          title="Precision Delivery" 
          desc="Our routing AI guarantees your meal arrives at the optimal consumption temperature."
          delay={0.4}
        />
        <FeatureItem 
          icon={<Sparkles size={32} />} 
          title="Taste Profile" 
          desc="The more you explore, the more precise your flavor fingerprint becomes."
          delay={0.6}
        />
      </section>
    </div>
  );
}

function StatBox({ icon, count, label }: { icon: React.ReactNode, count: string, label: string }) {
  return (
    <div style={styles.statBox}>
      <div className="flex items-center gap-3 mb-2">
        <div style={styles.statIcon}>{icon}</div>
        <h4 style={styles.statCount}>{count}</h4>
      </div>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );
}

function FeatureItem({ icon, title, desc, delay }: { icon: React.ReactNode; title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
      style={styles.featureCard}
      className="glass hover-lift"
    >
      <div style={styles.featureIconContainer}>
        {icon}
      </div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureDesc}>{desc}</p>
    </motion.div>
  );
}

const styles = {
  pageWrapper: {
    padding: "0 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative" as const,
    overflow: "hidden",
  },
  heroSection: {
    padding: "80px 0 120px 0",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  heroImageContainer: {
    marginBottom: "50px",
    width: "100%",
    maxWidth: "450px",
    position: "relative" as const,
  },
  heroImage: {
    width: "100%",
    borderRadius: "50px",
    boxShadow: "0 30px 60px -15px rgba(255,102,0,0.5)",
  },
  liveBadge: {
    position: "absolute" as const,
    bottom: "20px",
    right: "-30px",
    padding: "12px 20px",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    fontWeight: "700",
    zIndex: 10,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  pulseDot: {
    width: "10px",
    height: "10px",
    background: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 10px #22c55e",
    animation: "pulse 2s infinite",
  },
  heroBadge: {
    padding: "10px 24px",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: "800",
    color: "var(--primary)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
    border: "1px solid var(--glass-border)",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
  },
  title: {
    fontSize: "clamp(3.5rem, 12vw, 6rem)",
    fontWeight: "900",
    lineHeight: "0.9",
    letterSpacing: "-3px",
    marginBottom: "30px",
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "var(--muted-foreground)",
    maxWidth: "700px",
    marginBottom: "50px",
    lineHeight: "1.6",
    fontWeight: "500",
  },
  btnGroup: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  primaryBtn: {
    padding: "22px 50px",
    fontSize: "1.1rem",
    background: "var(--primary)",
    color: "white",
    border: "none",
    borderRadius: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "800",
    boxShadow: "0 15px 30px -5px rgba(255,102,0,0.4)",
  },
  secondaryBtn: {
    padding: "22px 45px",
    fontSize: "1.1rem",
    background: "var(--glass-bg)",
    color: "var(--foreground)",
    border: "1px solid var(--glass-border)",
    borderRadius: "24px",
    cursor: "pointer",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  playIcon: {
    width: "32px",
    height: "32px",
    background: "var(--foreground)",
    color: "var(--background)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "3px",
  },
  trendingSection: {
    padding: "60px 0",
    marginBottom: "100px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    padding: "0 10px",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "900",
    margin: 0,
    letterSpacing: "-1px",
  },
  viewAll: {
    color: "var(--primary)",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "1.1rem",
  },
  horizontalScroll: {
    display: "flex",
    gap: "30px",
    overflowX: "auto" as const,
    padding: "20px 10px 40px 10px",
    margin: "0 -10px",
  },
  scrollItem: {
    flex: "0 0 auto",
    width: "300px",
  },
  statsSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "120px",
  },
  statsRow: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    padding: "40px 80px",
    borderRadius: "40px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  statBox: {
    textAlign: "left" as const,
  },
  statIcon: {
    color: "var(--primary)",
    background: "rgba(255,102,0,0.1)",
    padding: "8px",
    borderRadius: "12px",
  },
  statCount: {
    fontSize: "2.2rem",
    fontWeight: "900",
    margin: 0,
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "15px",
    color: "var(--muted-foreground)",
    fontWeight: "600",
    margin: 0,
  },
  statDivider: {
    width: "1px",
    height: "50px",
    background: "var(--border)",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    padding: "80px 0 150px 0",
  },
  featureCard: {
    padding: "60px 50px",
    borderRadius: "48px",
    position: "relative" as const,
  },
  featureIconContainer: {
    width: "80px",
    height: "80px",
    background: "rgba(255,102,0,0.1)",
    color: "var(--primary)",
    borderRadius: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "35px",
  },
  featureTitle: {
    fontSize: "1.8rem",
    fontWeight: "900",
    marginBottom: "20px",
    letterSpacing: "-0.5px",
  },
  featureDesc: {
    color: "var(--muted-foreground)",
    lineHeight: "1.8",
    fontSize: "1.15rem",
    margin: 0,
  }
};