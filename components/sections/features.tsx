"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Smartphone, Globe, Lock } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-primary" />,
        title: "Lightning Fast",
        description: "Built on modern architecture ensuring your dashboard loads in milliseconds.",
    },
    {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Enterprise Security",
        description: "Bank-grade encryption and SOC2 compliance out of the box.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-primary" />,
        title: "Advanced Analytics",
        description: "Deep dive into your data with custom filters, segments, and cohorts.",
    },
    {
        icon: <Smartphone className="w-6 h-6 text-primary" />,
        title: "Mobile Optimized",
        description: "Access your dashboard from anywhere with our responsive design.",
    },
    {
        icon: <Globe className="w-6 h-6 text-primary" />,
        title: "Global Reach",
        description: "Deploy to edge networks globally for low latency worldwide.",
    },
    {
        icon: <Lock className="w-6 h-6 text-primary" />,
        title: "Role-Based Access",
        description: "Granular permissions system for your entire organization.",
    },
];

export function Features() {
    return (
        <section className="py-20 md:py-32 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Features
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Built for scale.</h2>
                    <p className="text-subtext text-lg md:text-xl max-w-2xl mx-auto">Everything you need to grow your business, packaged in a beautiful interface.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-surface-hover border border-black/5 hover:shadow-card transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-black/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-subtext leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
