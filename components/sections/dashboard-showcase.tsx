"use client";

import { motion } from "framer-motion";
import { AreaChart } from "@/components/dashboard/area-chart";
import { CircularProgress } from "@/components/dashboard/circular-progress";
import { CustomerList } from "@/components/dashboard/customer-list";
import { ArrowUpRight, Users, CreditCard } from "lucide-react";

export function DashboardShowcase() {
    return (
        <section className="py-20 md:py-32 bg-background relative" id="dashboard">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need.</h2>
                    <p className="text-subtext text-lg md:text-xl max-w-2xl mx-auto">A beautifully simple, incredibly powerful dashboard designed to give you clarity and confidence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Chart - Spans 2 columns */}
                    <motion.div
                        className="md:col-span-2 bg-surface rounded-3xl p-6 md:p-8 shadow-card border border-black/5 hover:shadow-hover transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 mb-8">
                            <div>
                                <h3 className="text-xl font-bold">Total Revenue</h3>
                                <p className="text-subtext text-sm">Monthly recurring revenue (MRR)</p>
                            </div>
                            <div className="flex items-center gap-1 text-success bg-success/10 px-3 py-1.5 rounded-full text-sm font-semibold">
                                <ArrowUpRight className="w-4 h-4" />
                                <span>+12.5%</span>
                            </div>
                        </div>
                        <AreaChart />
                    </motion.div>

                    {/* Quick Stats - Spans 1 column */}
                    <motion.div
                        className="md:col-span-1 bg-surface rounded-3xl p-6 md:p-8 shadow-card border border-black/5 hover:shadow-hover transition-shadow duration-300 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-6">Goals & Activity</h3>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-surface-hover p-4 rounded-2xl border border-black/5">
                                    <Users className="w-5 h-5 text-primary mb-3" />
                                    <p className="text-2xl font-black">2.4k</p>
                                    <p className="text-xs text-subtext mt-1 font-medium">Active Users</p>
                                </div>
                                <div className="bg-surface-hover p-4 rounded-2xl border border-black/5">
                                    <CreditCard className="w-5 h-5 text-primary mb-3" />
                                    <p className="text-2xl font-black">18k</p>
                                    <p className="text-xs text-subtext mt-1 font-medium">Transactions</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-black/5 pt-6 flex-1 flex flex-col justify-center">
                            <CircularProgress value={84} label="Quarterly Goal" sublabel="On track to hit Q3 targets" />
                        </div>
                    </motion.div>

                    {/* Upgrade Card - Spans 1 column horizontally, but let's make it 2 and 1 */}
                    <motion.div
                        className="md:col-span-1 bg-primary text-white rounded-3xl p-6 md:p-8 shadow-card flex flex-col justify-between relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">Upgrade to Pro</h3>
                            <p className="text-white/80 text-sm mb-8 leading-relaxed">Unlock advanced reporting, custom domains, and priority 24/7 support.</p>
                            <button className="bg-white text-primary px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all duration-200 shadow-md">
                                Upgrade Now
                            </button>
                        </div>
                        {/* Animated background blob */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors duration-500" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/40 rounded-full blur-2xl group-hover:bg-indigo-400/50 transition-colors duration-500" />
                    </motion.div>

                    <motion.div
                        className="md:col-span-2 bg-surface rounded-3xl p-6 md:p-8 shadow-card border border-black/5 hover:shadow-hover transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold">Recent Customers</h3>
                            <button className="text-sm font-semibold text-primary hover:underline px-3 py-1.5 rounded-full hover:bg-primary/5 transition-colors">
                                View All
                            </button>
                        </div>
                        <CustomerList />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
