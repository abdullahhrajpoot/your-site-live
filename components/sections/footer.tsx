import Link from "next/link";
import { Twitter, Github, Linkedin, BarChart2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-sm" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">Alytics</span>
                        </Link>
                        <p className="text-subtext text-sm mb-6 max-w-sm">
                            The modern SaaS analytics platform for scaling teams. Understand your data like never before.
                        </p>
                        <div className="flex items-center gap-4 text-subtext">
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Product</h4>
                        <ul className="flex flex-col gap-3 text-sm text-subtext">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-subtext">
                            <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Legal</h4>
                        <ul className="flex flex-col gap-3 text-sm text-subtext">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-sm text-subtext gap-4">
                    <p>© {new Date().getFullYear()} Alytics Inc. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with precision</span>
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>by perfectionists</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
