"use client";

import { motion } from "framer-motion";

interface CircularProgressProps {
    value: number; // 0 to 100
    label: string;
    sublabel?: string;
}

export function CircularProgress({ value, label, sublabel }: CircularProgressProps) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-32 h-32">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="transparent"
                        className="text-gray-100"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="transparent"
                        strokeLinecap="round"
                        className="text-primary"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">{value}%</span>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="font-semibold">{label}</p>
                {sublabel && <p className="text-sm text-subtext">{sublabel}</p>}
            </div>
        </div>
    );
}
