"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        description: "Perfect for individuals and small projects.",
        price: "$19",
        features: ["Up to 1,000 MAU", "Basic Analytics", "Community Support", "1 Custom Domain", "Standard Integrations"],
        highlighted: false,
        buttonText: "Start Free Trial",
    },
    {
        name: "Pro",
        description: "Ideal for growing startups and teams.",
        price: "$49",
        features: ["Up to 10,000 MAU", "Advanced Analytics", "Priority Support", "5 Custom Domains", "Premium Integrations", "Custom Reports"],
        highlighted: true,
        buttonText: "Join Pro",
        tag: "Most Popular",
    },
    {
        name: "Enterprise",
        description: "For large organizations with complex needs.",
        price: "$199",
        features: ["Unlimited MAU", "Custom Analytics", "24/7 Phone Support", "Unlimited Domains", "Custom API Access", "Dedicated Success Manager"],
        highlighted: false,
        buttonText: "Contact Sales",
    },
];

export function Pricing() {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="py-20 md:py-32 bg-background relative" id="pricing">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Pricing
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple, transparent pricing.</h2>
                    <p className="text-subtext text-lg md:text-xl max-w-2xl mx-auto mb-12">Choose the perfect plan for your business needs.</p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={cn("text-sm font-semibold transition-colors", !annual ? "text-primary" : "text-subtext")}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="w-16 h-8 bg-black/5 rounded-full p-1 relative transition-colors duration-300 hover:bg-black/10 flex items-center inset-y-0"
                        >
                            <motion.div
                                className="w-6 h-6 bg-primary rounded-full shadow-md"
                                animate={{ x: annual ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={cn("text-sm font-semibold flex items-center gap-2 transition-colors", annual ? "text-primary" : "text-subtext")}>
                            Annually <span className="bg-success/20 text-success text-xs px-2.5 py-0.5 rounded-full font-bold shadow-sm">Save 20%</span>
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={cn(
                                "relative rounded-3xl p-8 bg-surface border transition-all duration-300 flex flex-col h-full",
                                plan.highlighted
                                    ? "border-primary shadow-hover md:scale-105 z-10 py-10"
                                    : "border-black/5 shadow-card hover:shadow-hover hover:-translate-y-2 z-0"
                            )}
                        >
                            {plan.tag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                    {plan.tag}
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                            <p className="text-subtext text-sm mb-6 h-10">{plan.description}</p>
                            <div className="mb-8">
                                <span className="text-5xl font-extrabold">{plan.price}</span>
                                <span className="text-subtext font-medium">/mo</span>
                                {annual && <p className="text-xs text-subtext mt-2 font-medium">Billed annually</p>}
                            </div>
                            <button
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold text-sm transition-transform duration-200 hover:scale-105 active:scale-95 mb-8",
                                    plan.highlighted ? "bg-primary text-white shadow-md" : "bg-surface-hover text-foreground hover:bg-black/5 border border-black/5"
                                )}
                            >
                                {plan.buttonText}
                            </button>
                            <ul className="flex flex-col gap-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
