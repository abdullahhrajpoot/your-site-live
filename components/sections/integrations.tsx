"use client";

import { motion } from "framer-motion";

const integrationLogos = [
    "Slack", "GitHub", "Linear", "Figma", "Notion", "Raycast", "Vercel", "Stripe", "Intercom", "MongoDB"
];

export function Integrations() {
    return (
        <section className="py-20 bg-background overflow-hidden relative border-t border-b border-black/5" id="integrations">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none w-full h-full" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center relative z-20">
                <p className="text-subtext font-semibold text-sm tracking-widest uppercase">Trusted by forward-thinking teams integrating</p>
            </div>
            <div className="flex gap-8 whitespace-nowrap px-4 w-[200%]">
                <motion.div
                    className="flex gap-8 min-w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {/* Duplicate array for seamless looping */}
                    {[...integrationLogos, ...integrationLogos, ...integrationLogos, ...integrationLogos].map((logo, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 bg-white rounded-2xl shadow-sm border border-black/5 text-lg font-bold text-foreground/80 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer min-w-[200px]"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
