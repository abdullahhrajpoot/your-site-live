"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto px-6 md:px-12 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                    Introducing Alytics 2.0
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
                    The perfect SaaS dashboard starts <span className="text-primary">here.</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-subtext mb-12 max-w-2xl mx-auto leading-relaxed">
                    Unlock powerful analytics, stunning visualizations, and deep insights with our beautifully designed platform. Built for modern teams.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:shadow-hover hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                        Start for free <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="#demo" className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border border-black/10 rounded-full font-medium text-lg hover:bg-surface-hover transition-colors flex items-center justify-center">
                        Book a Demo
                    </Link>
                </motion.div>
            </motion.div>

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
