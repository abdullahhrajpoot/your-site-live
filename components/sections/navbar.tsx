"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/70 backdrop-blur-md border-black/5 shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Alytics</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-subtext hover:text-foreground transition-colors">Features</Link>
                    <Link href="#dashboard" className="text-sm font-medium text-subtext hover:text-foreground transition-colors">Dashboard</Link>
                    <Link href="#pricing" className="text-sm font-medium text-subtext hover:text-foreground transition-colors">Pricing</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Log in</Link>
                    <Link href="/signup" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:shadow-hover hover:scale-105 active:scale-95 transition-all duration-200">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-black/5 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden"
                    >
                        <Link href="#features" className="text-sm font-medium text-subtext" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                        <Link href="#dashboard" className="text-sm font-medium text-subtext" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                        <Link href="#pricing" className="text-sm font-medium text-subtext" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                        <hr className="border-black/5 my-2" />
                        <Link href="/login" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                        <Link href="/signup" className="text-sm font-medium bg-primary text-white text-center px-4 py-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
